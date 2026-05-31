export const playbookEntries = [
  {
    slug: "optimizing-high-frequency-grid",
    title: "Optimizing 100k+ Row Data Grids",
    category: "Performance",
    level: "Expert",
    date: "2024-12",
    context: "Building a high-performance data dashboard that required processing thousands of WebSocket updates per second without UI blocking.",
    problem: "React's reconciliation process was choking on frequent updates. The main thread was freezing for 200ms+, leading to visible lag and a poor user experience.",
    investigation: "Used Chrome DevTools Performance tab. Discovered that DOM reconciliation and heavy data diffing on the main thread were the primary bottlenecks.",
    solution: "Offloaded the data diffing logic to a Web Worker. Implemented a custom virtualization layer and used CSS Grid to keep the DOM node count minimal. Used React 19's transition API to prioritize user interactions.",
    learning: "When dealing with high-frequency data, the best UI work is the work you move off the main thread.",
    tags: ["Web Workers", "React 19", "Performance", "Optimization"]
  },
  {
    slug: "legacy-vue-to-nextjs-migration",
    title: "Migrating Legacy Vue to Next.js 15",
    category: "Architecture",
    level: "Advanced",
    date: "2024-10",
    context: "Immigo Migration Platform: A 5-year-old Vue 2 codebase with fragmented state management and critical SEO issues.",
    problem: "Zero organic traffic due to client-side rendering and a 'Big Bang' rewrite was too risky for the business operations.",
    investigation: "Evaluated incremental migration patterns. Decided on the 'Strangler Fig' pattern to replace old routes one by one.",
    solution: "Configured an Nginx proxy to route traffic between the legacy app and the new Next.js instance. Prioritized high-impact SEO pages first, allowing for continuous deployment during the entire migration process.",
    learning: "Architectural changes should be invisible to the user but measurable in the business metrics (SEO scores and TTM).",
    tags: ["Next.js", "Migration Strategy", "Nginx", "SEO"]
  },
  {
    slug: "siem-frontend-hardening",
    title: "SIEM Core: Hardening Frontend Security",
    category: "Security",
    level: "Expert",
    date: "2024-06",
    context: "Enterprise-grade SIEM product (Mavara) handling sensitive security logs and threat detection data.",
    problem: "The risk of XSS attacks via malformed security logs and the need for a bulletproof RBAC (Role-Based Access Control) system on the client side.",
    investigation: "Audited existing log rendering logic. Found vulnerabilities in how third-party plugins were parsing raw data strings.",
    solution: "Implemented a strict Content Security Policy (CSP), built a custom Sanitization engine for log rendering, and created a middleware-based permission guard that prunes the DOM before rendering.",
    learning: "Security is not a feature; it's a constraint that must be baked into the component architecture.",
    tags: ["Cybersecurity", "Hardening", "RBAC", "Middleware"]
  }
];