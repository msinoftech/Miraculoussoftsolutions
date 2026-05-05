import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";


const marqueeItems = [
  "API INTEGRATIONS (REST / GRAPHQL)",
  "WEBHOOKS & EVENT-DRIVEN WORKFLOWS",
  "DATA PIPELINES (ETL / ELT)",
  "3RD-PARTY APPS (CRM / ERP / HELP DESK)",
  "PAYMENTS (STRIPE / RAZORPAY / PAYPAL)",
  "AUTH & IDENTITY (OAUTH / SSO / JWT)",
  "SEARCH & INDEXING (OPENSEARCH / ELASTIC)",
  "CACHING & QUEUES (REDIS / RABBITMQ)",
  "ANALYTICS & TAGGING (GA4 / MIXPANEL)",
  "WAREHOUSE & BI (BIGQUERY / SNOWFLAKE)",
  "DATA QUALITY, GOVERNANCE & PII CONTROLS",
  "SYNC, MIGRATIONS & BACKFILL STRATEGIES",
];

const aboutCodeLines = [
  { type: "comment", content: "# Web App Data & Integrations (APIs + Webhooks + Pipelines)" },

  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "integrations ", cls: "code-muted" },
      { t: "= ", cls: "code-muted" },
      { t: "{ ", cls: "code-muted" },
      { t: "crm: ", cls: "code-muted" },
      { t: '"Salesforce"', cls: "code-string" },
      { t: ", payments: ", cls: "code-muted" },
      { t: '"Stripe"', cls: "code-string" },
      { t: ", analytics: ", cls: "code-muted" },
      { t: '"GA4"', cls: "code-string" },
      { t: " }", cls: "code-muted" },
    ],
  },

  {
    content: [
      { t: "POST ", cls: "code-keyword" },
      { t: "/api/webhooks/stripe ", cls: "code-string" },
      { t: "→ ", cls: "code-muted" },
      { t: "verifySignature()", cls: "code-string" },
      { t: " → ", cls: "code-muted" },
      { t: "enqueue(", cls: "code-muted" },
      { t: '"billing.events"', cls: "code-string" },
      { t: ")", cls: "code-muted" },
    ],
  },

  {
    content: [
      { t: "GET ", cls: "code-keyword" },
      { t: "/v1/customers?updated_since=2026-01-01 ", cls: "code-string" },
      { t: "→ ", cls: "code-muted" },
      { t: "upsert(db.customers)", cls: "code-string" },
    ],
  },

  { type: "comment", content: "# ETL/ELT Pipeline: Extract → Transform → Load" },

  {
    content: [
      { t: "extract: ", cls: "code-name" },
      { t: "orders + users + events", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "transform: ", cls: "code-name" },
      { t: "dedupe, normalize, enrich", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "load: ", cls: "code-name" },
      { t: "warehouse.fact_orders", cls: "code-string" },
    ],
  },

  { type: "comment", content: "# Observability + Data Quality" },

  {
    content: [
      { t: "checks: ", cls: "code-name" },
      { t: "schema, freshness, anomaly detection", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "alerts: ", cls: "code-name" },
      { t: "failed_webhooks > threshold", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "retries: ", cls: "code-name" },
      { t: "idempotent + exponential backoff", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "pii: ", cls: "code-name" },
      { t: "tokenize + least-privilege access", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "status: ", cls: "code-name" },
      { t: "sync healthy (lag < 2m)", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "slo: ", cls: "code-name" },
      { t: "99.9% delivery, p95 webhook ack < 300ms", cls: "code-string" },
    ],
  },

  {
    content: [
      { t: "audit: ", cls: "code-name" },
      { t: "changes tracked + replayable events", cls: "code-string" },
    ],
  },

  { type: "comment", content: "# Output Preview" },

  {
    content: [{ t: "Sync Run #241 → ", cls: "code-muted" }],
  },

  {
    content: [
      {
        t: '{ "webhooks": "ok", "events_ingested": 18240, "dedupe_rate": "99.7%", "lag": "1m 42s", "failed_deliveries": 0, "pii_policy": "enforced" }',
        cls: "code-string",
      },
    ],
  },
];
  
const technologies = [
    "REST & GRAPHQL APIS",
    "WEBHOOKS & EVENT STREAMS",
    "ETL/ELT DATA PIPELINES",
    "WAREHOUSE & ANALYTICS",
    "DATA QUALITY & GOVERNANCE",
    "SECURE CONNECTORS & IAM",
    "SYNC, MIGRATIONS & BACKFILL",
];

const features = [
  {
    number: "",
    title: "API Integrations for Web Apps",
    description: "Design and implement REST/GraphQL integrations with clean contracts, versioning, pagination, and resilient error handling.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
  {
    number: "",
    title: "Webhooks & Event-Driven Workflows",
    description: "Capture real-time events with signature verification, idempotency keys, retries, and dead-letter handling for reliability.",
    icon: `<svg fill="currentColor" width="24px" height="24px" class="text-zinc-900 transition group-hover:text-white" viewBox="0 0 36 36"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="a9b55181-08cd-4e23-b315-7b35ac037aca" data-name="Layer 3"> <path d="M23.53,19.81a7.45,7.45,0,0,1-1.65-.18,10.48,10.48,0,0,1,.72,2.13c.3,0,.61,0,.93,0a9.52,9.52,0,0,0,3-.49l-.93-1.81A7.67,7.67,0,0,1,23.53,19.81Z"></path> <path d="M18.36,17.87,18,17.49a7.4,7.4,0,0,1-2.2-5.92,7.31,7.31,0,0,1,1.54-4L17.26,9A1,1,0,0,0,18.17,10h.09a1,1,0,0,0,1-.91L19.6,5a1,1,0,0,0-.29-.79A1,1,0,0,0,18.52,4l-4.09.35a1,1,0,0,0,.17,2l1.29-.11a9.45,9.45,0,0,0-2.05,5.32,9.28,9.28,0,0,0,2.67,7.26l.31.37a7.33,7.33,0,0,1,2.06,4.91,7.39,7.39,0,0,1-.26,2.47l1.8.91a8.76,8.76,0,0,0,.45-3.51A9.28,9.28,0,0,0,18.36,17.87Z"></path> <path d="M32.4,17.91,31.19,18A9.65,9.65,0,0,0,23.53,2.45a9.33,9.33,0,0,0-3,.49l.91,1.8a7.67,7.67,0,0,1,9.76,7.39,7.58,7.58,0,0,1-1.65,4.72l.1-1.54a1,1,0,1,0-2-.13l-.28,4.08a1,1,0,0,0,.31.78.94.94,0,0,0,.69.28h.1l4.08-.42a1,1,0,0,0,.9-1.1A1,1,0,0,0,32.4,17.91Z"></path> <path d="M4.07,20.44h.08l4.09-.35a1,1,0,1,0-.17-2l-1.39.12a7.63,7.63,0,0,1,4.52-1.49,7.9,7.9,0,0,1,1.63.18,10.23,10.23,0,0,1-.71-2.13c-.3,0-.61,0-.92,0a9.66,9.66,0,0,0-5.9,2l.12-1.31a1,1,0,0,0-.92-1.08,1,1,0,0,0-1.08.91l-.35,4.08a1,1,0,0,0,1,1.08Z"></path> <path d="M18.42,28.23l-4.09.27a1,1,0,0,0,.13,2L16,30.39a7.71,7.71,0,0,1-12.54-6,7.6,7.6,0,0,1,.29-2L2,21.46a9.59,9.59,0,0,0-.47,2.95A9.7,9.7,0,0,0,17.19,32l-.12,1.18a1,1,0,0,0,.89,1.1h.11a1,1,0,0,0,1-.9l.42-4.06a1,1,0,0,0-1.06-1.1Z"></path> </g> </g></svg>`,
  },
  {
    number: "",
    title: "Data Pipelines (ETL/ELT)",
    description: "Build pipelines for ingestion, transformation, backfills, and scheduling—optimized for freshness, cost, and correctness.",
    icon: `<svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.687 3.21l5.062 4.117c-.477.099-.837.53-.837 1.045 0 .133.024.26.067.377L1.706 4.462a.81.81 0 01-.124-1.126.776.776 0 011.105-.126z" fill="currentColor"></path> <path d="M7.482 9.322L1.06 10.808a.786.786 0 01-.94-.603.801.801 0 01.592-.958L7.095 7.77a1.076 1.076 0 00-.183.602c0 .414.232.773.57.95z" fill="currentColor"></path> <path d="M8.429 9.327l-2.905 6.12a.78.78 0 01-1.05.373.807.807 0 01-.365-1.07l2.86-6.028c.143.418.533.718.991.718.169 0 .328-.04.469-.113z" fill="currentColor"></path> <path d="M8.97 8.66l2.89 6.09a.807.807 0 01-.365 1.07.78.78 0 01-1.05-.372l-2.89-6.091c.124.053.261.083.405.083.481 0 .886-.33 1.01-.78z" fill="currentColor"></path> <path d="M8.462 9.31a1.07 1.07 0 00.546-.938c0-.233-.073-.448-.198-.624l6.478 1.499a.8.8 0 01.592.958.786.786 0 01-.94.603L8.462 9.31zM8.746.9v6.766a1.037 1.037 0 00-1.572 0V.901c0-.443.352-.801.786-.801.434 0 .786.358.786.8z" fill="currentColor"></path> <path d="M13.234 3.21a.776.776 0 011.104.126.81.81 0 01-.123 1.126L8.94 8.749c.043-.117.067-.244.067-.377 0-.516-.36-.946-.837-1.045l5.063-4.117z" fill="currentColor"></path> <path d="M7.96 3.302c-2.75 0-4.978 2.27-4.978 5.07 0 2.8 2.229 5.07 4.978 5.07 2.75 0 4.978-2.27 4.978-5.07 0-2.8-2.229-5.07-4.978-5.07zm-6.55 5.07c0-3.684 2.933-6.67 6.55-6.67 3.618 0 6.55 2.986 6.55 6.67 0 3.685-2.932 6.671-6.55 6.671-3.617 0-6.55-2.986-6.55-6.67z" fill="currentColor"></path> </g></svg>`,
  },
  {
    number: "",
    title: "Data Quality & Observability",
    description: "Monitor integrations with logs, metrics, traces, and checks like schema validation, freshness, and anomaly detection.",
    icon: `<svg width="24px" height="24px" viewBox="0 0 48 48" fill="currentColor" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Health_Icons" data-name="Health Icons"> <g> <path d="M43,4H5A2.9,2.9,0,0,0,2,7V35a2.9,2.9,0,0,0,3,3H43a2.9,2.9,0,0,0,3-3V7A2.9,2.9,0,0,0,43,4ZM42,34H6V22.9H8.6a2,2,0,0,0,1.8-1.2l.5-.9,2.9,6.1A1.9,1.9,0,0,0,15.6,28a2.1,2.1,0,0,0,1.8-1.1l4.8-10.2,2.4,5a2.2,2.2,0,0,0,1.8,1.2H30a2,2,0,0,0,0-4H27.7L24,11.1a2,2,0,0,0-3.6,0L15.6,21.3l-2.9-6.1a2.1,2.1,0,0,0-1.8-1.1,1.9,1.9,0,0,0-1.8,1.1L7.3,18.9H6V8H42Z"></path> <path d="M28,28H24a2,2,0,0,0,0,4h4a2,2,0,0,0,0-4Z"></path> <path d="M34,32h4a2,2,0,0,0,0-4H34a2,2,0,0,0,0,4Z"></path> <path d="M37,40H11a2,2,0,0,0,0,4H37a2,2,0,0,0,0-4Z"></path> </g> </g> </g> </g></svg>`,
  },
  {
    number: "",
    title: "Secure Data Access & Compliance",
    description: "Protect PII with tokenization, encryption, least-privilege access, audit trails, and secure secret management.",
    icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 1920 1920" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1581.235 734.118c0 217.976-177.317 395.294-395.294 395.294H960.06c-217.977 0-395.294-177.318-395.294-395.294V564.706h1016.47v169.412Zm225.883-282.353h-338.824V0h-112.941v451.765H790.647V0H677.706v451.765H338.882v112.94h112.942v169.413c0 280.207 228.028 508.235 508.235 508.235h56.47v395.294c0 93.402-76.009 169.412-169.411 169.412-93.403 0-169.412-76.01-169.412-169.412 0-155.633-126.72-282.353-282.353-282.353S113 1482.014 113 1637.647V1920h112.941v-282.353c0-93.402 76.01-169.412 169.412-169.412s169.412 76.01 169.412 169.412c0 155.633 126.72 282.353 282.353 282.353 155.746 0 282.353-126.72 282.353-282.353v-395.294h56.47c280.207 0 508.235-228.028 508.235-508.235V564.706h112.942V451.765Z" fill-rule="evenodd"></path> </g></svg>`,
  },
  {
    number: "",
    title: "Sync, Migrations & Backfills",
    description: "Move legacy data safely with incremental syncs, replayable events, and backfill jobs—without breaking your web app.",
    icon: `<svg width="24px" height="24px" viewBox="0 0 17 17" version="1.1" class="text-zinc-900 transition group-hover:text-white" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M0.04,7.379 C0.115,3.257 3.392,-0.033 7.344,0.042 C11.261,0.115 14.198,2.971 14.174,7.045 L15.719,7.045 C15.936,7.265 15.936,7.624 15.719,7.844 L13.873,9.86 C13.656,10.082 13.306,10.082 13.088,9.86 L11.363,7.844 C11.145,7.624 11.145,7.265 11.363,7.045 L12.785,7.045 C12.808,3.707 10.526,1.461 7.318,1.401 C4.085,1.339 1.406,4.031 1.343,7.403 C1.281,10.725 3.788,13.48 6.956,13.619 L6.956,14.98 C3.059,14.842 -0.035,11.46 0.04,7.379 L0.04,7.379 Z" fill="currentColor" class="si-glyph-fill"> </path> </g> </g></svg>`,
  },
  {
    number: "",
    title: "iPaaS & Custom Connectors",
    description: "Use tools like Zapier/Make/n8n or build custom connectors for CRMs, ERPs, help desks, and marketing platforms.",
    icon: `<svg width="24px" height="24px" viewBox="0 0 16 16" class="text-zinc-900 transition group-hover:text-white" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="currentColor"> <path d="M1 0v5.05l4.349 2.527V2.526L1 0zM10.175 5.344l-4.35-2.525v5.05l4.35 2.527V5.344zM10.651 10.396V5.344L15 2.819v5.05l-4.349 2.527zM10.174 16l-4.349-2.526v-5.05l4.349 2.525V16z"></path> </g> </g></svg>`,
  },
  {
    number: "",
    title: "Search, Caching & Messaging",
    description: "Improve UX and reliability with Redis caching, queues, and search indexing for fast reads and scalable workflows.",
    icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" class="text-zinc-900 transition group-hover:text-white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 13.5C4 11.0008 5.38798 8.76189 7.00766 7C8.43926 5.44272 10.0519 4.25811 11.0471 3.5959C11.6287 3.20893 12.3713 3.20893 12.9529 3.5959C13.9481 4.25811 15.5607 5.44272 16.9923 7C18.612 8.76189 20 11.0008 20 13.5C20 17.9183 16.4183 21.5 12 21.5C7.58172 21.5 4 17.9183 4 13.5Z" stroke="currentColor" stroke-width="2"></path> </g></svg>`,
  },
  {
    number: "",
    title: "Analytics & Attribution",
    description: "Instrument events and conversions, integrate BI tools, and enable clean reporting with consistent tracking schemas.",
    icon: `<svg width="24px" height="24px" viewBox="0 0 1024 1024" version="1.1" class="text-zinc-900 transition group-hover:text-white" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448-200.96-448-448-448z m0 831.744A384.128 384.128 0 0 1 128.256 512 384.128 384.128 0 0 1 512 128.256 384.128 384.128 0 0 1 895.744 512 384.192 384.192 0 0 1 512 895.744zM512 254.08a140.16 140.16 0 0 0-140.672 139.392 32.128 32.128 0 0 0 64.32 0c0-42.112 33.536-75.136 76.352-75.136 42.112 0 76.352 34.56 76.352 76.992 0 16-22.912 38.976-43.2 59.2-30.592 30.592-65.28 65.28-65.28 111.744v45.888a32.128 32.128 0 1 0 64.256 0v-45.888c0-19.84 23.68-43.52 46.464-66.304 29.056-29.056 62.08-62.016 62.08-104.64A141.12 141.12 0 0 0 512 254.08z m-48.192 500.928a48.192 48.192 0 1 0 96.384 0 48.192 48.192 0 0 0-96.384 0z" fill="currentColor"></path></g></svg>`,
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Integration Strategy",
    body: "We map your web app data flows, sources, and destinations—then define integration patterns (APIs, webhooks, sync) plus SLAs and governance.",
  },
  {
    num: "02",
    title: "Contracts & Data Modeling",
    body: "We define schemas, events, and API contracts, plus mapping rules to keep data consistent across systems and environments.",
  },
  {
    num: "03",
    title: "Build Integrations & Connectors",
    body: "We implement API clients, webhook handlers, and connectors with retries, idempotency, and rate-limit strategies.",
  },
  {
    num: "04",
    title: "Testing, Security & Compliance",
    body: "We add integration tests, signature verification, secrets management, and access controls—especially where PII and payments are involved.",
  },
  {
    num: "05",
    title: "Launch, Migration & Backfill",
    body: "We roll out safely using incremental syncs and replayable events, migrate legacy datasets, and run backfills with monitoring and checkpoints.",
  },
  {
    num: "06",
    title: "Monitoring & Optimization",
    body: "We monitor delivery success, lag, and data quality; then optimize costs and performance while keeping integrations stable over time.",
  },
];

const benefits = [
  {
      no: "01",
      icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 2C6.94493 2.0073 4.8215 2.10686 3.46447 3.46389C2 4.92835 2 7.28538 2 11.9994C2 16.7135 2 19.0705 3.46447 20.535C4.92893 21.9994 7.28596 21.9994 12 21.9994C16.714 21.9994 19.0711 21.9994 20.5355 20.535C21.8926 19.1779 21.9921 17.0545 21.9994 12.9994" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13 11L22 2M22 2H16.6562M22 2V7.34375M21 3L12 12M12 12H16M12 12V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
      title: "Unified Customer & Business Data",
      body: "Connect your web app to CRMs, payments, and analytics so customer profiles and business reports stay consistent and up to date.",
  },
  {
      no: "02",
      icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
      title: "Faster Automation & Ops",
      body: "Automate workflows like billing, onboarding, and notifications using webhooks and event-driven systems—reducing manual work and errors.",
  },
  {
      no: "03",
      icon: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z" fill="currentColor"></path> </g></svg>`,
      title: "Security, Governance & Compliance",
      body: "Protect PII and business data with strong access control, encryption, auditing, and reliable secrets handling across integrations.",
  },
  {
      no: "04",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote-icon lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
      title: "Cost-Controlled Data Pipelines",
      body: "Reduce wasted compute and storage with incremental syncs, smart scheduling, and efficient warehouse modeling—without losing freshness.",
  },
  {
    no: "05",
    icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" id="Layer_3" version="1.1" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M25.691,47.992C25.794,47.993,25.896,48,26,48s0.206-0.007,0.309-0.008H25.691z"></path> <g> <rect height="6" width="6" x="7.5" y="24"></rect> <rect height="6" width="6" x="16.667" y="24"></rect> <rect height="6" width="6" x="7.5" y="33"></rect> <rect height="6" width="6" x="16.667" y="33"></rect> <polygon points="14,0 10,0 10,4 0,4 0,15.9 0,19.9 0,48 22.667,48 22.667,44 4,44 4,19.9 22.667,19.9 22.667,15.9 4,15.9 4,8 10,8 10,12 14,12 14,8 22.667,8 22.667,4 14,4 "></polygon> <path d="M25.98,4h0.039C26.013,4,26.007,4,26,4S25.987,4,25.98,4z"></path> <path d="M26.502,4.012v4.013C36.209,8.293,44,16.228,44,26c0,9.771-7.791,17.706-17.498,17.975v4.013C38.42,47.72,48,37.982,48,26 S38.42,4.28,26.502,4.012z"></path> <polygon points="40,28 40,24 30.501,24 30.501,12.083 26.502,12.083 26.502,24 26.502,28 30.501,28 "></polygon> </g> </g></svg>`,
    title: "Reliable Integrations",
    body: "Deliver events and syncs reliably with retries, idempotency, queueing, and dead-letter queues—so external failures don’t break your app.",
  },
  {
    no: "06",
    icon: `<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 256 256"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M129.175 107.005A31.85 31.85 0 0 1 112 112a32.54 32.54 0 0 1-1.503-.035l.077.035-12.804 37.383C106.35 155.123 112 164.902 112 176c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32 .87 0 1.731.035 2.583.103l12.14-37.163C85.867 101.248 80 91.31 80 80c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32 0 5.51-1.393 10.696-3.846 15.224l19.42 21.308A31.851 31.851 0 0 1 176 112c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32a31.857 31.857 0 0 1 3.92-15.36l-18.745-21.635zM80 192c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm32-96c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm64 64c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z" fill-rule="evenodd"></path> </g></svg>`,
    title: "Clean Analytics & Attribution",
    body: "Standardize tracking and events across your product and marketing stack to get trustworthy analytics and better decision-making.",
  },
];

export default function DataAndIntegrationsPage() {
    const stats = [
        { num: "150+", label: "INTEGRATIONS BUILT" },
        { num: "8+", label: "Years Experience" },
        { num: "99.9%", label: "DELIVERY SLO" },
        { num: "50+", label: "Experts" },
      ];
    
    return (
      <>
        {/* Hero section */}
        <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-start gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_560px] z-10">
                {/* Left Column */}
                <div className="space-y-5">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />Discover the future of tech
                    </div>

                    <h1 className="font-bebas-neue uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
                        <span>Data & </span>
                        <span className="text-red-600">Integrations </span>
                        <span className="hero-outline block outline-black">for Web Apps</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Connect your web app to the tools that run your business—CRMs, payments, analytics, and warehouses—with secure APIs, webhooks, and reliable data pipelines.</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Start Your Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            View Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-4 pt-7 sm:grid-cols-4">
                    {stats.map((item) => {
                        const numberOnly = item.num.replace(/[+%]/g, "");
                        const suffix = item.num.includes("+") ? "+" : item.num.includes("%") ? "%" : "";
                        return (
                        <div key={item.label}>
                            <div className="font-bebas-neue text-5xl leading-none text-zinc-950">
                            {numberOnly}
                            <span className="text-red-600">{suffix}</span>
                            </div>
                            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-950">{item.label}</div>
                        </div>
                        );
                    })}
                    </div>
                </div>

                {/* Right Column */}
                <div className="relative mx-auto hidden w-full lg:block" aria-hidden="true">

                    {/* New UI: Integration Pipeline Board */}
                    <div className="relative w-full rounded-2xl border border-zinc-200 bg-[linear-gradient(145deg,#ffffff,#f7f7fb)] shadow-[0_22px_70px_rgba(15,23,42,0.12)] min-h-[520px] xl:min-h-[560px]">
                      {/* soft grid */}
                      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,black,transparent_70%)]">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
                      </div>

                      {/* header */}
                      <div className="relative z-10 flex items-center justify-between border-b border-zinc-200/80 px-5 py-4">
                        <div className="space-y-0.5">
                          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">Integration Pipeline</div>
                          <div className="text-base font-black text-zinc-950">Sources → Sync → Destinations</div>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          Healthy
                        </div>
                      </div>

                      {/* body */}
                      <div className="relative z-10 grid grid-cols-[1fr_1.1fr_1fr] gap-3 px-5 py-4">
                        {/* Sources */}
                        <div className="rounded-xl border border-zinc-200 bg-white/70 p-3">
                          <div className="mb-2 flex items-center justify-between">
                            <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-zinc-500">Sources</div>
                            <div className="text-[10px] font-bold text-zinc-400">3</div>
                          </div>
                          <div className="space-y-2">
                            {[
                              { name: "Web App DB", meta: "users • orders", tone: "from-blue-50 to-cyan-50 border-blue-200 text-blue-700" },
                              { name: "Product Events", meta: "clicks • funnels", tone: "from-purple-50 to-pink-50 border-purple-200 text-purple-700" },
                              { name: "3rd‑party API", meta: "CRM • support", tone: "from-amber-50 to-orange-50 border-amber-200 text-amber-800" },
                            ].map((s) => (
                              <div key={s.name} className={`rounded-lg border bg-gradient-to-r ${s.tone} p-2`}>
                                <div className="flex items-center justify-between">
                                  <div className="text-[11px] font-extrabold">{s.name}</div>
                                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                </div>
                                <div className="mt-0.5 text-[10px] font-semibold text-zinc-600">{s.meta}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sync Layer */}
                        <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-[linear-gradient(180deg,#0b1220,#0a0f1a)] p-3 text-white">
                          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/25 blur-2xl" />
                          <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-red-500/15 blur-2xl" />

                          <div className="relative flex items-center justify-between">
                            <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/60">Sync Layer</div>
                            <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold text-white/70">
                              idempotent
                            </div>
                          </div>

                          <div className="relative mt-3 space-y-2">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                              <div className="flex items-center justify-between">
                                <div className="text-[12px] font-black">API + Webhooks</div>
                                <div className="text-[10px] font-bold text-emerald-300">p95 240ms</div>
                              </div>
                              <div className="mt-1 text-[10px] text-white/70">Auth • signatures • retries • DLQ</div>
                              <div className="mt-3 grid grid-cols-3 gap-2">
                                {[
                                  { k: "Ack", v: "99.9%" },
                                  { k: "Lag", v: "1m 42s" },
                                  { k: "Errors", v: "0" },
                                ].map((m) => (
                                  <div key={m.k} className="rounded-md border border-white/10 bg-white/5 p-2">
                                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">{m.k}</div>
                                    <div className="mt-0.5 text-[12px] font-black">{m.v}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                              <div className="flex items-center justify-between">
                                <div className="text-[12px] font-black">ETL/ELT</div>
                                <div className="text-[10px] font-bold text-cyan-300">freshness ok</div>
                              </div>
                              <div className="mt-2 flex items-center gap-2">
                                {["extract", "transform", "load"].map((st, i) => (
                                  <div key={st} className="flex items-center gap-2">
                                    <div className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold">{st}</div>
                                    {i < 2 ? <div className="h-[2px] w-4 bg-gradient-to-r from-cyan-400/70 to-transparent" /> : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Destinations */}
                        <div className="rounded-xl border border-zinc-200 bg-white/70 p-3">
                          <div className="mb-2 flex items-center justify-between">
                            <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-zinc-500">Destinations</div>
                            <div className="text-[10px] font-bold text-zinc-400">4</div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { name: "CRM", meta: "contacts", badge: "sync", cls: "border-emerald-200 bg-emerald-50 text-emerald-800" },
                              { name: "Payments", meta: "invoices", badge: "events", cls: "border-blue-200 bg-blue-50 text-blue-800" },
                              { name: "Analytics", meta: "funnels", badge: "batch", cls: "border-purple-200 bg-purple-50 text-purple-800" },
                              { name: "Warehouse", meta: "BI", badge: "models", cls: "border-amber-200 bg-amber-50 text-amber-900" },
                            ].map((d) => (
                              <div key={d.name} className="rounded-lg border border-zinc-200 bg-white p-2 shadow-sm">
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <div className="text-[11px] font-extrabold text-zinc-900">{d.name}</div>
                                    <div className="text-[10px] font-semibold text-zinc-500">{d.meta}</div>
                                  </div>
                                  <div className={`rounded-full border px-2 py-0.5 text-[9px] font-bold ${d.cls}`}>{d.badge}</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-3 rounded-lg border border-zinc-200 bg-gradient-to-r from-zinc-50 to-white p-2">
                            <div className="flex items-center justify-between">
                              <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-zinc-500">Governance</div>
                              <div className="text-[10px] font-bold text-zinc-400">PII</div>
                            </div>
                            <div className="mt-1 flex flex-wrap gap-2 text-[10px] font-semibold text-zinc-600">
                              <span className="rounded-full border border-zinc-200 bg-white px-2 py-1">tokenization</span>
                              <span className="rounded-full border border-zinc-200 bg-white px-2 py-1">audit logs</span>
                              <span className="rounded-full border border-zinc-200 bg-white px-2 py-1">least privilege</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* footer */}
                      <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-zinc-200/80 px-5 py-4">
                        {[
                          { k: "Events / day", v: "18,240" },
                          { k: "Dedupe rate", v: "99.7%" },
                          { k: "Failed deliveries", v: "0" },
                        ].map((m) => (
                          <div key={m.k} className="rounded-xl border border-zinc-200 bg-white px-3 py-2 shadow-sm">
                            <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-zinc-500">{m.k}</div>
                            <div className="mt-0.5 text-[18px] font-black text-zinc-950">{m.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                </div>
            </div>
        </section>
  
       {/* Marquee Section */}
       <Marquee items={marqueeItems} />

        {/* ABOUT */}
        <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
              {/* left column */}
              <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
                <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
                <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

                <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="Code preview">
                  {aboutCodeLines.map((line, index) => {
                    if (line.type === "comment") {
                      return (
                        <span key={index} className="block text-zinc-500 italic">
                          {line.content}
                        </span>
                      );
                    }

                    if (typeof line.content === "string") {
                      return (
                        <span key={index} className="block text-zinc-200">
                          {line.content}
                        </span>
                      );
                    }

                    return (
                      <span key={index} className="block text-zinc-200">
                        {line.content.map((part, partIndex) => (
                          <span
                            key={partIndex}
                            className={
                              part.cls === "code-keyword"
                                ? "text-blue-400"
                                : part.cls === "code-string"
                                ? "text-emerald-400"
                                : "text-zinc-200"
                            }
                          >
                            {part.t}
                          </span>
                        ))}
                      </span>
                    );
                  })}
                </pre>
              </div>
              {/* right column */}
              <div className="relative space-y-4">
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-[2px] w-7 bg-red-600" />
                    Data & Integrations Overview
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The Data & Integrations <span className="text-red-600">Advantage</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">Data & integrations make your web app truly operational</strong>{" "} by connecting product workflows with CRMs, payments, support tools, analytics, and data platforms.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build <strong className="text-white">secure, reliable, and observable integrations</strong>{" "} with strong schemas, idempotency, retries, and monitoring—so syncs keep working even when third-party systems fail.</p>

                <div id="technologies" className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((item) => (
                    <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <Card
          label="Features"
          title={
            <>
              Data & Integrations<br />
              <span className="text-red-600">Capabilities</span>
            </>
          }
          description="Integration engineering built for reliability, security, and data quality."
          items={features}
          gridClassName="grid border-2 border-zinc-950 md:grid-cols-2 xl:grid-cols-3"
        />

        {/* PROCESS */}
        <DevelopmentProcess
          steps={steps}
          label="Data & Integrations Delivery Process"
          title={
              <>
              FROM IDEA TO <span className="text-red-600">PRODUCTION</span>
              </>
          }
          description="We deliver integrations with strong contracts, secure handling of secrets and PII, and reliable processing—so your web app stays correct, scalable, and easy to operate."
        />

        {/* BUSINESS BENEFITS */}
        <BoxCard
            items={benefits}
            label="Data & Integrations Benefits"
            title={
                <>
                WHY WEB APPS NEED
                <br />
                <span className="text-red-600">POWERFUL DATA INTEGRATIONS</span>
                </>
            }
            description="We combine robust integration patterns, data quality, and security best practices to make your product data reliable and your business workflows automated."
            headerClassName="mb-12 text-left"
            gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        />  
  
        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>
                GOT A PROJECT
                <br />
                IN <span className="text-black">MIND?</span>
                </>
            }
            description="Let&apos;s connect your web app with the systems you rely on—securely and reliably. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />
  
      </>
    );
  }