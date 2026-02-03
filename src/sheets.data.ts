// ============================================================================
// sheets.data.ts — Fiches de révision UE3 (A + B + FULL)
// ============================================================================

// ======================
// Types (définis 1x ici)
// ======================

export type RevisionSection = {
  title: string;
  bullets: string[];
};

export type RevisionSheet = {
  id: string;
  name: string;
  intro?: string;
  sections: RevisionSection[];
};

// ============================================================================
// PARTIE A — Fiches UE3 01 → 07
// ============================================================================

export const REVISION_SHEETS_UE3_A: RevisionSheet[] = [
  {
    id: "ue3_sheet_01_intro",
    name: "UE3 – Introduction : droit social, droit du travail, protection sociale",
    intro:
      "Objectif : comprendre le cadre UE3, les notions fondamentales, et la logique protectrice. (Base obligatoire DCG)",
    sections: [
      {
        title: "🔶 1) Définitions clés",
        bullets: [
          "Droit social = droit du travail + protection sociale.",
          "Droit du travail = relations individuelles & collectives.",
          "Protection sociale = couverture des risques sociaux.",
        ],
      },
      {
        title: "🔶 2) Lien de subordination",
        bullets: [
          "Définition : ordres + contrôle + sanctions.",
          "Indices factuels : horaires, reporting, matériel, sanctions.",
          "Exemple : auto‑entrepreneur requalifiable si subordination.",
        ],
      },
      {
        title: "🔶 3) Pourquoi un droit protecteur ?",
        bullets: [
          "Protection du salarié en raison du déséquilibre structurel.",
          "Jamais répondre : « par tradition ».",
        ],
      },
    ],
  },

  {
    id: "ue3_sheet_02_sources",
    name: "UE3 – Sources du droit & hiérarchie des normes",
    intro:
      "Objectif : citer les sources, résoudre un conflit de normes, maîtriser les blocs.",
    sections: [
      {
        title: "🔶 1) Sources",
        bullets: [
          "International : OIT, ONU, Conseil de l’Europe.",
          "UE : règlements, directives.",
          "National : Constitution, lois, règlements.",
          "Professionnel : accords collectifs, RI, usages.",
          "Jurisprudence & doctrine.",
        ],
      },
      {
        title: "🔶 2) Hiérarchie & faveur",
        bullets: [
          "Hiérarchie = norme supérieure prime.",
          "Faveur = norme la plus favorable au salarié peut s’appliquer.",
        ],
      },
      {
        title: "🔶 3) Blocs Macron",
        bullets: [
          "Bloc 1 : branche prime.",
          "Bloc 2 : branche peut verrouiller.",
          "Bloc 3 : entreprise prime.",
        ],
      },
    ],
  },

  {
    id: "ue3_sheet_03_controles",
    name: "UE3 – Contrôles : DREETS, inspection, travail dissimulé",
    intro: "Objectif : savoir qui contrôle, pouvoirs, sanctions.",
    sections: [
      {
        title: "🔶 1) DREETS",
        bullets: [
          "Homologations RC",
          "Validation RCC",
          "Contrôles & sanctions administratives",
        ],
      },
      {
        title: "🔶 2) Inspection du travail",
        bullets: [
          "Entrée sans préavis",
          "Enquête",
          "PV pénal",
          "Mise en demeure",
        ],
      },
      {
        title: "🔶 3) Travail dissimulé",
        bullets: [
          "DPAE absente, heures dissimulées.",
          "Sanctions : pénal + URSSAF + prud’hommes.",
        ],
      },
      {
        title: "🔶 4) Recours",
        bullets: ["Gracieux", "Hiérarchique", "Tribunal administratif"],
      },
    ],
  },

  {
    id: "ue3_sheet_04_prudhommes",
    name: "UE3 – Prud’hommes & MARD",
    intro: "Objectif : compétence, procédure et modes amiables.",
    sections: [
      {
        title: "🔶 1) Compétence",
        bullets: ["Litiges individuels du travail", "Règles de territorialité"],
      },
      {
        title: "🔶 2) Procédure prud’homale",
        bullets: ["Saisine → Conciliation → Jugement → Départage → Appel"],
      },
      {
        title: "🔶 3) MARD",
        bullets: [
          "Procédure participative",
          "Transaction = concessions réciproques",
        ],
      },
    ],
  },

  {
    id: "ue3_sheet_05_recrutement",
    name: "UE3 – Recrutement : discrimination, vie privée, RGPD, handicap",
    intro: "Objectif : licite/illicite en entretien + preuves + sanctions.",
    sections: [
      {
        title: "🔶 1) Discrimination",
        bullets: [
          "Interdite sauf exigence professionnelle essentielle",
          "Sanctions civiles & pénales",
        ],
      },
      {
        title: "🔶 2) Vie privée",
        bullets: [
          "Licite : disponibilités, permis, mobilité.",
          "Illicite : religion, grossesse, orientation, situation familiale.",
        ],
      },
      {
        title: "🔶 3) RGPD",
        bullets: ["Finalité", "Minimisation", "Sécurisation", "Durée limitée"],
      },
      {
        title: "🔶 4) Handicap",
        bullets: ["OETH", "Déclaration via DSN"],
      },
    ],
  },

  {
    id: "ue3_sheet_06_formalites",
    name: "UE3 – Formalités d’embauche (DPAE, VIP, registre…)",
    intro: "Objectif : sécuriser une embauche en listant les obligations.",
    sections: [
      {
        title: "🔶 DPAE",
        bullets: ["Obligatoire avant embauche", "Sanctions si absence"],
      },
      {
        title: "🔶 Santé au travail",
        bullets: ["VIP", "Suivi selon postes à risques"],
      },
      {
        title: "🔶 Registre du personnel",
        bullets: ["Obligatoire dès le 1er salarié"],
      },
      {
        title: "🔶 Salariés étrangers",
        bullets: ["Vérifier autorisation de travail"],
      },
    ],
  },

  {
    id: "ue3_sheet_07_contrats",
    name: "UE3 – Diversité des contrats : CDI, CDD, CTT, alternance",
    intro: "Objectif : éviter requalification + calculs de CDD.",
    sections: [
      { title: "🔶 CDI", bullets: ["Forme générale", "Sans terme"] },
      {
        title: "🔶 CDD",
        bullets: [
          "Exception, motifs limitatifs",
          "Écrit obligatoire",
          "Requalification si irrégularité",
        ],
      },
      {
        title: "🔶 Rupture CDD",
        bullets: ["Cas limités : accord, faute grave, force majeure, CDI"],
      },
      {
        title: "🔶 Intérim",
        bullets: ["Logique : mission + entreprise utilisatrice"],
      },
      {
        title: "🔶 Alternance",
        bullets: ["Apprentissage", "Pro. = insertion"],
      },
    ],
  },
];

// ============================================================================
// PARTIE B — Fiches UE3 08 → 14
// ============================================================================

export const REVISION_SHEETS_UE3_B: RevisionSheet[] = [
  {
    id: "ue3_sheet_08_temps_partiel",
    name: "UE3 – Temps partiel (écrit, durée mini, HC)",
    intro: "Objectif : sécuriser un temps partiel.",
    sections: [
      {
        title: "🔶 1) Écrit obligatoire",
        bullets: ["Mention durée", "Répartition", "HC prévues"],
      },
      {
        title: "🔶 2) Durée minimale",
        bullets: ["24h sauf exceptions"],
      },
      {
        title: "🔶 3) Heures complémentaires",
        bullets: ["Majorations", "Limites", "Requalification si dérive"],
      },
    ],
  },

  {
    id: "ue3_sheet_09_temps_travail",
    name: "UE3 – Temps de travail (TTE, HS, repos, astreinte, nuit)",
    intro: "Objectif : qualifier TTE + limites horaires.",
    sections: [
      {
        title: "🔶 Temps de travail effectif",
        bullets: ["À disposition + directives + impossibilité de vaquer = TTE"],
      },
      {
        title: "🔶 Durées maximales",
        bullets: ["10h/jour", "48h/semaine", "44h / 12 semaines"],
      },
      {
        title: "🔶 Spécificités",
        bullets: [
          "Astreinte ≠ TTE",
          "Travail de nuit = protections",
          "Forfait jours = suivi obligatoire",
        ],
      },
    ],
  },

  {
    id: "ue3_sheet_10_remuneration",
    name: "UE3 – Rémunération, égalité, bulletin, saisie, AGS",
    intro: "Objectif : règles de salaire.",
    sections: [
      {
        title: "🔶 Salaire",
        bullets: ["SMIC", "Minima", "Égalité H/F", "Non-discrimination"],
      },
      {
        title: "🔶 Bulletin",
        bullets: ["Mentions essentielles", "Mentions interdites"],
      },
      {
        title: "🔶 Saisie",
        bullets: ["Barème", "Minimum insaisissable"],
      },
      {
        title: "🔶 AGS",
        bullets: ["Garanties en cas d’insolvabilité"],
      },
    ],
  },

  {
    id: "ue3_sheet_11_suspension",
    name: "UE3 – Suspension du contrat (maladie, AT/MP, maternité)",
    intro: "Objectif : qualifier une suspension.",
    sections: [
      {
        title: "🔶 AT / MP",
        bullets: [
          "Fait soudain",
          "Délais 24h / 48h",
          "Protection contre le licenciement",
        ],
      },
      {
        title: "🔶 IJSS",
        bullets: ["60% puis 80%"],
      },
      {
        title: "🔶 Reprise",
        bullets: ["Visite obligatoire selon durée"],
      },
    ],
  },

  {
    id: "ue3_sheet_12_collectif",
    name: "UE3 – Relations collectives",
    intro: "Syndicats, accords, CSE, grève.",
    sections: [
      { title: "🔶 Syndicats", bullets: ["Liberté", "Représentativité"] },
      { title: "🔶 Accords", bullets: ["Majoritaire > 50%"] },
      {
        title: "🔶 CSE",
        bullets: ["Seuil 11/50", "Budgets", "Consultations", "Protection"],
      },
      {
        title: "🔶 Grève",
        bullets: ["Arrêt total", "Collectif", "Rev. professionnelles"],
      },
    ],
  },

  {
    id: "ue3_sheet_13_epargne",
    name: "UE3 – Épargne salariale",
    intro: "Intéressement, participation.",
    sections: [
      {
        title: "🔶 Définitions",
        bullets: ["Intéressement", "Participation", "Épargne salariale"],
      },
      {
        title: "🔶 Réflexes",
        bullets: ["Accord écrit", "Bénéficiaires", "Modalités"],
      },
    ],
  },

  {
    id: "ue3_sheet_14_protection_sociale",
    name: "UE3 – Protection sociale (socle complet)",
    intro: "Organisation + risques couverts.",
    sections: [
      {
        title: "🔶 Organisation",
        bullets: ["Sécurité sociale", "Complémentaires"],
      },
      {
        title: "🔶 Chômage",
        bullets: ["Perte involontaire d’emploi", "Conditions d’ouverture"],
      },
      {
        title: "🔶 Complémentaire",
        bullets: ["Mutuelle", "Prévoyance", "Retraite complémentaire"],
      },
      {
        title: "🔶 Contentieux",
        bullets: ["URSSAF", "CPAM", "Procédures spécifiques"],
      },
    ],
  },
];

// ============================================================================
// FULL — CONCATENATION DES FICHES A + B
// ============================================================================

export const REVISION_SHEETS_UE3_FULL: RevisionSheet[] = [
  ...REVISION_SHEETS_UE3_A,
  ...REVISION_SHEETS_UE3_B,
];

// Export par défaut (optionnel)
export default REVISION_SHEETS_UE3_FULL;
