import { User } from './user.model';
import { Promo } from './promo.model';
import { Course } from './course.model';

export class CourseStudent {
  constructor(
    public id?: number,
    public course?: Course,
    public student?: User,
    public clockInHour?: Date
  ) {}
}
