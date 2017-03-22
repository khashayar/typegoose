import * as mongoose from 'mongoose';

import { Typegoose, prop, refProp, Ref, required, enumProp, arrayProp } from '../../typegoose';
import { Job } from './job';
import { Car } from './car';
import { Gender, Genders } from '../enums/genders';

export class User extends Typegoose {
  @prop
  @required
  name: string;

  @prop
  age?: number;

  @enumProp(Genders)
  @required
  gender: Gender;

  @prop
  job?: Job;

  @refProp(Car)
  car: Ref<Car>;

  @required
  @arrayProp(String)
  languages: string[];

  @arrayProp(Car)
  previousCars?: Car[];
}

export const model = new User()._getModel();