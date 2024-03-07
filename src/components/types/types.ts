import {ViewStyle} from 'react-native';

export interface IClubCardsProps {
  marginTop?: number;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  item: IClubCardItem;
}

export interface IClubCardItem {
  name: string;
  bgColor: string;
  center: string;
  topic: string;
  color: string;
  nameColor: string;
  date: string;
}
