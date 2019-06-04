import { Classroom } from './classroom.model';

export class Station {
  constructor(
    public id?: number,
    public uid?: string,
    public classroom?: Classroom,
    public alive?: boolean,
    public creationDate?: string,
    public updateDate?: string,
  ) {
  }
}
