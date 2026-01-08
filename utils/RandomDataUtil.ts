import { faker } from '@faker-js/faker';

export class RandomDataUtil {

  static firstName(): string {
    return faker.person.firstName();
  }

  static lastName(): string {
    return faker.person.lastName();
  }

    static fullName(): string {
    return faker.person.firstName();
  }
  static street(): string {
    return faker.location.street();
  }

  static buildingNumber(): string {
    return faker.location.buildingNumber();
  }

    static postcode(): string {
    return faker.location.zipCode();
  }

  static city(): string {
    return faker.location.city();
  }

    static country(): string {
    return faker.location.country();
  }
}
