import { config } from './config';

export interface User {
  username: string;
  password: string;
}

export class UserFactory {
  static standard(): User {
    return { username: 'standard_user', password: config.ui.password };
  }

  static locked(): User {
    return { username: 'locked_out_user', password: config.ui.password };
  }
}
