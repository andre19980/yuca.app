import { User } from '../models/user';
import { Apartment } from '../models/apartment';
import { Service } from '../models/service';

export interface YukerState {
  user: User;
  apartment: Apartment;
  services: Service[];
}
