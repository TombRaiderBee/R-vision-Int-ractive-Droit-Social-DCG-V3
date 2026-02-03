// ============================================================================
// exam.data.ts — BLOC 1/6
// EXAM_CASES_DCG — Cas 001 à 015
// ============================================================================

// Types (garde-les une seule fois dans le fichier)
export type ExamCorrection = {
  rule: string;
  application: string;
  conclusion: string;
};

export type ExamCase = {
  id: string;
  theme: string;
  question: string;
  correction: ExamCorrection;
};

// Liste des cas d'examen 001 à 015
export const EXAM_CASES_DCG: ExamCase[] = [
  {
    id: "exam_001",
    theme: "Contrat de travail – Qualification",
    question:
      "Paul travaille depuis deux ans pour une société. Il doit respecter des horaires imposés, reçoit des directives précises et utilise exclusivement le matériel de l’entreprise. Il est pourtant rémunéré par facture en tant qu’auto‑entrepreneur. Peut‑il obtenir la reconnaissance d’un contrat de travail ?",
    correction: {
      rule: "Le contrat de travail est caractérisé par l’exécution d’une prestation pour le compte d’autrui moyennant rémunération et surtout l’existence d’un lien de subordination juridique.",
      application:
        "Horaires imposés, directives précises, matériel fourni → indices forts de subordination.",
      conclusion:
        "Oui, Paul peut obtenir la requalification en contrat de travail devant le conseil de prud’hommes.",
    },
  },

  {
    id: "exam_002",
    theme: "CDD – Conditions de validité",
    question:
      "Sophie est embauchée en CDD pour une durée de six mois. Le contrat écrit ne précise aucun motif de recours. Le CDD est‑il valable ?",
    correction: {
      rule: "Un CDD doit obligatoirement indiquer un motif précis. À défaut, il est réputé conclu en CDI.",
      application:
        "Le contrat ne comporte aucun motif de recours : irrégularité substantielle.",
      conclusion: "Le CDD peut être requalifié en CDI.",
    },
  },

  {
    id: "exam_003",
    theme: "Temps de travail effectif",
    question:
      "Un salarié doit rester sur son lieu de travail pendant sa pause déjeuner afin de répondre aux appels en cas d’urgence. Cette période constitue‑t‑elle du temps de travail effectif ?",
    correction: {
      rule: "Le temps de travail effectif correspond au temps pendant lequel le salarié est à la disposition de l’employeur et ne peut vaquer librement à ses occupations.",
      application:
        "Il doit rester sur place et répondre aux urgences : pas de liberté d’aller et venir.",
      conclusion: "La pause constitue du temps de travail effectif.",
    },
  },

  {
    id: "exam_004",
    theme: "Pouvoir disciplinaire – Non bis in idem",
    question:
      "Un employeur sanctionne un salarié par un avertissement pour un retard répété. Un mois plus tard, il prononce une mise à pied pour les mêmes faits. Cette seconde sanction est‑elle valable ?",
    correction: {
      rule: "On ne peut pas sanctionner deux fois un salarié pour les mêmes faits fautifs.",
      application: "Les faits ont déjà été sanctionnés par un avertissement.",
      conclusion: "La mise à pied est irrégulière.",
    },
  },

  {
    id: "exam_005",
    theme: "Licenciement – Insuffisance professionnelle",
    question:
      "Un salarié est licencié pour insuffisance professionnelle sans avoir reçu d’avertissement préalable. Le licenciement est‑il valable ?",
    correction: {
      rule: "L’insuffisance professionnelle peut constituer une cause réelle et sérieuse et ne nécessite pas nécessairement un avertissement.",
      application:
        "L’absence d’avertissement n’invalide pas le licenciement si l’insuffisance est objectivement démontrée.",
      conclusion: "Le licenciement peut être valable.",
    },
  },

  {
    id: "exam_006",
    theme: "Rupture – Démission",
    question:
      "Un salarié quitte son poste à la suite d’un différend avec son employeur sans exprimer clairement sa volonté de démissionner. Peut‑on qualifier la rupture de démission ?",
    correction: {
      rule: "La démission doit résulter d’une volonté claire, sérieuse et non équivoque du salarié.",
      application:
        "Le départ est intervenu dans un contexte conflictuel, sans expression claire.",
      conclusion: "La rupture ne peut pas être qualifiée de démission.",
    },
  },

  {
    id: "exam_007",
    theme: "Licenciement économique – Conditions",
    question:
      "Une entreprise licencie un salarié pour difficultés économiques sans suppression ni transformation de poste. Le licenciement est‑il valable ?",
    correction: {
      rule: "Le licenciement économique suppose un motif économique ET une suppression ou transformation de poste.",
      application: "Aucune suppression ni transformation n'est établie.",
      conclusion: "Le licenciement est dépourvu de cause réelle et sérieuse.",
    },
  },

  {
    id: "exam_008",
    theme: "Rupture conventionnelle – Consentement",
    question:
      "Un salarié accepte une rupture conventionnelle alors qu’il subissait de fortes pressions de son employeur. La rupture est‑elle valable ?",
    correction: {
      rule: "La rupture conventionnelle requiert un consentement libre et éclairé. Tout vice du consentement entraîne sa nullité.",
      application: "Les pressions peuvent avoir vicié le consentement.",
      conclusion: "La rupture conventionnelle peut être annulée.",
    },
  },

  {
    id: "exam_009",
    theme: "Heures supplémentaires – Preuve",
    question:
      "Un salarié réclame le paiement d’heures supplémentaires sans produire de relevé précis. Peut‑il obtenir gain de cause ?",
    correction: {
      rule: "La preuve en matière d’heures supplémentaires est partagée : le salarié doit fournir des éléments suffisamment précis.",
      application: "Il n’apporte aucun élément précis.",
      conclusion: "Sa demande risque d’être rejetée.",
    },
  },

  {
    id: "exam_010",
    theme: "Conseil de prud’hommes – Compétence",
    question:
      "Un litige oppose un salarié à son employeur au sujet de l’exécution du contrat. Quelle juridiction est compétente ?",
    correction: {
      rule: "Le conseil de prud’hommes est compétent pour les litiges individuels liés à l’exécution du contrat.",
      application: "Le litige porte sur l’exécution du contrat.",
      conclusion: "Le conseil de prud’hommes est compétent.",
    },
  },

  {
    id: "exam_011",
    theme: "Prescription – Salaire",
    question:
      "Un salarié agit en paiement de salaire trois ans après les faits. Son action est‑elle recevable ?",
    correction: {
      rule: "La prescription des actions en paiement du salaire est de 3 ans.",
      application: "L’action est engagée dans le délai.",
      conclusion: "Elle est recevable.",
    },
  },

  {
    id: "exam_012",
    theme: "Pouvoir de direction – Conditions de travail",
    question:
      "Un employeur modifie les tâches d’un salarié sans modifier sa rémunération ni sa qualification. Le salarié peut‑il refuser ?",
    correction: {
      rule: "Les simples changements des conditions de travail relèvent du pouvoir de direction.",
      application: "Les éléments essentiels du contrat ne sont pas modifiés.",
      conclusion: "Le salarié ne peut pas refuser.",
    },
  },

  {
    id: "exam_013",
    theme: "Modification du contrat – Rémunération",
    question:
      "Un employeur impose une baisse de rémunération à un salarié. Celui‑ci refuse. Peut‑il être sanctionné ?",
    correction: {
      rule: "La rémunération est un élément essentiel du contrat : toute modification requiert l’accord du salarié.",
      application: "Le salarié refuse à juste titre.",
      conclusion: "Aucune sanction n’est possible.",
    },
  },

  {
    id: "exam_014",
    theme: "CSE – Mise en place",
    question:
      "Une entreprise de 15 salariés refuse de mettre en place un CSE. Est‑ce licite ?",
    correction: {
      rule: "Le CSE est obligatoire à partir de 11 salariés pendant 12 mois consécutifs.",
      application: "L’entreprise emploie 15 salariés.",
      conclusion: "Le CSE doit être mis en place.",
    },
  },

  {
    id: "exam_015",
    theme: "Discrimination – Aménagement de la preuve",
    question:
      "Un salarié invoque une discrimination sans apporter d’éléments concrets. Comment est aménagée la preuve ?",
    correction: {
      rule: "Le salarié doit fournir des éléments laissant supposer une discrimination. Ensuite l’employeur doit prouver l'absence de discrimination.",
      application: "Aucun élément n'est présenté : la demande est fragilisée.",
      conclusion: "La demande peut être rejetée.",
    },
  },
];
// ============================================================================
// exam.data.ts — BLOC 2/6
// EXAM_CASES_DCG_16_30 — Cas 016 à 030
// ============================================================================

export const EXAM_CASES_DCG_16_30: ExamCase[] = [
  {
    id: "exam_016",
    theme: "Période d’essai – Rupture",
    question:
      "La période d’essai d’un salarié est rompue après une seule erreur. La rupture est‑elle valable ?",
    correction: {
      rule: "Pendant la période d’essai, la rupture est possible sans motif, sous réserve de ne pas être abusive ou discriminatoire et de respecter le délai de prévenance.",
      application:
        "La rupture suit une erreur isolée ; à défaut d’abus/discrimination et si le délai de prévenance est respecté, elle peut être régulière.",
      conclusion: "La rupture peut être valable (sous réserves ci‑dessus).",
    },
  },
  {
    id: "exam_017",
    theme: "CDD – Renouvellement",
    question:
      "Une entreprise renouvelle un CDD deux fois sans respecter l’accord collectif applicable. Est‑ce licite ?",
    correction: {
      rule: "Le renouvellement d’un CDD doit respecter les limites légales et celles prévues par les accords collectifs. Sinon, une requalification en CDI est possible.",
      application:
        "Les renouvellements ne respectent pas l’accord collectif : irrégularité.",
      conclusion: "Le CDD peut être requalifié en CDI.",
    },
  },
  {
    id: "exam_018",
    theme: "Temps de travail – Forfait jours",
    question:
      "Un salarié en forfait jours dépasse largement le nombre de jours prévus sans récupération et sans suivi effectif. L’employeur peut‑il le sanctionner ?",
    correction: {
      rule: "Le forfait jours impose un suivi effectif de la charge de travail et la protection de la santé/sécurité. Sans suivi, l’employeur est mal fondé à reprocher un dépassement qu’il a laissé s’installer.",
      application:
        "L’employeur n’a pas assuré le suivi ni la régulation : il ne peut pas reprocher le dépassement.",
      conclusion:
        "Le salarié ne peut pas être valablement sanctionné pour ce dépassement.",
    },
  },
  {
    id: "exam_019",
    theme: "Repos et congés – Fixation des dates",
    question:
      "Un salarié n’a pas pris toutes ses congés payés. L’employeur peut‑il les lui imposer à la fin de l’année ?",
    correction: {
      rule: "L’employeur fixe les dates de congés dans le respect des règles (période de prise, ordre des départs, délai de prévenance, information/consultation selon le cas).",
      application:
        "Si le délai de prévenance et les règles applicables sont respectés, l’employeur peut imposer la prise des congés.",
      conclusion: "Oui, si les règles et délais sont respectés.",
    },
  },
  {
    id: "exam_020",
    theme: "Discipline – Proportionnalité",
    question:
      "Un salarié utilise son téléphone personnel à titre privé 5 minutes par jour et est licencié pour faute grave. La sanction est‑elle proportionnée ?",
    correction: {
      rule: "La sanction doit être proportionnée. La faute grave suppose une gravité rendant impossible le maintien dans l’entreprise.",
      application:
        "Un usage très limité du téléphone est une faute mineure (sauf circonstances particulières).",
      conclusion:
        "Le licenciement pour faute grave est disproportionné et contestable.",
    },
  },
  {
    id: "exam_021",
    theme: "Licenciement économique – Reclassement",
    question:
      "Une entreprise licencie un salarié pour motif économique sans proposer de reclassement. La procédure est‑elle valide ?",
    correction: {
      rule: "Avant un licenciement économique, l’employeur doit rechercher et proposer un reclassement sur les postes disponibles et adaptés.",
      application: "Aucun reclassement n’a été proposé.",
      conclusion: "Le licenciement est irrégulier.",
    },
  },
  {
    id: "exam_022",
    theme: "Rupture conventionnelle – Indemnité",
    question:
      "Un salarié signe une rupture conventionnelle mais l’indemnité est inférieure au minimum légal. Est‑elle valable ?",
    correction: {
      rule: "L’indemnité de rupture conventionnelle doit être au moins égale à l’indemnité légale (ou conventionnelle si plus favorable) de licenciement.",
      application: "L’indemnité est inférieure au minimum : irrégularité.",
      conclusion: "La rupture conventionnelle est contestable.",
    },
  },
  {
    id: "exam_023",
    theme: "Négociation collective – Entreprise < 50 salariés",
    question:
      "Dans une entreprise de moins de 50 salariés, un syndicat souhaite négocier un accord collectif. Peut‑il le faire ?",
    correction: {
      rule: "La négociation est possible mais dépend des interlocuteurs habilités (DS, élus, salarié mandaté) et du respect des conditions de validité (majorité/ratification selon les cas).",
      application:
        "Sans interlocuteur habilité ou sans respect des règles de validité, l’accord serait contestable.",
      conclusion:
        "Oui, mais uniquement dans le cadre légal (interlocuteur habilité + règles de validité).",
    },
  },
  {
    id: "exam_024",
    theme: "Accord d’entreprise – Seuils de validité",
    question:
      "Un accord d’entreprise est signé par des syndicats représentant moins de 30 % des suffrages. Est‑il valide ?",
    correction: {
      rule: "Un accord est valide s’il est signé par des syndicats représentatifs totalisant au moins 50% des suffrages. Entre 30% et 50%, il peut être validé par référendum. En dessous de 30%, il est invalide.",
      application:
        "Ici, les signataires sont < 30% : aucune validation possible.",
      conclusion: "L’accord n’est pas valide.",
    },
  },
  {
    id: "exam_025",
    theme: "CSE – Droit d’information",
    question:
      "Le CSE demande l’accès aux informations économiques et financières. L’employeur refuse. Est‑ce licite ?",
    correction: {
      rule: "Le CSE dispose d’un droit d’information et de consultation sur les questions économiques et financières de l’entreprise.",
      application:
        "Le refus prive le CSE des informations nécessaires à ses missions.",
      conclusion: "Le refus est illégal.",
    },
  },
  {
    id: "exam_026",
    theme: "Prescription – Salaire",
    question:
      "Un salarié assigne son employeur après 2 ans et 1 mois sur un litige de salaire. Son action est‑elle recevable ?",
    correction: {
      rule: "La prescription des actions salariales est de 3 ans.",
      application: "2 ans et 1 mois : l’action est dans le délai.",
      conclusion: "L’action est recevable.",
    },
  },
  {
    id: "exam_027",
    theme: "Harcèlement – Charge de la preuve",
    question:
      "Un salarié accuse son supérieur de harcèlement moral sans preuves concrètes. Comment est organisée la charge de la preuve ?",
    correction: {
      rule: "Le salarié doit présenter des éléments laissant supposer un harcèlement. L’employeur doit ensuite démontrer l’absence de harcèlement et justifier ses décisions par des éléments objectifs.",
      application:
        "Sans éléments factuels (mails, attestations, éléments concordants), la demande est fragilisée.",
      conclusion: "La demande est difficilement recevable en l’état.",
    },
  },
  {
    id: "exam_028",
    theme: "Cotisations sociales – Risques",
    question:
      "Une entreprise omet de déclarer et payer des cotisations sociales pendant 6 mois. Quels sont les risques ?",
    correction: {
      rule: "Le défaut de déclaration/paiement expose à redressement, majorations, pénalités et parfois sanctions pénales selon la gravité.",
      application:
        "6 mois d’omission : risque important de redressement et pénalités.",
      conclusion: "L’entreprise est en infraction et s’expose à des sanctions.",
    },
  },
  {
    id: "exam_029",
    theme: "Heures supplémentaires – Compensation",
    question:
      "Un salarié effectue des heures supplémentaires mais l’employeur propose uniquement un repos compensateur non équivalent. Est‑ce valable ?",
    correction: {
      rule: "Les heures supplémentaires doivent être rémunérées avec majoration ou compensées par un repos équivalent selon les règles applicables.",
      application:
        "Le repos proposé n’est pas équivalent aux heures effectuées.",
      conclusion:
        "La compensation est insuffisante : l’employeur doit régulariser.",
    },
  },
  {
    id: "exam_030",
    theme: "Contrat – Clause de mobilité",
    question:
      "Un salarié refuse une mutation imposée dans une autre ville, prévue par une clause de mobilité. Est‑ce licite ?",
    correction: {
      rule: "La clause de mobilité est valable si elle est précise (zone), justifiée par l’intérêt de l’entreprise et appliquée de manière proportionnée (bonne foi, délai, contraintes).",
      application:
        "Même avec une clause, la mise en œuvre peut être contestée si disproportionnée.",
      conclusion:
        "Le refus peut être légitime si l’application est abusive/disproportionnée.",
    },
  },
];
// ============================================================================
// exam.data.ts — BLOC 3/6
// EXAM_CASES_DCG_31_50 — Cas 031 à 050
// ============================================================================

export const EXAM_CASES_DCG_31_50: ExamCase[] = [
  {
    id: "exam_031",
    theme: "CDD – Poste permanent",
    question:
      "Une entreprise utilise systématiquement des CDD pour des postes permanents. Est‑ce légal ?",
    correction: {
      rule: "Le CDD ne peut être utilisé que pour une tâche temporaire. L’usage pour des emplois permanents constitue un contournement du CDI.",
      application:
        "Les postes sont permanents mais occupés via CDD de manière répétée.",
      conclusion: "Les CDD peuvent être requalifiés en CDI.",
    },
  },

  {
    id: "exam_032",
    theme: "Discipline – Avertissement",
    question:
      "Un salarié en retard 3 fois en un mois reçoit un avertissement. Est‑ce proportionné ?",
    correction: {
      rule: "La sanction disciplinaire doit être proportionnée. L’avertissement est une sanction légère.",
      application: "Les retards répétés justifient un avertissement.",
      conclusion: "La sanction est proportionnée.",
    },
  },

  {
    id: "exam_033",
    theme: "Heures supplémentaires",
    question:
      "Un salarié effectue 10 heures supplémentaires par semaine, sans majoration ni repos compensateur. Est‑ce conforme ?",
    correction: {
      rule: "Les heures supplémentaires doivent être majorées (ou compensées) selon les règles applicables.",
      application: "Ni majoration ni repos compensateur n’ont été appliqués.",
      conclusion: "L’employeur est en infraction.",
    },
  },

  {
    id: "exam_034",
    theme: "Démission – Préavis",
    question:
      "Un salarié démissionne mais ne respecte pas le préavis. Quelles conséquences ?",
    correction: {
      rule: "Le salarié doit respecter le préavis prévu (contrat/CCN), sauf dispense de l’employeur.",
      application:
        "Le salarié n’a pas respecté le préavis et aucune dispense n’a été accordée.",
      conclusion:
        "L’employeur peut réclamer une indemnité compensatrice correspondant au préavis non exécuté.",
    },
  },

  {
    id: "exam_035",
    theme: "Licenciement – Insuffisance professionnelle",
    question:
      "Un salarié est licencié pour insuffisance professionnelle après 1 mois de poste. Est‑ce valable ?",
    correction: {
      rule: "Le licenciement doit reposer sur une cause réelle et sérieuse, objectivement démontrable.",
      application:
        "Après 1 mois, l’insuffisance est difficile à apprécier sauf éléments objectifs très solides.",
      conclusion:
        "Le licenciement est contestable si l’insuffisance n’est pas établie.",
    },
  },

  {
    id: "exam_036",
    theme: "Négociation – Refus",
    question:
      "Un employeur refuse de négocier une prime avec un syndicat représentatif. Est‑ce légal ?",
    correction: {
      rule: "L’employeur doit respecter les obligations de négociation lorsque la loi ou les accords les imposent.",
      application:
        "Un refus pur et simple peut constituer un manquement si la négociation est obligatoire.",
      conclusion: "Le refus peut être illégal selon le cadre applicable.",
    },
  },

  {
    id: "exam_037",
    theme: "CSE – Consultation",
    question:
      "L’entreprise planifie une restructuration sans consulter le CSE. Quels sont les risques ?",
    correction: {
      rule: "Le CSE doit être consulté préalablement à toute décision importante affectant l’organisation économique et sociale.",
      application: "Aucune consultation n’a été effectuée.",
      conclusion: "La décision est irrégulière et contestable.",
    },
  },

  {
    id: "exam_038",
    theme: "Prescription – Salaire",
    question:
      "Un salarié réclame des rappels de salaire datant de 4 ans. Peut‑il obtenir gain de cause ?",
    correction: {
      rule: "La prescription des actions salariales est de 3 ans.",
      application: "La demande porte sur 4 ans : délai dépassé.",
      conclusion: "La demande est prescrite pour la période au‑delà de 3 ans.",
    },
  },

  {
    id: "exam_039",
    theme: "Harcèlement – Preuves",
    question:
      "Un salarié rapporte des faits de harcèlement moral avec mails et témoignages. Qui doit prouver quoi ?",
    correction: {
      rule: "Le salarié apporte des éléments laissant supposer un harcèlement ; l’employeur doit ensuite démontrer l’absence de harcèlement.",
      application:
        "Mails et témoignages constituent un faisceau d’indices sérieux.",
      conclusion:
        "L’employeur doit prouver que les faits ne constituent pas un harcèlement.",
    },
  },

  {
    id: "exam_040",
    theme: "Obligations déclaratives – Sanctions",
    question:
      "Une entreprise oublie des déclarations sociales/fiscales pendant 1 an. Quelles conséquences ?",
    correction: {
      rule: "Le non‑respect des obligations expose à redressements, majorations, pénalités et parfois sanctions pénales.",
      application: "Omission pendant 1 an : risque élevé.",
      conclusion: "L’entreprise s’expose à des sanctions importantes.",
    },
  },

  {
    id: "exam_041",
    theme: "Forfait annuel – Dépassement",
    question:
      "Un salarié en forfait annuel dépasse le nombre de jours prévu sans compensation. Quelle est la solution ?",
    correction: {
      rule: "Le dépassement doit être rémunéré ou compensé et un suivi de la charge de travail doit être assuré.",
      application: "Aucune compensation n’a été accordée.",
      conclusion:
        "Le salarié peut réclamer la rémunération/compensation des jours supplémentaires.",
    },
  },

  {
    id: "exam_042",
    theme: "CDD – Rupture anticipée (salarié)",
    question:
      "Un CDD est rompu avant son terme par le salarié pour motif personnel. Est‑ce valable ?",
    correction: {
      rule: "La rupture anticipée d’un CDD par le salarié n’est possible que dans des cas limités (accord, faute grave de l’employeur, force majeure, embauche en CDI…).",
      application: "Motif personnel seul : pas un cas autorisé.",
      conclusion:
        "Rupture irrégulière : le salarié peut être condamné à indemniser l’employeur.",
    },
  },

  {
    id: "exam_043",
    theme: "Repos compensateur – Respect",
    question:
      "Un salarié est rappelé pendant son repos compensateur. Est‑ce légal ?",
    correction: {
      rule: "Le repos compensateur doit être respecté. Un rappel abusif peut constituer un manquement.",
      application: "Rappel pendant le repos compensateur.",
      conclusion: "Le salarié peut demander réparation.",
    },
  },

  {
    id: "exam_044",
    theme: "Faute grave – Définition",
    question:
      "Un salarié commet une faute mineure mais est licencié pour faute grave. Est‑ce justifié ?",
    correction: {
      rule: "La faute grave suppose une faute rendant impossible le maintien du salarié dans l’entreprise.",
      application: "Faute mineure : insuffisant pour faute grave.",
      conclusion: "Le licenciement pour faute grave est injustifié.",
    },
  },

  {
    id: "exam_045",
    theme: "Rupture conventionnelle – Homologation",
    question:
      "Une rupture conventionnelle est signée mais non homologuée par l’administration. Que se passe‑t‑il ?",
    correction: {
      rule: "La rupture conventionnelle doit être homologuée par la DREETS pour être valide.",
      application: "Aucune homologation obtenue.",
      conclusion: "La rupture n’est pas valide juridiquement.",
    },
  },

  {
    id: "exam_046",
    theme: "Syndicats – Droit d’expression",
    question:
      "Un syndicat diffuse une information interne sur les droits des salariés. L’employeur l’interdit. Est‑ce légal ?",
    correction: {
      rule: "Une interdiction générale de diffusion porte atteinte à la liberté syndicale.",
      application: "Interdiction sans justification légitime.",
      conclusion: "L’interdiction est illégale (sauf abus caractérisé).",
    },
  },

  {
    id: "exam_047",
    theme: "Accord collectif – Validité",
    question:
      "Un accord signé sans respect des règles de majorité syndicale est‑il applicable ?",
    correction: {
      rule: "Un accord collectif doit respecter les règles de validité (représentativité + seuils).",
      application: "Les règles ne sont pas respectées.",
      conclusion: "L’accord n’est pas applicable.",
    },
  },

  {
    id: "exam_048",
    theme: "CSE – Budget",
    question:
      "Le CSE demande le budget de fonctionnement légal. L’employeur refuse. Est‑ce légal ?",
    correction: {
      rule: "Le CSE doit disposer d’un budget de fonctionnement dans les conditions prévues par la loi.",
      application: "Refus du minimum légal.",
      conclusion: "Le refus est illégal.",
    },
  },

  {
    id: "exam_049",
    theme: "Prescription – Heures supplémentaires",
    question:
      "Un salarié réclame des heures supplémentaires datant de 3 ans et 2 mois. Action recevable ?",
    correction: {
      rule: "Les actions salariales (dont les heures sup) se prescrivent par 3 ans.",
      application: "3 ans et 2 mois = hors délai.",
      conclusion: "L’action est prescrite.",
    },
  },

  {
    id: "exam_050",
    theme: "Clause de mobilité – Limites",
    question:
      "Un salarié refuse une mutation à l’étranger alors que le contrat prévoit une clause de mobilité nationale. Que faire ?",
    correction: {
      rule: "La clause de mobilité s’applique uniquement dans les limites prévues au contrat.",
      application: "Mobilité nationale ≠ mobilité internationale.",
      conclusion: "Le refus du salarié est légitime.",
    },
  },
];
// ============================================================================
// exam.data.ts — BLOC 4/6
// EXAM_CASES_DCG_51_100 — Cas 051 à 100
// ============================================================================

export const EXAM_CASES_DCG_51_100: ExamCase[] = [
  {
    id: "exam_051",
    theme: "CDI – Période d’essai",
    question:
      "Un salarié en CDI voit sa période d’essai rompue sans motif. Est‑ce légal ?",
    correction: {
      rule: "Pendant la période d’essai, la rupture est possible sans motif, sous réserve du respect du délai de prévenance et de l’absence d’abus/discrimination.",
      application:
        "Si le délai de prévenance est respecté et aucun abus n’est caractérisé, la rupture est régulière.",
      conclusion: "La rupture est légale sous ces réserves.",
    },
  },
  {
    id: "exam_052",
    theme: "CDD – Renouvellement",
    question:
      "Un CDD est renouvelé 3 fois, le contrat initial étant de 6 mois. Est‑ce conforme ?",
    correction: {
      rule: "Le CDD peut être renouvelé dans certaines limites. La durée totale ne doit pas dépasser la durée maximale applicable (sauf exceptions).",
      application:
        "Si la durée totale excède la durée maximale applicable, il y a irrégularité.",
      conclusion:
        "Le CDD peut être requalifié en CDI si les limites sont dépassées.",
    },
  },
  {
    id: "exam_053",
    theme: "Heures supplémentaires – Plafond",
    question:
      "Un salarié dépasse le contingent annuel d’heures supplémentaires. Que faire ?",
    correction: {
      rule: "Les heures supplémentaires sont encadrées par un contingent (loi/accord). Au‑delà, des contreparties peuvent être dues et l’employeur doit régulariser.",
      application:
        "Le plafond est dépassé : régularisation nécessaire selon l’accord applicable.",
      conclusion: "Régularisation (paiement/contreparties) indispensable.",
    },
  },
  {
    id: "exam_054",
    theme: "Licenciement économique – PSE",
    question:
      "L’employeur licencie 5 salariés pour motif économique sans plan de sauvegarde de l’emploi (PSE). Est‑ce légal ?",
    correction: {
      rule: "Le PSE est obligatoire uniquement dans les entreprises d’au moins 50 salariés lorsqu’elles envisagent au moins 10 licenciements économiques sur 30 jours.",
      application:
        "Avec 5 licenciements, l’obligation de PSE n’est pas automatiquement déclenchée (il faut vérifier les seuils).",
      conclusion:
        "L’absence de PSE n’est pas forcément illégale ; la procédure économique doit néanmoins être respectée.",
    },
  },
  {
    id: "exam_055",
    theme: "Rupture conventionnelle – Indemnité",
    question:
      "Un salarié signe une rupture conventionnelle avec indemnité inférieure au minimum légal. Est‑ce valide ?",
    correction: {
      rule: "L’indemnité spécifique ne peut être inférieure à l’indemnité légale (ou conventionnelle si plus favorable) de licenciement.",
      application: "Indemnité inférieure : irrégularité substantielle.",
      conclusion: "Rupture contestable ; indemnité à régulariser.",
    },
  },
  {
    id: "exam_056",
    theme: "Discipline – Mise à pied (procédure)",
    question:
      "Un salarié est mis à pied 3 mois sans convocation ni entretien. Est‑ce légal ?",
    correction: {
      rule: "Une sanction disciplinaire doit respecter la procédure (convocation/entretien/notification).",
      application: "Aucune formalité respectée : irrégularité.",
      conclusion: "La sanction est irrégulière.",
    },
  },
  {
    id: "exam_057",
    theme: "Repos – Travail de nuit",
    question:
      "Un salarié de nuit travaille 10 jours consécutifs sans repos hebdomadaire. Que dit la loi ?",
    correction: {
      rule: "Le repos hebdomadaire est obligatoire et le travail de nuit est encadré (repos quotidiens/hebdomadaires).",
      application: "Repos hebdomadaire non respecté.",
      conclusion: "L’employeur est en infraction.",
    },
  },
  {
    id: "exam_058",
    theme: "Télétravail – Imposition",
    question:
      "Le télétravail est imposé unilatéralement par l’employeur hors circonstances exceptionnelles. Est‑ce légal ?",
    correction: {
      rule: "Le télétravail repose en principe sur un accord (accord collectif/charte/accord du salarié). Il peut être imposé temporairement en circonstances exceptionnelles.",
      application:
        "Hors circonstances exceptionnelles et sans accord, l’imposition est irrégulière.",
      conclusion: "Le télétravail ne peut pas être imposé dans ce cas.",
    },
  },
  {
    id: "exam_059",
    theme: "Élections – Irrégularités",
    question:
      "Une entreprise ne respecte pas les règles d’organisation des élections professionnelles. Est‑ce valide ?",
    correction: {
      rule: "Les élections doivent respecter les règles légales (protocole, collèges, sincérité du scrutin). Des irrégularités peuvent conduire à contestation/annulation.",
      application: "Non‑respect des règles : scrutin contestable.",
      conclusion:
        "Les élections peuvent être annulées si l’irrégularité a influé sur le résultat.",
    },
  },
  {
    id: "exam_060",
    theme: "Harcèlement moral – Preuves",
    question:
      "Un salarié allègue harcèlement mais n’a qu’un témoignage oral. Est‑ce suffisant ?",
    correction: {
      rule: "Le salarié doit apporter des éléments laissant supposer le harcèlement. Un témoignage peut contribuer au faisceau d’indices, mais la preuve reste plus solide avec plusieurs éléments concordants.",
      application: "Un seul témoignage oral est possible mais fragile.",
      conclusion:
        "Peut amorcer la présomption, mais preuve fragile sans éléments complémentaires.",
    },
  },
  {
    id: "exam_061",
    theme: "Licenciement – Notification écrite",
    question:
      "Un salarié reçoit un licenciement verbal sans motif écrit. Est‑ce légal ?",
    correction: {
      rule: "Le licenciement doit être notifié par écrit et motivé.",
      application: "Aucune notification écrite : irrégularité.",
      conclusion: "Le licenciement est irrégulier.",
    },
  },
  {
    id: "exam_062",
    theme: "CDD – Succession de contrats",
    question:
      "Un salarié enchaîne 4 CDD pour le même poste permanent. Solution ?",
    correction: {
      rule: "La succession de CDD pour un emploi permanent peut être requalifiée en CDI.",
      application:
        "Même poste permanent et succession de CDD : risque élevé de requalification.",
      conclusion: "Requalification en CDI possible.",
    },
  },
  {
    id: "exam_063",
    theme: "Temps partiel – Heures complémentaires",
    question:
      "Un salarié à temps partiel effectue régulièrement des heures au‑delà de son horaire sans majoration. Que faire ?",
    correction: {
      rule: "Les heures complémentaires au temps partiel sont encadrées et doivent être majorées selon les règles applicables.",
      application: "Aucune majoration appliquée.",
      conclusion: "Régularisation nécessaire (paiement/majorations).",
    },
  },
  {
    id: "exam_064",
    theme: "Faute grave – Erreur non intentionnelle",
    question:
      "Un salarié commet une erreur professionnelle sans intention de nuire. Peut‑on licencier pour faute grave ?",
    correction: {
      rule: "La faute grave suppose un manquement rendant impossible le maintien du salarié. Une erreur non intentionnelle relève souvent de l’insuffisance professionnelle (sauf cas exceptionnel).",
      application:
        "Erreur non intentionnelle : gravité à apprécier, souvent insuffisante pour faute grave.",
      conclusion: "Faute grave généralement non justifiée.",
    },
  },
  {
    id: "exam_065",
    theme: "CSE – Consultation sur licenciement collectif",
    question:
      "L’entreprise licencie 15 salariés sans consulter le CSE. Conséquence ?",
    correction: {
      rule: "Le CSE doit être informé/consulté lorsque la loi le prévoit (selon procédure et seuils). L’absence de consultation peut rendre la procédure irrégulière.",
      application: "Aucune consultation : manquement.",
      conclusion: "Procédure irrégulière et risque contentieux.",
    },
  },
  {
    id: "exam_066",
    theme: "Congés – Indemnité non versée",
    question:
      "Un salarié n’a pas reçu l’indemnité due au titre de ses congés payés. Solution ?",
    correction: {
      rule: "Les droits à congés doivent être indemnisés selon les règles applicables. Le non‑paiement ouvre droit à rappel.",
      application: "Indemnité non versée : manquement.",
      conclusion: "Le salarié peut réclamer le paiement (rappel).",
    },
  },
  {
    id: "exam_067",
    theme: "Salarié protégé – Autorisation",
    question:
      "L’entreprise licencie un salarié protégé sans autorisation de l’inspection du travail. Est‑ce légal ?",
    correction: {
      rule: "Le licenciement d’un salarié protégé nécessite une autorisation administrative préalable.",
      application: "Aucune autorisation obtenue.",
      conclusion: "Licenciement illégal (nul).",
    },
  },
  {
    id: "exam_068",
    theme: "Travail dominical – Repos compensateur",
    question:
      "Un salarié travaille plusieurs dimanches consécutifs sans repos compensateur. Est‑ce conforme ?",
    correction: {
      rule: "Le travail dominical est encadré et ouvre droit à des contreparties (repos/majorations) selon le régime applicable.",
      application: "Aucune contrepartie accordée.",
      conclusion: "Violation des règles : régularisation nécessaire.",
    },
  },
  {
    id: "exam_069",
    theme: "CDD – Motif réel",
    question:
      "Un CDD est conclu avec un motif de remplacement, mais le besoin est en réalité permanent. Solution ?",
    correction: {
      rule: "Le CDD doit reposer sur un motif réel et précis. S’il couvre un besoin permanent, requalification en CDI possible.",
      application:
        "Le besoin réel apparaît permanent : risque de requalification.",
      conclusion: "Requalification en CDI possible.",
    },
  },
  {
    id: "exam_070",
    theme: "Forfait jours – Dépassement",
    question:
      "Un salarié en forfait jours dépasse le nombre de jours contractuel sans compensation. Que faire ?",
    correction: {
      rule: "Le dépassement doit être compensé ou rémunéré, et le suivi de la charge de travail doit être assuré.",
      application: "Dépassement non compensé : manquement.",
      conclusion: "Compensation ou paiement exigible.",
    },
  },
  {
    id: "exam_071",
    theme: "Licenciement – Entretien préalable",
    question:
      "Un salarié reçoit un licenciement sans entretien préalable. Conséquence ?",
    correction: {
      rule: "L’entretien préalable est une étape obligatoire de la procédure de licenciement.",
      application: "Pas d’entretien : irrégularité de procédure.",
      conclusion: "Licenciement irrégulier (réparation possible).",
    },
  },
  {
    id: "exam_072",
    theme: "CDD – Rupture anticipée (employeur)",
    question:
      "L’employeur rompt un CDD sans faute grave ni accord. Est‑ce légal ?",
    correction: {
      rule: "La rupture anticipée d’un CDD par l’employeur n’est possible que dans des cas limités (faute grave, force majeure, inaptitude, accord…).",
      application: "Aucun motif autorisé : rupture irrégulière.",
      conclusion: "Indemnités dues au salarié.",
    },
  },
  {
    id: "exam_073",
    theme: "Télétravail – Matériel",
    question:
      "L’employeur refuse de fournir le matériel nécessaire au télétravail. Est‑ce légal ?",
    correction: {
      rule: "L’employeur doit fournir les moyens nécessaires à l’exécution du travail ou organiser la prise en charge des frais selon le cadre applicable.",
      application: "Aucun matériel/moyen : difficulté d’exécution du travail.",
      conclusion: "Manquement possible : régularisation à prévoir.",
    },
  },
  {
    id: "exam_074",
    theme: "CDD – Activité normale",
    question:
      "Un CDD est conclu pour l’activité normale et permanente de l’entreprise. Solution ?",
    correction: {
      rule: "Le CDD ne peut pas pourvoir durablement un emploi lié à l’activité normale et permanente.",
      application: "Le besoin est permanent : CDD détourné.",
      conclusion: "Requalification en CDI possible.",
    },
  },
  {
    id: "exam_075",
    theme: "Licenciement – Discrimination / représailles",
    question:
      "Un salarié est licencié après avoir dénoncé une discrimination. Est‑ce légal ?",
    correction: {
      rule: "Un licenciement discriminatoire ou fondé sur des représailles liées à l’exercice d’un droit peut être nul.",
      application:
        "La chronologie peut constituer un indice ; l’employeur doit justifier par des éléments objectifs.",
      conclusion: "Licenciement potentiellement nul si le lien est établi.",
    },
  },

  // ====== 076 à 100 ======
  {
    id: "exam_076",
    theme: "Inaptitude – Reclassement",
    question:
      "Un salarié est déclaré inapte par le médecin du travail et l’employeur ne propose aucun reclassement. Que faire ?",
    correction: {
      rule: "Avant un licenciement pour inaptitude, l’employeur doit rechercher un reclassement adapté (sauf dispense expresse dans certains cas).",
      application: "Aucun reclassement proposé.",
      conclusion: "Licenciement contestable, risque de condamnation.",
    },
  },
  {
    id: "exam_077",
    theme: "CDD – Clause de renouvellement",
    question:
      "Un CDD mentionne un renouvellement possible mais dépasse la durée maximale applicable. Solution ?",
    correction: {
      rule: "Une clause de renouvellement ne peut pas permettre de dépasser la durée maximale applicable au CDD.",
      application: "Durée maximale dépassée.",
      conclusion: "Requalification en CDI possible.",
    },
  },
  {
    id: "exam_078",
    theme: "Heures supplémentaires – Majorations",
    question:
      "Un salarié fait 5h supplémentaires par semaine mais n’est pas payé. Que faire ?",
    correction: {
      rule: "Les heures supplémentaires doivent être rémunérées avec majoration (ou compensées selon règles applicables).",
      application: "Aucune rémunération/majoration.",
      conclusion: "Rémunération obligatoire et régularisation nécessaire.",
    },
  },
  {
    id: "exam_079",
    theme: "Maternité – Protection",
    question:
      "Une salariée enceinte travaille sans aménagement malgré des contraintes importantes. Est‑ce légal ?",
    correction: {
      rule: "La grossesse ouvre droit à une protection et à des aménagements selon la situation ; l’employeur doit respecter son obligation de sécurité.",
      application: "Absence d’aménagement malgré contraintes.",
      conclusion: "Situation contestable ; aménagements à envisager.",
    },
  },
  {
    id: "exam_080",
    theme: "Faute légère",
    question:
      "Un salarié oublie occasionnellement un rapport. Peut‑on le licencier ?",
    correction: {
      rule: "Une erreur isolée et mineure ne justifie pas en principe un licenciement, sauf contexte aggravant ou répétition importante.",
      application: "Erreur isolée.",
      conclusion: "Licenciement souvent non justifié.",
    },
  },
  {
    id: "exam_081",
    theme: "CDD – Rupture anticipée pour CDI",
    question:
      "Un salarié souhaite rompre son CDD avant terme pour un CDI ailleurs. Est‑ce possible ?",
    correction: {
      rule: "Le salarié peut rompre le CDD de manière anticipée en cas d’embauche en CDI, en respectant un délai de prévenance.",
      application: "Le salarié a un CDI à venir.",
      conclusion: "Rupture anticipée possible sous réserve du préavis.",
    },
  },
  {
    id: "exam_082",
    theme: "Sanction disproportionnée",
    question:
      "Un salarié est licencié pour retard d’une demi‑heure (fait isolé). Est‑ce proportionné ?",
    correction: {
      rule: "La sanction disciplinaire doit être proportionnée.",
      application: "Retard isolé et mineur.",
      conclusion: "Licenciement contestable (disproportionné).",
    },
  },
  {
    id: "exam_083",
    theme: "CSE – Consultation obligatoire",
    question:
      "L’employeur prend une décision collective importante sans consulter le CSE. Que se passe‑t‑il ?",
    correction: {
      rule: "Le CSE doit être consulté sur certaines décisions importantes.",
      application: "Consultation non réalisée.",
      conclusion: "Décision irrégulière, risque de contentieux.",
    },
  },
  {
    id: "exam_084",
    theme: "Forfait jours – Compensation",
    question:
      "Un salarié dépasse son nombre de jours annuels sans compensation. Solution ?",
    correction: {
      rule: "Le dépassement doit être rémunéré/compensé et la charge de travail suivie.",
      application: "Aucun ajustement.",
      conclusion: "Compensation ou paiement obligatoire.",
    },
  },
  {
    id: "exam_085",
    theme: "Rupture conventionnelle – Homologation",
    question:
      "Une rupture conventionnelle est signée mais non homologuée par l’administration. Est‑ce valable ?",
    correction: {
      rule: "La rupture conventionnelle doit être homologuée (DREETS) pour produire effet.",
      application: "Pas d’homologation.",
      conclusion: "Rupture non valide juridiquement.",
    },
  },
  {
    id: "exam_086",
    theme: "Licenciement économique – Priorité de réembauche",
    question:
      "L’entreprise licencie pour motif économique et n’applique pas la priorité de réembauche. Est‑ce légal ?",
    correction: {
      rule: "Le salarié licencié économique peut bénéficier d’une priorité de réembauche pendant un an s’il en fait la demande.",
      application: "Priorité non respectée.",
      conclusion: "Violation des droits du salarié (réparation possible).",
    },
  },
  {
    id: "exam_087",
    theme: "CDD saisonnier",
    question:
      "Un salarié en contrat saisonnier travaille hors période saisonnière. Est‑ce conforme ?",
    correction: {
      rule: "Le contrat saisonnier doit correspondre à une activité par nature saisonnière et à sa période.",
      application: "Travail hors saison.",
      conclusion: "Non conforme, risque de requalification.",
    },
  },
  {
    id: "exam_088",
    theme: "Salarié protégé",
    question:
      "Un salarié protégé est licencié sans autorisation. Conséquence ?",
    correction: {
      rule: "Le licenciement d’un salarié protégé sans autorisation est nul.",
      application: "Autorisation non obtenue.",
      conclusion: "Licenciement nul.",
    },
  },
  {
    id: "exam_089",
    theme: "Heures supplémentaires – Majoration",
    question:
      "Un salarié travaille 15h supplémentaires sans majoration. Que faire ?",
    correction: {
      rule: "Les heures supplémentaires doivent être rémunérées avec majoration (ou compensées selon le cadre applicable).",
      application: "Aucune majoration.",
      conclusion: "Régularisation obligatoire.",
    },
  },
  {
    id: "exam_090",
    theme: "Clause de mobilité – Validité",
    question:
      "Un salarié refuse de déménager alors que la clause de mobilité est très vague. Est‑ce légal ?",
    correction: {
      rule: "La clause doit être précise (zone) et appliquée de manière loyale et proportionnée. Une clause vague est contestable.",
      application: "Clause imprécise : validité incertaine.",
      conclusion: "Refus potentiellement légitime.",
    },
  },
  {
    id: "exam_091",
    theme: "Travail de nuit – Limites",
    question:
      "Un salarié de nuit dépasse des amplitudes très élevées et les repos ne sont pas respectés. Solution ?",
    correction: {
      rule: "Le travail de nuit est encadré (repos et limites). L’employeur doit respecter la santé/sécurité.",
      application: "Dépassements + repos non respectés.",
      conclusion: "Infraction : mise en conformité nécessaire.",
    },
  },
  {
    id: "exam_092",
    theme: "CDD – Force majeure",
    question:
      "L’employeur met fin à un CDD pour force majeure. Est‑ce valable ?",
    correction: {
      rule: "La force majeure suppose un événement imprévisible, irrésistible et extérieur rendant impossible la poursuite du contrat.",
      application: "Événement reconnu (si critères remplis).",
      conclusion: "Rupture valable si la force majeure est caractérisée.",
    },
  },
  {
    id: "exam_093",
    theme: "Discipline – Récidive",
    question:
      "Un salarié a déjà été sanctionné et recommence des faits similaires (faits nouveaux). L’employeur peut‑il licencier ?",
    correction: {
      rule: "On ne sanctionne pas deux fois les mêmes faits, mais une récidive (faits nouveaux) peut justifier une sanction plus lourde si proportionnée.",
      application: "Faits nouveaux après sanction : récidive.",
      conclusion: "Licenciement possible si proportionné et établi.",
    },
  },
  {
    id: "exam_094",
    theme: "CDD – Remplacement",
    question:
      "Un CDD est signé pour remplacer un salarié en arrêt maladie. Validité ?",
    correction: {
      rule: "Le CDD de remplacement est valable si le motif est réel, précis et si le contrat respecte les mentions obligatoires.",
      application: "Motif remplacement : licite.",
      conclusion: "CDD valide si la forme est conforme.",
    },
  },
  {
    id: "exam_095",
    theme: "Indemnité de licenciement – Non paiement",
    question:
      "Un salarié licencié n’a pas reçu l’indemnité légale due. Que faire ?",
    correction: {
      rule: "Le salarié peut réclamer l’indemnité légale ou conventionnelle due si les conditions sont réunies.",
      application: "Indemnité non versée.",
      conclusion: "Régularisation obligatoire, action prud’homale possible.",
    },
  },
  {
    id: "exam_096",
    theme: "Télétravail – Refus du salarié",
    question:
      "Le salarié refuse le télétravail proposé hors circonstances exceptionnelles. Est‑ce légal ?",
    correction: {
      rule: "Hors circonstances exceptionnelles, le télétravail repose sur l’accord du salarié.",
      application: "Refus exprimé.",
      conclusion: "Le salarié peut refuser sans faute.",
    },
  },
  {
    id: "exam_097",
    theme: "CDD – Retour du salarié remplacé",
    question:
      "Le salarié remplacé revient avant la fin prévue du CDD. Que se passe‑t‑il ?",
    correction: {
      rule: "En CDD de remplacement, le terme peut être lié au retour du salarié remplacé si le contrat est rédigé ainsi.",
      application: "Retour avant terme.",
      conclusion:
        "Le CDD peut prendre fin à la reprise si c’est le terme prévu.",
    },
  },
  {
    id: "exam_098",
    theme: "Licenciement – Cause réelle et sérieuse",
    question: "Le salarié conteste le motif de licenciement. Que dit la loi ?",
    correction: {
      rule: "Le licenciement doit être justifié par un motif réel et sérieux (exact, vérifiable, suffisamment grave).",
      application: "Motif non documenté.",
      conclusion: "Licenciement contestable si la cause n’est pas démontrée.",
    },
  },
  {
    id: "exam_099",
    theme: "CSE – Information",
    question:
      "Le CSE n’a pas reçu les informations sur un licenciement collectif. Conséquence ?",
    correction: {
      rule: "Le CSE doit recevoir des informations suffisantes et être consulté lorsque la loi le prévoit.",
      application: "Aucune information fournie.",
      conclusion: "Procédure contestable, risque de sanctions.",
    },
  },
  {
    id: "exam_100",
    theme: "Horaires – Modification brutale",
    question:
      "L’employeur modifie brutalement l’horaire sans délai et sans accord. Est‑ce légal ?",
    correction: {
      rule: "Un changement important d’horaires peut relever d’une modification du contrat ou exiger un délai de prévenance raisonnable selon le cas.",
      application: "Modification immédiate et unilatérale.",
      conclusion:
        "Changement contestable ; le salarié peut refuser selon la nature du changement.",
    },
  },
];
// ============================================================================
// exam.data.ts — BLOC 5/6
// Cas additionnels à la fin de ton fichier : 4 cas supplémentaires
// ============================================================================

export const EXAM_CASES_DCG_ADDITIONAL: ExamCase[] = [
  {
    id: "exam_protection_001",
    theme: "Accident du travail",
    question:
      "Un salarié se blesse pendant ses horaires de télétravail en se levant pour aller chercher un document personnel. Est‑ce un accident du travail ?",
    correction: {
      rule: "L’accident du travail suppose un fait survenu par le fait ou à l’occasion du travail.",
      application:
        "L’acte relève de la vie personnelle et non de l’activité professionnelle.",
      conclusion:
        "L’accident ne peut pas être reconnu comme un accident du travail.",
    },
  },

  {
    id: "exam_controle_01",
    theme: "Travail dissimulé",
    question:
      "Un employeur ne déclare pas un salarié à l’URSSAF. Quelle infraction est caractérisée ?",
    correction: {
      rule: "Le travail dissimulé est constitué en cas d’absence de déclaration préalable à l’embauche.",
      application: "Le salarié n’a pas été déclaré.",
      conclusion: "L’infraction de travail dissimulé est caractérisée.",
    },
  },

  {
    id: "exam_contrat_002",
    theme: "Clause de non‑concurrence",
    question:
      "Un salarié quitte l’entreprise et son contrat prévoit une clause de non‑concurrence sans contrepartie financière. Est‑elle valable ?",
    correction: {
      rule: "La clause de non‑concurrence n’est valable que si elle prévoit une contrepartie financière.",
      application: "La clause ne prévoit aucune contrepartie.",
      conclusion: "La clause est nulle et inopposable au salarié.",
    },
  },

  {
    id: "exam_sources_001",
    theme: "Hiérarchie des normes",
    question:
      "Un accord d’entreprise prévoit une majoration des heures supplémentaires inférieure à celle prévue par l’accord de branche. Est‑ce valable ?",
    correction: {
      rule: "Depuis les ordonnances Macron, certains domaines restent réservés à la branche, notamment les majorations d’heures supplémentaires.",
      application:
        "Les majorations d’HS relèvent des domaines où la branche prime.",
      conclusion:
        "L’accord d’entreprise ne peut pas prévoir une majoration inférieure à celle de la branche.",
    },
  },
];
// ============================================================================
// exam.data.ts — BLOC 6/6
// EXAM_CASES_DCG_FULL — Compilation complète (001 → 100 + 4 cas additionnels)
// ============================================================================

export const EXAM_CASES_DCG_FULL: ExamCase[] = [
  ...EXAM_CASES_DCG, // 001 → 015
  ...EXAM_CASES_DCG_16_30, // 016 → 030
  ...EXAM_CASES_DCG_31_50, // 031 → 050
  ...EXAM_CASES_DCG_51_100, // 051 → 100
  ...EXAM_CASES_DCG_ADDITIONAL, // 4 cas supplémentaires
];
