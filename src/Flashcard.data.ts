// ============================================================================
// flashcard.data.ts — Flashcards DCG UE3 (Droit social)
// ============================================================================

export type Flashcard = {
  front: string;
  back: string;
  tip?: string;
};

export type FlashcardDeck = {
  id: string;
  name: string;
  cards: Flashcard[];
};

// ============================================================================
// FLASHCARDS — Ensemble complet (tiré de ton fichier Word)
// ============================================================================

export const flashcardDecks: FlashcardDeck[] = [
  // ---------------------------------------------------------------------------
  // 01 — Contrat de travail : définition & critères
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_ri_01",
    name: "Le contrat de travail – définition et critères",
    cards: [
      {
        front: "Qu’est‑ce qu’un contrat de travail ?",
        back: "Une convention par laquelle une personne s’engage à travailler pour une autre sous sa subordination, moyennant rémunération.",
        tip: "Toujours citer les 3 critères.",
      },
      {
        front: "Quels sont les 3 critères du contrat de travail ?",
        back: "Prestation de travail, rémunération, lien de subordination.",
        tip: "Sans subordination → pas de contrat.",
      },
      {
        front: "Qu’est‑ce que le lien de subordination ?",
        back: "Pouvoir de donner des ordres, en contrôler l’exécution et sanctionner.",
        tip: "Définition arrêt Société Générale.",
      },
      {
        front: "Qui qualifie l’existence du contrat de travail ?",
        back: "Le juge, selon le principe de réalité.",
        tip: "Qualification par les faits et non par le titre.",
      },
      {
        front: "Un contrat écrit est‑il obligatoire ?",
        back: "Non pour CDI temps plein, mais OBLIGATOIRE pour CDD, temps partiel, etc.",
      },
      {
        front: "Différence salarié / indépendant ?",
        back: "Le salarié est subordonné ; l'indépendant organise librement son travail.",
        tip: "Attention aux faux indépendants.",
      },
      {
        front: "Qu’est‑ce qu'un faux indépendant ?",
        back: "Une personne présentée comme indépendante mais en réalité subordonnée.",
        tip: "Requalification possible.",
      },
      {
        front: "Qu’est‑ce que la requalification ?",
        back: "Transformation par le juge d’un contrat apparent en contrat de travail.",
      },
      {
        front: "Effets de la requalification ?",
        back: "Application du droit du travail + cotisations sociales + sanctions.",
      },
      {
        front:
          "La volonté des parties suffit‑elle à exclure un contrat de travail ?",
        back: "Non : la réalité des faits prime sur la volonté.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 02 — Relations collectives & épargne salariale
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_collectif_complet",
    name: "Relations collectives & épargne salariale",
    cards: [
      {
        front: "Qu’est‑ce que la négociation collective ?",
        back: "Processus employeurs / syndicats pour conclure accords.",
      },
      {
        front: "Qu’est‑ce que l’intéressement ?",
        back: "Dispositif facultatif associant salariés aux performances.",
      },
      {
        front: "Qu’est‑ce que la participation ?",
        back: "Dispositif obligatoire redistribuant une partie des bénéfices.",
      },
      {
        front: "Qu’est‑ce que l’épargne salariale ?",
        back: "Mécanismes pour épargner avec l’aide de l’entreprise.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 03 — Suspension du contrat
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_suspension",
    name: "Suspension du contrat de travail",
    cards: [
      {
        front: "Qu’est‑ce que la suspension du contrat ?",
        back: "Arrêt temporaire sans rupture.",
      },
      {
        front: "Définition AT ?",
        back: "Fait soudain survenu par le fait ou à l’occasion du travail.",
      },
      { front: "Délais AT ?", back: "24h salarié, 48h employeur." },
      {
        front: "Protection AT/MP ?",
        back: "Interdiction de licenciement (sauf exceptions).",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 04 — Temps de travail (avancé)
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_temps_travail_avance",
    name: "Temps de travail – notions avancées",
    cards: [
      {
        front: "Définition TTE ?",
        back: "À disposition + directives + pas libre.",
      },
      {
        front: "Qu’est‑ce qu’une astreinte ?",
        back: "Période de disponibilité hors lieu de travail.",
      },
      { front: "Forfait‑jours : pour qui ?", back: "Salariés autonomes." },
      { front: "Travail de nuit ?", back: "Travail accompli entre 21h et 6h." },
    ],
  },

  // ---------------------------------------------------------------------------
  // 05 — Rémunération & bulletin
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_remuneration",
    name: "Rémunération & bulletin de paie",
    cards: [
      { front: "Définition salaire ?", back: "Contrepartie du travail." },
      { front: "Qu’est‑ce que le SMIC ?", back: "Salaire minimum légal." },
      { front: "Principe : à travail égal ?", back: "Salaire égal." },
      {
        front: "Qu’est‑ce que la NAO ?",
        back: "Négociation annuelle obligatoire.",
      },
      {
        front: "Mentions obligatoires bulletin ?",
        back: "Identité, brut, cotisations, net à payer, net imposable.",
      },
      {
        front: "Qu’est‑ce que l’AGS ?",
        back: "Organisme garantissant les salaires en cas de défaillance de l’employeur.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 06 — Contrôles / Inspection du travail
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_controles",
    name: "Contrôles – Inspection du travail & DREETS",
    cards: [
      {
        front: "Qu’est‑ce que la DREETS ?",
        back: "Administration chargée du contrôle du droit du travail.",
      },
      {
        front: "Missions DREETS ?",
        back: "Homologations, validations, contrôles, sanctions.",
      },
      {
        front: "Rôle inspection ?",
        back: "Contrôle, information, conciliation.",
      },
      {
        front: "Pouvoirs inspection ?",
        back: "Entrée, enquête, documents, PV.",
      },
      {
        front: "Définition travail dissimulé ?",
        back: "Dissimulation activité ou emploi salarié.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 07 — Protection sociale (bases)
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_protection_sociale_01",
    name: "Protection sociale – bases",
    cards: [
      {
        front: "Qu’est‑ce que la protection sociale ?",
        back: "Couverture des risques (maladie, vieillesse, chômage…).",
      },
      {
        front: "Risques couverts ?",
        back: "Maladie, maternité, invalidité, AT/MP, vieillesse, décès.",
      },
      { front: "AT : définition ?", back: "Fait soudain lié au travail." },
      { front: "Délais AT ?", back: "24h / 48h." },
      {
        front: "Maladie professionnelle ?",
        back: "Tableau ou procédure spécifique.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 08 — Clauses & formation du contrat
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_contrat_02",
    name: "Formation du contrat & clauses",
    cards: [
      {
        front: "Offre vs promesse ?",
        back: "Promesse vaut contrat si acceptée.",
      },
      {
        front: "Conditions de validité ?",
        back: "Consentement, capacité, objet, cause.",
      },
      { front: "Période d’essai ?", back: "Doit être écrite." },
      {
        front: "Durées essai CDI ?",
        back: "2 mois / 3 mois / 4 mois (renouvelable).",
      },
      {
        front: "Conditions clause non‑concurrence ?",
        back: "Intérêt légitime, limites, proportionnalité, contrepartie financière.",
      },
      { front: "Clause exclusivité temps partiel ?", back: "Interdite." },
    ],
  },

  // ---------------------------------------------------------------------------
  // 09 — Recrutement / Discrimination
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_recrutement_01",
    name: "Recrutement – discrimination & vie privée",
    cards: [
      { front: "Principe en recrutement ?", back: "Non‑discrimination." },
      {
        front: "Définition discrimination ?",
        back: "Différence fondée sur critère prohibé.",
      },
      {
        front: "Critères interdits ?",
        back: "Sexe, âge, origine, handicap, religion...",
      },
      { front: "Exception ?", back: "Exigence professionnelle essentielle." },
      {
        front: "Questions licites ?",
        back: "Seules avec lien direct avec l'emploi.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 10 — Relations collectives : syndicats / CSE / accords / grève
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_rc_01",
    name: "Relations collectives – Principes généraux",
    cards: [
      {
        front: "Relations collectives ?",
        back: "Rapports employeur / représentants salariés.",
      },
      {
        front: "Liberté syndicale ?",
        back: "Adhérer / ne pas adhérer, protection.",
      },
      { front: "Représentativité ?", back: "Critères cumulatifs + audience." },
      {
        front: "Délégué syndical ?",
        back: "Représente syndicat, négocie accords.",
      },
      { front: "CSE ?", back: "Instance unique de représentation." },
      {
        front: "Hiérarchie normes ?",
        back: "Constitution > loi > accords > contrat.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 11 — Durée du travail (général)
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_dt_01",
    name: "Durée du travail – règles générales",
    cards: [
      {
        front: "Définition TTE ?",
        back: "À disposition + directives + pas libre.",
      },
      { front: "Durée légale ?", back: "35h/semaine." },
      { front: "Heure supplémentaire ?", back: "Heure > 35h (sauf forfait)." },
      { front: "Majoration HS ?", back: "25% puis 50%." },
      { front: "Durée max jour ?", back: "10h/jour." },
      { front: "Durée max semaine ?", back: "48h / 44h moyenne." },
    ],
  },

  // ---------------------------------------------------------------------------
  // 12 — Sources du droit
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_sources_01",
    name: "Sources du droit du travail",
    cards: [
      {
        front: "Droit du travail ?",
        back: "Organisation relations individuelles et collectives.",
      },
      {
        front: "Sources internationales ?",
        back: "OIT, ONU, Conseil de l'Europe.",
      },
      {
        front: "Sources européennes ?",
        back: "Traités, règlements, directives.",
      },
      {
        front: "Sources nationales ?",
        back: "Constitution, lois, règlements.",
      },
      {
        front: "Principe de faveur ?",
        back: "Règle + favorable = applicable.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 13 — Rupture du contrat
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_rcd_01",
    name: "Rupture du contrat de travail",
    cards: [
      { front: "Démission ?", back: "Volonté claire et non équivoque." },
      { front: "Licenciement ?", back: "À l'initiative de l'employeur." },
      {
        front: "Cause réelle et sérieuse ?",
        back: "Motif objectif, exact, grave.",
      },
      { front: "Faute grave ?", back: "Impossible de maintenir le salarié." },
      {
        front: "Rupture conventionnelle ?",
        back: "Accord des parties + homologation DREETS.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 14 — Comité Social et Économique (CSE)
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_cse_01",
    name: "Représentation du personnel – CSE",
    cards: [
      {
        front: "Qu'est-ce que le CSE ?",
        back: "Instance unique de représentation du personnel.",
      },
      { front: "Seuil CSE ?", back: "11 salariés sur 12 mois." },
      {
        front: "Missions CSE 50+ salariés ?",
        back: "Économique, social, sécurité.",
      },
      { front: "Droit d’alerte ?", back: "Signaler situation grave." },
      { front: "Heures de délégation ?", back: "Temps rémunéré." },
    ],
  },

  // ---------------------------------------------------------------------------
  // 15 — Contentieux du travail
  // ---------------------------------------------------------------------------
  {
    id: "flash_dcg_ct_01",
    name: "Contentieux du travail – Prud’hommes",
    cards: [
      {
        front: "Compétence prud’hommes ?",
        back: "Litiges individuels du travail.",
      },
      { front: "BCO ?", back: "Bureau de conciliation et d’orientation." },
      { front: "BJ ?", back: "Bureau de jugement." },
      { front: "Juge départiteur ?", back: "Magistrat professionnel." },
      { front: "Prescription salaires ?", back: "3 ans." },
    ],
  },
];
