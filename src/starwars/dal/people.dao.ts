import axios, { AxiosResponse } from 'axios';
import { PeopleBo } from './people.bo';
import { Either, makeRight, makeLeft } from '../../common/types/either.type';

export class PeopleDao {
  private STARWARS_PEOPLE_URL: string;

  constructor(baseUrl: string) {
    this.STARWARS_PEOPLE_URL = `${baseUrl}/people`;
  }

  getAllPeople(): Promise<PeopleBo[]> {
    const { STARWARS_PEOPLE_URL } = this;
    return new Promise((resolve, reject) => {
      axios
        .get(STARWARS_PEOPLE_URL)
        .then((res: AxiosResponse) => {
          const data: PeopleBo[] = this.allPeopleDataFormator(res);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  allPeopleDataFormator(res: AxiosResponse): PeopleBo[] {
    const result: PeopleBo[] = res.data.results.map((person) => {
      return new PeopleBo(person);
    });
    return result;
  }

  async getPeople(id: number): Promise<Either<Error, PeopleBo>> {
    const { STARWARS_PEOPLE_URL } = this;
    const STARWARS_PERSON_URL = `${STARWARS_PEOPLE_URL}/${id}`;
    try {
      const res: AxiosResponse = await axios.get(STARWARS_PERSON_URL);
      const data: PeopleBo = this.personDataFormator(res);
      return makeRight(data);
    } catch (error) {
      return makeLeft(error);
    }
  }

  // getPeople(id: number): Promise<PeopleBo> {
  //   const { STARWARS_PEOPLE_URL } = this;
  //   const STARWARS_PERSON_URL = `${STARWARS_PEOPLE_URL}/${id}`;
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(STARWARS_PERSON_URL)
  //       .then((res: AxiosResponse) => {
  //         const data: PeopleBo = this.personDataFormator(res);
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }

  personDataFormator(res: AxiosResponse): PeopleBo {
    return new PeopleBo(res.data);
  }
}
