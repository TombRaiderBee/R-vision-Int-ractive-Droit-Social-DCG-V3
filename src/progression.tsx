import React from "react";
import { useLocalStorage } from "./utiliserLocalStorage";

type Styles = Record<string, React.CSSProperties>;

export function ProgressView({
  flashcardDecks,
  examInitialTotal,
  setView,
  setDeckId,
  styles,
  ui,
  lsPrefix,
}: {
  flashcardDecks: { id: string; name: string; cards: any[] }[];
  examInitialTotal: number;
  setView: (v: string) => void;
  setDeckId: (id: string | null) => void;
  styles: Styles;
  ui: any;
  lsPrefix: string;
}) {
  /* ===================================================== */
  /* FLASHCARDS                                           */
  /* ===================================================== */

  const flashcardStats = flashcardDecks.map((deck) => {
    const total = deck.cards.length;

    const [position] = useLocalStorage<number>(
      `${lsPrefix}flashcards:${deck.id}:position`,
      1
    );

    const [queue] = useLocalStorage<any[]>(
      `${lsPrefix}flashcards:${deck.id}:queue`,
      deck.cards
    );

    const started = position > 1 || queue.length < total;
    const done = started && position > total;

    const percent =
      total > 0
        ? Math.min(100, Math.max(0, ((position - 1) / total) * 100))
        : 0;

    return {
      id: deck.id,
      name: deck.name,
      started,
      done,
      percent,
    };
  });

  /* ===================================================== */
  /* CAS PRATIQUES (EXAM)                                 */
  /* ===================================================== */

  const [examPosition] = useLocalStorage<number>(`${lsPrefix}exam:position`, 1);

  const examTotal = examInitialTotal;

  const examStarted = examPosition > 1;
  const examDone = examStarted && examPosition > examTotal;

  const examPercent =
    examTotal > 0
      ? Math.min(100, Math.max(0, ((examPosition - 1) / examTotal) * 100))
      : 0;

  /* ===================================================== */
  /* RESET GLOBAL                                         */
  /* ===================================================== */

  const resetAll = () => {
    if (
      !window.confirm(
        "Voulez-vous vraiment réinitialiser TOUTE la progression ?"
      )
    )
      return;

    Object.keys(localStorage).forEach((k) => {
      if (k.startsWith(lsPrefix)) localStorage.removeItem(k);
    });

    setView("home");
  };

  /* ===================================================== */
  /* UI                                                   */
  /* ===================================================== */

  return (
    <div style={styles.card}>
      <h3 style={{ marginTop: 0 }}>Progression générale</h3>

      {/* ================= FLASHCARDS ================= */}
      <h4>📘 Cartes mémoire</h4>

      {flashcardStats.map((s) => (
        <div key={s.id} style={{ marginBottom: 14 }}>
          <strong>{s.name}</strong>

          <div style={{ fontSize: 12, color: ui.muted }}>
            {s.done
              ? "Terminé 🎉"
              : s.started
              ? `${Math.round(s.percent)}%`
              : "Non commencé"}
          </div>

          <div style={{ ...styles.barWrap, marginTop: 6 }}>
            <div style={styles.bar(s.percent)} />
          </div>

          {!s.done && (
            <button
              style={{ ...styles.btnSoft, marginTop: 6 }}
              onClick={() => {
                setDeckId(s.id);
                setView("flashcards");
              }}
            >
              {s.started ? "Continuer ➡" : "Commencer ▶"}
            </button>
          )}
        </div>
      ))}

      <div style={styles.separator} />

      {/* ================= CAS PRATIQUES ================= */}
      <h4>📝 Cas pratiques</h4>

      <div style={{ marginBottom: 12 }}>
        <strong>Cas pratiques DCG</strong>

        <div style={{ fontSize: 12, color: ui.muted }}>
          {examDone
            ? "Terminé 🎉"
            : examStarted
            ? `${Math.round(examPercent)}%`
            : "Non commencé"}
        </div>

        <div style={{ ...styles.barWrap, marginTop: 6 }}>
          <div style={styles.bar(examPercent)} />
        </div>

        {!examDone && (
          <button
            style={{ ...styles.btnSoft, marginTop: 6 }}
            onClick={() => setView("exam")}
          >
            {examStarted ? "Continuer ➡" : "Commencer ▶"}
          </button>
        )}
      </div>

      <div style={styles.separator} />

      {/* ================= RESET ================= */}
      <button
        style={{
          ...styles.btnSoft,
          width: "100%",
          background: "rgba(255,0,0,0.15)",
          border: "1px solid rgba(255,0,0,0.30)",
          color: "#ff6b6b",
          fontWeight: 800,
          marginTop: 8,
        }}
        onClick={resetAll}
      >
        🔄 Réinitialiser toute ma progression
      </button>
    </div>
  );
}
