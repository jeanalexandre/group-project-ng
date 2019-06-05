import { User } from './user.model';

export class Promo {
  constructor(
    public id?: number,
    public name?: string,
    public students?: User[]
  ) {}
}
