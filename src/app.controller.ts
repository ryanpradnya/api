import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {CreateUserFrontendDto, CreateUserAdminDto, CreateUserbackendDto, CreateGameCoreDto, CreateAuthCoreDto} from './message.dto'

@Controller('api/deploy')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user-frontend')
  async postUserFrontend(@Body() CreateUserFrontendDto: CreateUserFrontendDto): Promise<any>{
    console.log(CreateUserFrontendDto);
    const result = await this.appService.postUserFrontend(CreateUserFrontendDto);
    return result.data;
  }

  @Post('user-admin')
  async postUserAdmin(@Body() CreateUserAdminDto: CreateUserAdminDto): Promise<any>{
    console.log(CreateUserAdminDto);
    const result = await this.appService.postUserAdmin(CreateUserAdminDto);
    return result.data;
  }

  @Post('user-backend')
  async postUserbackend(@Body() CreateUserbackendDto: CreateUserbackendDto): Promise<any>{
    console.log(CreateUserbackendDto);
    const result = await this.appService.postUserBackend(CreateUserbackendDto);
    return result.data;
  }

  @Post('game-core')
  async postGameCore(@Body() CreateGameCoreDto: CreateGameCoreDto): Promise<any>{
    console.log(CreateGameCoreDto);
    const result = await this.appService.postGameCore(CreateGameCoreDto);
    return result.data;
  }

  @Post('auth-core')
  async postauthCore(@Body() CreateAuthCoreDto: CreateAuthCoreDto): Promise<any>{
    console.log(CreateAuthCoreDto);
    const result = await this.appService.postAuthCore(CreateAuthCoreDto);
    return result.data;
  }
}
