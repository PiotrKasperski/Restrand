import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticationService } from '../authentication/authentication.service';
import { LocalAuthGuard } from '../authentication/guards/local-auth.guard';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => AuthenticationService))
    private readonly authenticationService: AuthenticationService,
  ) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  findOne(@Param('id') username: string) {
    return this.usersService.findOne('' + username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authenticationService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile/')
  getProfile(@Request() req) {
    console.log('profile');
    return req.user;
  }
}
