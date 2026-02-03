// src/index.tsx
import React, { Component, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// 🔹 Importe l'une des deux feuilles (selon ton projet). Si tu n'as que "styles.css", laisse comme ça.
import "./styles.css";
// Si ton fichier s'appelle plutôt "index.css", commente la ligne au-dessus et décommente celle-ci :
// import "./index.css";

/* ===========================
   ErrorBoundary (anti écran blanc)
   =========================== */
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error?: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    // Tu peux aussi logguer côté console/remote si besoin
    console.error("Erreur non interceptée :", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: 24,
            color: "#fff",
            background: "#0b1020",
            minHeight: "100vh",
          }}
        >
          <h2>Une erreur est survenue 🛠️</h2>
          <p>Vérifie la console (F12) pour les détails.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ===========================
   Safe bootstrapping
   =========================== */
function bootstrap() {
  const el = document.getElementById("root");
  if (!el) {
    // Affiche un message explicite plutôt qu'un écran blanc
    const fallback = document.createElement("div");
    fallback.style.cssText =
      "padding:24px;color:#fff;background:#0b1020;min-height:100vh;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif";
    fallback.innerHTML =
      "<h2>Élément #root introuvable</h2><p>Assure-toi d'avoir &lt;div id='root'&gt;&lt;/div&gt; dans public/index.html.</p>";
    document.body.appendChild(fallback);
    return;
  }

  const root = createRoot(el);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );

  // Masquage NON intrusif de l'UI CodeSandbox (après le premier render)
  requestAnimationFrame(hideCodeSandboxUI);
  const mo = new MutationObserver(() => hideCodeSandboxUI());
  mo.observe(document.documentElement, { childList: true, subtree: true });
}

/* ===========================
   Masquage UI CodeSandbox (safe)
   =========================== */
function hideCodeSandboxUI() {
  // ✅ On cible des marqueurs spécifiques CodeSandbox pour éviter de cacher ton app
  const selectors = [
    // Bouton "Bac à sable ouvert" (FR) / "Open Sandbox" (EN)
    'a[title="Bac à sable"]',
    'a[title="Open Sandbox"]',
    '[aria-label="Open Sandbox"]',
    // Barres/outils de preview
    '[data-testid="status-bar"]',
    '[data-testid="open-editor-button"]',
    'div[class*="PreviewActions"]',
    'div[class*="Watermark"]',
    'div[class*="StatusBar"]',
    'button[aria-label*="Sandbox"]',
    'button[aria-label*="sandbox"]',
  ];

  const nodes = selectors.flatMap((sel) =>
    Array.from(document.querySelectorAll(sel))
  );
  nodes.forEach((el) => {
    const elAny = el as HTMLElement;
    elAny.style.display = "none";
    elAny.style.pointerEvents = "none";
    elAny.style.opacity = "0";
  });

  // 🔒 Garde-fou: NE PAS toucher aux éléments de ton app (#root descendant)
  // Si un élément sélectionné est DANS #root, on l’ignore (on le ré-affiche).
  const appRoot = document.getElementById("root");
  if (appRoot) {
    nodes.forEach((el) => {
      if (appRoot.contains(el)) {
        const elAny = el as HTMLElement;
        elAny.style.display = "";
        elAny.style.pointerEvents = "";
        elAny.style.opacity = "";
      }
    });
  }
}

// Lance l'app quand le DOM est prêt (évite certains timing issues en sandbox)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
