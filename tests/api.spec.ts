import { test, expect } from '../core/fixtures';
import { PostBuilder } from '../core/post.builder';
import { config } from '../core/config';

test.describe('API', { tag: '@api' }, () => {
  test('GET /posts/1 returns the post', async ({ request }) => {
    const res = await request.get(`${config.postsApiUrl}/posts/1`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(1);
    expect(body.userId).toBeDefined();
  });

  test('POST /posts creates a post', async ({ request }) => {
    const testData = new PostBuilder()
      .withTitle('Api Post test')
      .withBody('Created by the TAF demo API suite')
      .withUserId(45)
      .build();

    const res = await request.post(`${config.postsApiUrl}/posts`, { data: testData });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.title).toBe(testData.title);
    expect(body.userId).toBeDefined();
  });

  test('auth fixture returns a token', async ({ authToken }) => {
    expect(authToken).toBeTruthy();
  });

  test('GET /auth/me with a Bearer token returns the current user', async ({ request, authToken }) => {
    const res = await request.get(`${config.authApiUrl}/auth/me`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    expect(res.status()).toBe(200);
    const user = await res.json();
    expect(user.username).toBe(config.api.username);
  });
});
