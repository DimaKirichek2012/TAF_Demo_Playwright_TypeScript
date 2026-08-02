export interface User {
  username: string;
  password: string;
}

export class UserFactory{
    static standard(): User{
        return {username: 'standard_user', password: 'secret_sauce'};
    }
    static locked(): User{
        return {username: 'locked_out_user', password: 'secret_sauce'};
    }
}