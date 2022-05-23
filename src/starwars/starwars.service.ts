import { Injectable } from '@nestjs/common';
import { Either, isLeft, isRight, unwrapEither } from '../common/types/either.type';
import { PeopleDao } from './dal/people.dao';
import { PeopleBo } from './dal/people.bo';

@Injectable()
export class StarwarsService {
  private dao: PeopleDao;

  constructor() {
    const baseUrl = process.env.STARWARS_API;
    this.dao = new PeopleDao(baseUrl);
  }

  async getPeople(id: number): Promise<PeopleBo> {
    const result: Either<Error, PeopleBo> = await this.dao.getPeople(id);
    if(isLeft(result)){
      throw unwrapEither(result)
    }
    return unwrapEither(result);
  }

  getAllPeople(): Promise<PeopleBo[]> {
    return this.dao.getAllPeople();
  }
}
