import { defineConfig, devices } from '@playwright/test';
import { config } from './core/config';

/**
 * UI tests (@ui) run in Chromium, Firefox and WebKit.
 * API tests (@api) run once, in a browser-less "api" project.
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: config.baseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'chromium', grep: /@ui/, use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', grep: /@ui/, use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', grep: /@ui/, use: { ...devices['Desktop Safari'] } },
    { name: 'api', grep: /@api/ },
  ],
});
