import { Controller, Get, Param } from '@nestjs/common';
import { StarwarsService } from './starwars.service';
import { PeopleBo } from './dal/people.bo';
import { Either } from '../common/types/either.type';

@Controller('starwars')
export class StarwarsController {
  constructor(private readonly starwarsService: StarwarsService) {}

  @Get('people')
  async getAllPeople(): Promise<PeopleBo[]> {
    return this.starwarsService.getAllPeople();
  }

  @Get('people/:id')
  async getPeople(@Param('id') id: number): Promise<Either<Error, PeopleBo>> {
    return this.starwarsService.getPeople(id);
  }
}
