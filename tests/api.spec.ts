import { test, expect } from '../core/fixtures'
import { PostBuilder } from '../core/post.builder'

test('Api Get test', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/posts/1')
    expect(res.status()).toBe(200)
    const body = await res.json()
    expect(body.id).toBe(1)
    expect(body.userId).toBeDefined();
})

test('Api Post test', async ({ request }) => {
    const testData = new PostBuilder().withTitle('Api Post test').withBody('Api Post testApi Post testApi Post testApi Post test').withUserId(45).build();
    const res = await request.post('https://jsonplaceholder.typicode.com/posts',{
        data: testData
    })
    expect(res.status()).toBe(201)
    const body = await res.json()
    expect(body.title).toBe(testData.title)
    expect(body.userId).toBeDefined();
})


test('ApiToken from Fixture', async ({ authToken }) => {
    await expect(authToken).toBeTruthy()
})

test('get current user with token', async ({ request, authToken }) => {
  const res = await request.get('https://dummyjson.com/auth/me', {
    headers: { Authorization: `Bearer ${authToken}` },   // токен у Bearer
  });
  expect(res.status()).toBe(200);
  const user = await res.json();
  expect(user.username).toBe('emilys');
});