import {ViewStyle} from 'react-native';
import {Reservation} from '../../modules/statistic/types/StatisticTypes.ts';

export interface IClubCardsProps {
  marginTop?: number;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  item: Reservation;
}
