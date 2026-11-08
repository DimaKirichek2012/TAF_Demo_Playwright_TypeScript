/**
 * Central test configuration.
 * Every value can be overridden with an environment variable (see .env.example);
 * defaults point to the public demo targets so the suite runs out of the box.
 */
export const config = {
  baseUrl: process.env.BASE_URL ?? 'https://www.saucedemo.com',
  postsApiUrl: process.env.POSTS_API_URL ?? 'https://jsonplaceholder.typicode.com',
  authApiUrl: process.env.AUTH_API_URL ?? 'https://dummyjson.com',
  ui: {
    password: process.env.UI_PASSWORD ?? 'secret_sauce',
  },
  api: {
    username: process.env.API_USERNAME ?? 'emilys',
    password: process.env.API_PASSWORD ?? 'emilyspass',
  },
} as const;
