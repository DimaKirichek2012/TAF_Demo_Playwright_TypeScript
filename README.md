# TAF Demo — Playwright + TypeScript Test Automation Framework

[![Playwright Tests](https://github.com/DimaKirichek2012/TAF_Demo_Playwright_TypeScript/actions/workflows/playwright.yml/badge.svg)](https://github.com/DimaKirichek2012/TAF_Demo_Playwright_TypeScript/actions/workflows/playwright.yml)

A layered test automation framework built with **Playwright** and **TypeScript**: clean architecture, design patterns, UI and API tests, cross-browser runs in CI.
Test targets: [saucedemo.com](https://www.saucedemo.com) (UI), [JSONPlaceholder](https://jsonplaceholder.typicode.com) and [DummyJSON](https://dummyjson.com) (API).

## Tech stack
- **Playwright** (`@playwright/test`) + **TypeScript** (strict mode)
- Page Object Model, custom fixtures, Factory and Builder patterns
- GitHub Actions: Chromium, Firefox, WebKit and API suites in a parallel matrix
- HTML report, traces on retry, screenshots on failure

## Architecture — layered framework

Four layers, each with a single responsibility. Each layer knows only about the layer below it:

```
tests/     → test cases (thin, readable — no locators)
steps/     → business steps (loginAs, addBackpackToCart)
pages/     → page objects (locators + page interactions)
core/      → config, fixtures, factories, builders
```

**Why layered:** a UI change means updating one locator in one page object — not 200 tests.

## Design patterns
- **Page Object Model** — page structure encapsulated in classes
- **Factory** — `UserFactory` returns ready test users (`standard`, `locked`)
- **Builder** — `PostBuilder` assembles API request bodies with sensible defaults
- **Fixtures** — `standardUserPage` (logged-in page as a precondition, cookies cleared after) and `authToken` (API login → token), with per-test isolation
- **Central config** — `core/config.ts`: URLs and credentials come from environment variables with safe defaults (see `.env.example`)

## Test suites
| Suite | Tag | Runs in | What it covers |
| --- | --- | --- | --- |
| Smoke | `@smoke` `@ui` | Chromium, Firefox, WebKit | Site opens |
| Login | `@ui` | Chromium, Firefox, WebKit | Standard user logs in; locked-out user sees an error |
| Cart | `@ui` | Chromium, Firefox, WebKit | Adding a product updates the cart badge |
| API | `@api` | `api` project (no browser) | GET / POST posts; Bearer-token auth via fixture |

## Project structure
```
├── .github/workflows/playwright.yml   # CI: browser matrix + API, HTML report artifacts
├── core/
│   ├── config.ts          # env-driven configuration
│   ├── fixtures.ts        # custom fixtures (standardUserPage, authToken)
│   ├── user.factory.ts    # Factory pattern
│   └── post.builder.ts    # Builder pattern
├── pages/
│   ├── login.page.ts
│   └── products.page.ts
├── steps/
│   ├── auth.steps.ts
│   └── products.steps.ts
├── tests/
│   ├── smoke.spec.ts
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── api.spec.ts
├── .env.example
└── playwright.config.ts
```

## Running the tests
```bash
npm ci
npx playwright install

npm test               # everything: 3 browsers + API
npm run test:ui        # UI tests only
npm run test:api       # API tests only
npm run test:smoke     # smoke in Chromium
npm run test:headed    # watch the browser (Chromium)
npm run report         # open the HTML report
```

Override any target or credential with environment variables, e.g. `BASE_URL=https://staging.example.com npm run test:ui`.

## What this demonstrates
Clean TAF architecture (gTAA-style layering), OOP and design patterns in test automation, UI and API automation with Playwright, web-first assertions (auto-wait, no hard waits), parallel-safe tests, cross-browser CI.
