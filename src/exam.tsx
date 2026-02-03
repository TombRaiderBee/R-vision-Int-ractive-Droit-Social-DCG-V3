import React from "react";
import { useLocalStorage } from "../utiliserLocalStorage";

/* ===================== */
/* TYPES */
/* ===================== */

export type ExamCase = {
  id: string;
  question: string;
  correction: {
    rule: string;
    application: string;
    conclusion: string;
  };
};

type Styles = Record<string, React.CSSProperties>;

/* ===================== */
/* EXAM VIEW */
/* ===================== */

export function ExamFlashcards({
  cases,
  styles,
  ui,
  lsPrefix,
}: {
  cases: ExamCase[];
  styles: Styles;
  ui: any;
  lsPrefix: string;
}) {
  return (
    <ExamStack
      cases={cases}
      storageKey={`${lsPrefix}exam`}
      styles={styles}
      ui={ui}
    />
  );
}

/* ===================== */
/* EXAM STACK */
/* ===================== */

function ExamStack({
  cases,
  storageKey,
  styles,
  ui,
}: {
  cases: ExamCase[];
  storageKey: string;
  styles: Styles;
  ui: any;
}) {
  const safeCases = Array.isArray(cases) ? cases : [];
  const total = safeCases.length;

  const [position, setPosition] = useLocalStorage<number>(
    `${storageKey}:position`,
    1
  );

  const [revealed, setRevealed] = useLocalStorage<boolean>(
    `${storageKey}:revealed`,
    false
  );

  // Sécurité position
  React.useEffect(() => {
    if (total <= 0) return;
    setPosition((p) => Math.min(Math.max(1, Number(p) || 1), total + 1));
  }, [total, setPosition]);

  const examStarted = position > 1;
  const examDone = examStarted && position > total;

  const item = safeCases[position - 1];

  /* ============================= */
  /*       RESET EXAM              */
  /* ============================= */

  const resetExam = () => {
    if (!window.confirm("Réinitialiser les cas pratiques ?")) return;
    setPosition(1);
    setRevealed(false);
  };

  /* ============================= */
  /*          TERMINÉ              */
  /* ============================= */

  if (examDone) {
    return (
      <div style={styles.card}>
        <p>🎉 Tous les cas pratiques sont terminés !</p>

        <button
          style={{
            ...styles.btnSoft,
            marginTop: 10,
            background: "rgba(255,0,0,0.15)",
            border: "1px solid rgba(255,0,0,0.30)",
            color: "#ff6b6b",
            fontWeight: 800,
          }}
          onClick={resetExam}
        >
          🔄 Réinitialiser les cas pratiques
        </button>
      </div>
    );
  }

  if (!item) return null;

  /* ============================= */
  /*           AFFICHAGE           */
  /* ============================= */

  return (
    <div style={styles.card}>
      {/* Progression */}

      <div style={{ ...styles.barWrap, marginBottom: 12 }}>
        <div style={styles.bar(((position - 1) / total) * 100)} />
      </div>

      {/* Carte */}
      <div
        style={{ ...styles.flashCard, marginTop: 16, cursor: "pointer" }}
        onClick={() => setRevealed(true)}
      >
        <div style={{ fontSize: 20, fontWeight: 900 }}>{item.question}</div>

        {revealed && (
          <>
            <div style={styles.separator} />
            <p>
              <strong>Règle :</strong> {item.correction.rule}
            </p>
            <p>
              <strong>Application :</strong> {item.correction.application}
            </p>
            <p>
              <strong>Conclusion :</strong> {item.correction.conclusion}
            </p>
          </>
        )}
      </div>

      {/* Boutons */}
      {revealed && (
        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          <button
            style={styles.btnSoft}
            onClick={() => {
              setPosition((p) => p + 1);
              setRevealed(false);
            }}
          >
            ✓ Je sais
          </button>

          <button
            style={styles.btnSoft}
            onClick={() => {
              setPosition((p) => p + 1);
              setRevealed(false);
            }}
          >
            🔁 À revoir
          </button>
        </div>
      )}
    </div>
  );
}
