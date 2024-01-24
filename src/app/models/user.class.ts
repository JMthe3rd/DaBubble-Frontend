export class User {
  fullName: string;
  email: string;
  password: string;
  avatar: string;
  isOnline: boolean;

  constructor(obj?: any) {
    this.fullName = obj ? obj.fullName : '';
    this.email = obj ? obj.email : '';
    this.password = obj ? obj.password : '';
    this.avatar = obj ? obj.avatar : '';
    this.isOnline = obj ? obj.isOnline : false;
  }

  public toJSON(){
    return {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      avatar: this.avatar,
      isOnline: this.isOnline,
    }
}
}
