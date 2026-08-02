
/

















































Readme капстоун · MD
TAF Demo — Playwright + TypeScript Test Automation Framework
A layered test automation framework built with Playwright and TypeScript, demonstrating clean architecture, design patterns, UI and API testing. Test target: saucedemo.com + public REST APIs.

Tech stack
Playwright (@playwright/test)
TypeScript
Page Object Model, custom fixtures
HTML reporter
Architecture — layered framework
The framework is split into four layers, each with a single responsibility. Each layer knows only about the layer below it:

tests/     → test cases (thin, readable — no locators)
steps/     → business steps (loginAs, addBackpackToCart)
pages/     → page objects (locators + page interactions)
core/      → fixtures, factories, builders, config
Why layered: a UI change means updating one locator in one page object — not 200 tests. Maintainability and scalability.

Design patterns
Page Object Model — page structure encapsulated in classes
Factory — UserFactory provides ready test users (no hardcoded credentials)
Builder — PostBuilder assembles API request bodies with sensible defaults
Fixtures — loggedInPage (login as precondition), authToken (API login → token) with setup/teardown and per-test isolation
Features
UI E2E tests (login, add-to-cart) via Page Object Model
API tests (GET/POST) using Playwright's request fixture
Auth-token fixture: API login → token → Bearer header on protected endpoints
Web-first assertions (auto-wait, no hard waits)
Parallel-safe (per-test isolation via fixtures)
Project structure
taf-demo/
├── core/
│   ├── fixtures.ts        # custom fixtures (loggedInPage, authToken)
│   ├── user.factory.ts    # Factory pattern
│   └── post.builder.ts    # Builder pattern
├── pages/
│   ├── login.page.ts
│   └── products.page.ts
├── steps/
│   ├── auth.steps.ts
│   └── products.steps.ts
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── api.spec.ts
└── playwright.config.ts
Running the tests
bash
npm install
npx playwright install
npx playwright test          # run all tests
npx playwright show-report   # open HTML report
What this demonstrates
Clean TAF architecture (gTAA-style layering), OOP + design patterns in test automation, UI and API test automation with Playwright, and modern web-first practices for stable, maintainable tests.