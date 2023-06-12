/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { 
  Login, 
  CreateLoginDto, 
  DeleteLoginDto 
} from './dtos/dto.login';


@Injectable()
export class LoginService {
  private logins: Login[] = [];
  
// for creating now login object
  create(createLoginDto: CreateLoginDto) {
    const newLogin: Login = {
      id: this.generateId(),
      email: createLoginDto.email,
      password: createLoginDto.password,
    };
    this.logins.push(newLogin);
    return newLogin;
  }

  findOne(id: number) {
    return this.logins.find((login) => login.id === id);
  }
// for Deleting the data
  remove(id: number, deleteLoginDto: DeleteLoginDto) {
    const loginIndex = this.logins.findIndex(
      (login) => 
      login.id === id && 
      login.email === deleteLoginDto.email && 
      login.password === deleteLoginDto.password,
    );

    if (loginIndex !== -1) {
      const removedLogin = this.logins.splice(loginIndex, 1);
      return removedLogin[0];
    }
    return null;
  }
//for generate unique ID
  private generateId(): number {
    const maxId = this.logins.reduce((max, login) => 
    (login.id > max ? login.id : max), 0);
    return maxId + 1;
  }
}