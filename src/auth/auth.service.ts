import { Injectable } from '@nestjs/common';
// import { User, Bookmark } from '@prisma/client'; /* Available after running npx prisma generate or npx prisma migrate dev */

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'I have signed up' };
  }
  signin() {
    return { msg: 'I have signed in' };
  }
}
