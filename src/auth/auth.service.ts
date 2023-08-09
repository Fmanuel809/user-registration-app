import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users: any[] = [];

  async register(userData: any) {
    this.users.push(userData);
    console.log(this.users);
    return { message: 'User registered successfully' };
  }
}
