import {Reservation} from '../../statistic/types/StatisticTypes.ts';

export interface voluntaryTypes {
  id: string;
  name: string;
  surname: string;
  centerNumber: string;
  dkNumber: string;
  image: string;
  club: string;
  clubs: Reservation[];
  position: string;
}
