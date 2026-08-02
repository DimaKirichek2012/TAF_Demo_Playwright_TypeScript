export interface Post {
  title: string;
  body: string;
  userId: number;
}

export class PostBuilder {
  private post: Post = { title: 'default title', body: 'default body', userId: 1 };  // дефолти

  withTitle(title: string): this {
    this.post.title = title;
    return this;
  }
  withBody(body: string) : this {
    this.post.body = body;
    return this;
  }
  
  withUserId(userId: number) : this {
    this.post.userId = userId;
    return this;
  }

  build(): Post {
   return { ...this.post };
  }
}