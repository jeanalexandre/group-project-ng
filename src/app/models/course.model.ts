import { User } from './user.model';
import { Promo } from './promo.model';
import { Classroom } from './classroom.model';

export class Course {
  constructor(
    public id?: number,
    public name?: string,
    public classroom?: Classroom,
    public teacher?: User,
    public promo?: Promo,
    public hourBeginning?: Date,
    public hourEnding?: Date,
    public clockInBeginning?: Date,
    public clockInEnding?: Date
  ) {}
}
