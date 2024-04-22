export interface ClubsHome {
  id: string;
  text: string;
  bgColor: string;
  colors: string;
  image: string;
  object: {
    image: string;
    name: string;
    text: string;
    imageList: Array<string>;
  };
}

export interface News {
  id: string;
  image: string;
  name: string;
  text: string;
}

export interface IActivities {
  id: string;
  sekil: string;
  bas: string;
  metn: string;
}
