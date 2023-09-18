export class AppUser{
    userId?:number;
    password?: string;
    email ?: string;
    userRole?: Role;
}
export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }