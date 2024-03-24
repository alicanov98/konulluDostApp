export interface Clubs {
  id: string;
  text: string;
  bgColor: string;
  colors: string;
  image: string;
  object:{
    image: string,
    name: string,
    text: string,
    imageList: Array<string>
  }
}

