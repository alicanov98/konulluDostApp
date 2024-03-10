import {ViewStyle} from 'react-native';
import {Reservation} from '../../modules/statistic/types/StatisticTypes.ts';

export interface IClubCardsProps {
  marginTop?: number;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  item: Reservation;
}

export interface IClubCardItem {
  progresColor: string;
  date: Date;
  name: string;
  bgColor: string;
  center: string;
  topic: string;
  color: string;
  nameColor: string;
  degre: string;
}
