import { PeopleDto } from './people.dto';

export class PeopleBo {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;

  constructor(people: PeopleDto | null) {
    if (people) {
      this.name = people.name;
      this.height = parseInt(people.height);
      this.mass = parseFloat(people.mass);
      this.hair_color = people.hair_color;
      this.skin_color = people.skin_color;
      this.eye_color = people.eye_color;
      this.birth_year = people.birth_year;
      this.gender = people.gender;
      this.homeworld = people.homeworld;
      this.films = people.films;
      this.species = people.species;
      this.vehicles = people.vehicles;
      this.starships = people.starships;
      this.created = new Date(people.created);
      this.edited = new Date(people.edited);
      this.url = people.url;
    }
  }
}