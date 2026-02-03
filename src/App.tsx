// src/App.tsx
import React, { useMemo } from "react";

/* ===================================== */
/* ============== DATA ================= */
/* ===================================== */
import { DEFAULT_DATA as RAW_DEFAULT_DATA, EXAM_CASES_DCG } from "./data";

/* ===================================== */
/* ============== VIEWS ================ */
/* ===================================== */
import { FlashcardsView } from "./Flashcard";
import { SheetsView } from "./Sheets";
import { ExamFlashcards } from "./exam";
import { ProgressView } from "./progression";

/* ===================================== */
/* ========= LOCAL STORAGE HOOK ========= */
/* ===================================== */
import { useLocalStorage } from "../utiliserLocalStorage";

/* ===================================== */
/* ============== TYPES ================= */
/* ===================================== */
type View = "flashcards" | "quiz" | "sheets" | "exam" | "progress";

/* ===================================== */
/* ============ THEME / UI ============== */
/* ===================================== */
const ui = {
  bg: "#0b1020",
  card: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.10)",
  text: "#F3F4F6",
  muted: "rgba(243,244,246,0.65)",
  primary: "#7c3aed",
  success: "#22c55e",
  warning: "#f59e0b",

  // Compatibilité flashcards
  good: "#22c55e",
  warn: "#f59e0b",
};

/* ===================================== */
/* ============ STYLES ================= */
/* ===================================== */
const styles: Record<string, any> = {
  app: {
    minHeight: "100vh",
    background:
      "radial-gradient(900px 500px at 10% 0%, rgba(124,58,237,0.35), transparent 60%), linear-gradient(180deg,#0b1020,#070a14)",
    color: ui.text,
    padding: 24,
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },

  container: { maxWidth: 900, margin: "0 auto" },

  header: { marginBottom: 18 },
  title: { margin: 0, fontSize: 28, fontWeight: 700 },
  subtitle: { marginTop: 6, color: ui.muted },

  nav: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 20,
  },

  tab: (active: boolean) => ({
    padding: "10px 14px",
    borderRadius: 999,
    border: `1px solid ${ui.border}`,
    background: active ? ui.primary : "rgba(255,255,255,0.05)",
    color: active ? "#fff" : ui.text,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s ease",
  }),

  card: {
    background: ui.card,
    border: `1px solid ${ui.border}`,
    borderRadius: 14,
    padding: 18,
  },

  /* --- Styles manquants nécessaires pour Flashcards + Exam + Progress --- */

  flashCard: {
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${ui.border}`,
    borderRadius: 14,
    padding: 16,
    lineHeight: 1.6,
  },

  separator: {
    height: 1,
    background: ui.border,
    margin: "12px 0",
  },

  barWrap: {
    width: "100%",
    height: 8,
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    overflow: "hidden",
    border: `1px solid ${ui.border}`,
  },

  bar: (percent: number) => ({
    width: `${Math.max(0, Math.min(100, percent))}%`,
    height: "100%",
    background: ui.primary,
    transition: "width 0.25s ease",
  }),

  btnSoft: {
    padding: "10px 14px",
    borderRadius: 6,
    border: `1px solid ${ui.border}`,
    background: "rgba(255,255,255,0.05)",
    color: ui.text,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
};

/* ===================================== */
/* ========= LOCAL STORAGE PREFIX ======= */
/* ===================================== */
const LS_PREFIX = "ds:";

/* ===================================== */
/* ============ APP COMPONENT =========== */
/* ===================================== */
export default function App() {
  // Sécurisation des données
  const flashcardDecks = useMemo(
    () => RAW_DEFAULT_DATA.flashcardDecks ?? [],
    []
  );
  const quizDecks = useMemo(() => RAW_DEFAULT_DATA.quizDecks ?? [], []);
  const revisionSheets = useMemo(
    () => RAW_DEFAULT_DATA.revisionSheets ?? [],
    []
  );
  const examCases = useMemo(() => RAW_DEFAULT_DATA.examCases ?? [], []);

  const [view, setView] = useLocalStorage<View>(
    `${LS_PREFIX}view`,
    "flashcards"
  );

  const [deckId, setDeckId] = useLocalStorage<string | null>(
    `${LS_PREFIX}deck`,
    null
  );

  const tabs = [
    { key: "flashcards", label: "📇 Cartes" },
    { key: "exam", label: "📝 Cas pratiques" },
    { key: "sheets", label: "📄 Fiches" },
    { key: "progress", label: "📈 Progression" },
  ];

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        {/* ======= Header ======= */}
        <header style={styles.header}>
          <h1 style={styles.title}>📘 DCG – Droit social</h1>
          <p style={styles.subtitle}>Révision intelligente • UE3</p>
        </header>

        {/* ======= Navigation ======= */}
        <nav style={styles.nav}>
          {tabs.map((t) => (
            <button
              key={t.key}
              style={styles.tab(view === t.key)}
              onClick={() => {
                setView(t.key as View);
                if (t.key !== "flashcards") setDeckId(null);
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* ======= Views ======= */}
        {view === "flashcards" && (
          <FlashcardsView
            decks={flashcardDecks}
            deckId={deckId}
            onSelect={setDeckId}
            styles={styles}
            ui={ui}
            lsPrefix={LS_PREFIX}
          />
        )}

        {view === "sheets" && (
          <SheetsView
            sheets={revisionSheets}
            styles={styles}
            ui={ui}
            lsPrefix={LS_PREFIX}
          />
        )}

        {view === "exam" && (
          <ExamFlashcards
            cases={examCases}
            styles={styles}
            ui={ui}
            lsPrefix={LS_PREFIX}
          />
        )}

        {view === "progress" && (
          <ProgressView
            flashcardDecks={flashcardDecks}
            quizDecks={quizDecks}
            examInitialTotal={EXAM_CASES_DCG.length}
            setView={setView}
            setDeckId={setDeckId}
            styles={styles}
            ui={ui}
            lsPrefix={LS_PREFIX}
          />
        )}
      </div>
    </div>
  );
}
