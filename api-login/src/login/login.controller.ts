/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateLoginDto, DeleteLoginDto } from './dtos/dto.login';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.loginService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: number, @Body() deleteLoginDto: DeleteLoginDto) {
    return this.loginService.remove(id, deleteLoginDto);
  }
}