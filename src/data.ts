// ===// ============================================================================
// data.ts — Point d'entrée unique des données
// ============================================================================

// Sous‑catégories
import { flashcardDecks } from "./Flashcard.data";

import {
  EXAM_CASES_DCG,
  EXAM_CASES_DCG_16_30,
  EXAM_CASES_DCG_31_50,
  EXAM_CASES_DCG_51_100,
  EXAM_CASES_DCG_ADDITIONAL,
  EXAM_CASES_DCG_FULL,
} from "./exam.data";

import {
  REVISION_SHEETS_UE3_A,
  REVISION_SHEETS_UE3_B,
  REVISION_SHEETS_UE3_FULL,
} from "./sheets.data";

// ============================================================================
// Type principal
// ============================================================================
export type DataModel = {
  flashcardDecks: typeof flashcardDecks;
  examCases: typeof EXAM_CASES_DCG_FULL;
  revisionSheets: typeof REVISION_SHEETS_UE3_FULL;
};

// ============================================================================
// Objet GLOBAL de données
// ============================================================================
export const DEFAULT_DATA: DataModel = {
  flashcardDecks,
  examCases: EXAM_CASES_DCG_FULL,
  revisionSheets: REVISION_SHEETS_UE3_FULL,
};

export const DATA = DEFAULT_DATA;
export default DEFAULT_DATA;

// ============================================================================
// Réexports optionnels (NE PAS TOUCHER)
// ============================================================================
export {
  // Exam (DCG)
  EXAM_CASES_DCG,
  EXAM_CASES_DCG_16_30,
  EXAM_CASES_DCG_31_50,
  EXAM_CASES_DCG_51_100,
  EXAM_CASES_DCG_ADDITIONAL,
  EXAM_CASES_DCG_FULL,

  // Fiches UE3
  REVISION_SHEETS_UE3_A,
  REVISION_SHEETS_UE3_B,
  REVISION_SHEETS_UE3_FULL,

  // Collections brutes
  flashcardDecks,
};
