// src/Sheets.tsx
import React from "react";
import { useLocalStorage } from "../utiliserLocalStorage";

/* ===================== */
/* TYPES */
/* ===================== */

type Styles = Record<string, React.CSSProperties>;

export type NormalizedRevisionSheet = {
  id: string;
  name: string;
  intro?: string;
  sections: {
    title: string;
    bullets: string[];
  }[];
};

/* ===================== */
/* SHEETS VIEW */
/* ===================== */

export function SheetsView({
  sheets,
  styles,
  ui,
  lsPrefix,
}: {
  sheets: NormalizedRevisionSheet[];
  styles: Styles;
  ui: any;
  lsPrefix: string;
}) {
  // Valeur initiale = première fiche
  const [active, setActive] = useLocalStorage<string | undefined>(
    `${lsPrefix}sheets:active`,
    () => sheets[0]?.id
  );

  const sheet = sheets.find((s) => s.id === active) ?? sheets[0]; // Sécurité pour éviter undefined

  return (
    <div style={styles.card}>
      {/* ---- Onglets ---- */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {sheets.map((s) => (
          <button
            key={s.id}
            style={styles.tab(s.id === sheet?.id)}
            onClick={() => setActive(s.id)}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div style={styles.separator} />

      {/* ---- Contenu de la fiche ---- */}
      {sheet && (
        <>
          {sheet.intro && <p>{sheet.intro}</p>}

          {sheet.sections.map((sec, i) => (
            <div key={i} style={{ marginTop: 12 }}>
              <strong>{sec.title}</strong>
              <ul>
                {sec.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
