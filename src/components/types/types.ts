import {ViewStyle} from 'react-native';
import { Clubs, Reservation } from "../../modules/statistic/types/StatisticTypes.ts";

export interface IClubCardsProps {
  marginTop?: number;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  item: Clubs;
}
