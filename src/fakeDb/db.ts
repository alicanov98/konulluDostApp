import {Reservation} from '../modules/statistic/types/StatisticTypes.ts';

export const db: {clubs: Reservation[]} = {
  clubs: [
    {
      id: '1',
      image: require('../assets/images/image/club/yaradiciliq2.jpg'),
      date: '2024-03-18T00:00:00.000Z',
      name: 'Natiqlik Klubu',
      datee: 'Ç, 18 mart, 2024, 15:00',
      bgColor: '#DBF3FF',
      progresColor: '#C2E3E8',
      color: '#5A5A5A',
      nameColor: '#757575',
      center: '5 saylı Bakı DOST Mərkəzi',
      topic:
        '"Natiqlik" klubunda qonağımız olacaq Coşqun Kərimov yazıçı və natiqlik üzrə kouçdur.',
      text:
        '"Natiqlik" klubunda qonağımız olacaq Coşqun Kərimov yazıçı və natiqlik üzrə kouçdur. \n' +
        '10 ildən çoxdur ki, dövlət və özəl təşkilat rəhbərlərinə, sahibkar və mütəxəssislərə yerli və beynəlxalq tədbirlərdə effektiv şəkildə çıxış etməyə kömək edir. Həmçinin dünyaca məşhur təlimçi və müəllif olan Brayan Treysinin şəxsi inkişaf üçün tövsiyyə etdiyi KVAN kitabının müəllifidir.🧐',
    },
    {
      id: '2',
      image: require('../assets/images/image/club/yaradiciliq3.jpeg'),
      date: '2024-03-19T00:00:00.000Z',
      name: 'Yaradıcılıq',
      datee: 'Ç, 19 mart, 2024, 14:30',
      bgColor: '#9EFFBE',
      progresColor: '#00FF55',
      color: '#000',
      nameColor: '#757575',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic:
        '"Yaradıcılıq" klubunda Torpaq çərşənbəsi münasibətilə "Eggcellent Artistry" adlı yumurta bəzədilməsi master-klası olacaq.',
      text: '"Yaradıcılıq" klubunda Torpaq çərşənbəsi münasibətilə "Eggcellent Artistry" adlı yumurta bəzədilməsi master-klası olacaq.Sonda isə Azərbaycanın qədim oyunlarından olan "Yumurta döyüşdürmə" oyunu oynanılacaq. 🥚',
    },
    {
      id: '3',
      image: require('../assets/images/image/club/yaradiciliq.jpeg'),
      date: '2024-03-19T00:00:00.000Z',
      name: 'Xarici dil',
      datee: 'C, 19 mart, 2024, 12:00',
      bgColor: '#FC714E',
      progresColor: '#D25600',
      color: '#fff',
      nameColor: '#fff',
      center: '5 saylı Bakı DOST Mərkəzi',
      topic:
        '"Dream Language School" İnglis dili kursunun rəhbəri Gülnar Baxşəliyeva "Easiest ways to learn English" adlı təlim keçəcək.',
      text: 'Xarici Dil klubunda "Dream Language School" İnglis dili kursunun rəhbəri Gülnar Baxşəliyeva "Easiest ways to learn English" adlı təlim keçəcək.✌️',
    },
  ],
};
