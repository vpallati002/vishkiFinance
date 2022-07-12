import { Injectable } from '@nestjs/common';
import { genSalt, hash, compare } from 'bcrypt';

@Injectable()
export class EncryptService {
  public async hashPassword(password, saltRounds = 10) {
    try {
      // Generate a salt
      const salt = await genSalt(saltRounds);

      // Hash password
      return await hash(password, salt);
    } catch (error) {
      console.log(error);
    }

    // Return null if error
    return null;
  }

  public async comparePassword(password, hash) {
    try {
      // Compare password
      return await compare(password, hash);
    } catch (error) {
      console.log(error);
    }

    // Return false if error
    return false;
  }

  public async encodeToken(tokenInput) {
    try {
      // Generate a token
      let token = Buffer.from(tokenInput).toString('base64')
      return token.toString();
    } catch (error) {
      console.log(error);
    }
    // Return empty string if error
    return '';
  }

  public async decodeToken(encodedToken) {
    try {
      // Retrieve string
      let tokenText =Buffer.from(encodedToken, 'base64').toString('ascii');
      return tokenText;
    } catch (error) {
      console.log(error);
    }
    // Return null if error
    return null;
  }
}
