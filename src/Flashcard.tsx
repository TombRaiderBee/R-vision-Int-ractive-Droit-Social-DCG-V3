// src/Flashcards.tsx
import React from "react";
import { useLocalStorage } from "./utiliserLocalStorage";

/* ===================== */
/* TYPES */
/* ===================== */

export type Flashcard = {
  id: string;
  front: string;
  back: string;
  tip?: string;
};

type Styles = Record<string, React.CSSProperties>;

/* ===================== */
/* FLASHCARDS VIEW */
/* ===================== */

export function FlashcardsView({
  decks,
  deckId,
  onSelect,
  styles,
  ui,
  lsPrefix,
}: {
  decks: {
    id: string;
    name: string;
    cards: Flashcard[];
  }[];
  deckId: string | null;
  onSelect: (id: string | null) => void;
  styles: Styles;
  ui: any;
  lsPrefix: string;
}) {
  const deck = decks.find((d) => d.id === deckId);

  if (!deck) {
    return (
      <div style={styles.card}>
        {decks.map((d) => (
          <button
            key={d.id}
            style={{ ...styles.btnSoft, width: "100%", marginBottom: 10 }}
            onClick={() => onSelect(d.id)}
          >
            {d.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <FlashcardStack
      cards={deck.cards}
      onBack={() => onSelect(null)}
      storageKey={`${lsPrefix}flashcards:${deck.id}`}
      styles={styles}
      ui={ui}
    />
  );
}

/* ===================== */
/* FLASHCARD STACK */
/* ===================== */

function FlashcardStack({
  cards,
  onBack,
  storageKey,
  styles,
  ui,
}: {
  cards: Flashcard[];
  onBack: () => void;
  storageKey: string;
  styles: Styles;
  ui: any;
}) {
  const [queue, setQueue] = useLocalStorage<Flashcard[]>(
    `${storageKey}:queue`,
    cards
  );

  const [revealed, setRevealed] = useLocalStorage<boolean>(
    `${storageKey}:revealed`,
    false
  );

  const total = cards.length;

  const [position, setPosition] = useLocalStorage<number>(
    `${storageKey}:position`,
    1
  );

  React.useEffect(() => {
    if (total <= 0) return;
    setPosition((p) => Math.min(Math.max(1, Number(p) || 1), total));
  }, [total, setPosition]);

  const card = queue[0];

  const next = (again: boolean) => {
    if (!card) return;
    setRevealed(false);

    if (!again && total > 0) {
      setPosition((p) => Math.min(p + 1, total));
    }

    setQueue((q) => {
      const [, ...rest] = q;
      return again ? [...rest, card] : rest;
    });
  };

  const percent = total > 0 ? (position / total) * 100 : 0;

  if (!card) {
    return (
      <div style={styles.card}>
        <p>🎉 Terminé !</p>
        <button style={styles.btnSoft} onClick={onBack}>
          ⬅ Retour
        </button>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      {/* --- Progression simple (texte) pour rester cohérent et éviter la barre --- */}
      {/* --- Barre de progression --- */}
      <div style={{ fontSize: 12, color: ui.muted, marginBottom: 6 }}></div>

      <div style={{ ...styles.barWrap, marginBottom: 12 }}>
        <div style={styles.bar(percent)} />
      </div>

      <div
        style={{ ...styles.flashCard, marginTop: 16 }}
        onClick={() => setRevealed(true)}
      >
        <div style={{ fontSize: 22, fontWeight: 900 }}>{card.front}</div>

        {revealed && (
          <>
            <div style={styles.separator} />
            <div>{card.back}</div>
            {card.tip && (
              <div style={{ marginTop: 10, color: ui.muted }}>
                💡 {card.tip}
              </div>
            )}
          </>
        )}
      </div>

      {revealed && (
        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          {/* 🔹 MÊME STYLE QUE DANS EXAM : btnSoft */}
          <button style={styles.btnSoft} onClick={() => next(false)}>
            ✓ Je sais
          </button>

          <button style={styles.btnSoft} onClick={() => next(true)}>
            🔁 À revoir
          </button>
        </div>
      )}
    </div>
  );
}
