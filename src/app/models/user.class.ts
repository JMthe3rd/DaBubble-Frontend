export class User {
  fullName: string = '';
  email: string = '';
  password: string = '';
  avatar: string = '';

  constructor(obj: any) {
    this.fullName = obj ? obj.fullName : undefined;
    this.email = obj ? obj.email : undefined;
    this.password = obj ? obj.password : undefined;
    this.avatar = obj ? obj.avatar : undefined;
  }
}
