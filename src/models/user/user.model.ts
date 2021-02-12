export interface UserApi {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

class User {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  constructor(user: UserApi) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
  }
}

export default User;
