import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    // this.placesService.getAutocomplete('jaffa wroclaw').subscribe((data) => {
    //   console.log(data.data);
    // });
    // console.log(await this.placesService.getAutocomplete('jaffa wroclaw'));
    return this.appService.getHello();
  }
}
