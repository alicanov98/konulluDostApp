import {Reservation} from '../modules/statistic/types/StatisticTypes.ts';
import {Clubs} from '../modules/home/types/HomeTypes.tsx';

export const db: {clubs: Reservation[]; clubHome: Clubs[]} = {
  clubs: [
    {
      id: '1',
      image: require('../assets/images/image/club/yaradiciliq2.jpg'),
      date: '2024-03-26T00:00:00.000Z',
      name: 'Natiqlik Klubu',
      datee: 'Ç, 26 mart, 2024, 15:00',
      bgColor: '#DBF3FF',
      progresColor: '#C2E3E8',
      color: '#5A5A5A',
      nameColor: '#757575',
      degree: '',
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
      date: '2024-03-27T00:00:00.000Z',
      name: 'Yaradıcılıq',
      datee: 'Ç, 27 mart, 2024, 14:30',
      bgColor: '#9EFFBE',
      progresColor: '#00FF55',
      color: '#000',
      nameColor: '#757575',
      degree: '',
      center: '4 saylı Bakı DOST Mərkəzi',
      topic:
        '"Yaradıcılıq" klubunda Torpaq çərşənbəsi münasibətilə "Eggcellent Artistry" adlı yumurta bəzədilməsi master-klası olacaq.',
      text: '"Yaradıcılıq" klubunda Torpaq çərşənbəsi münasibətilə "Eggcellent Artistry" adlı yumurta bəzədilməsi master-klası olacaq.Sonda isə Azərbaycanın qədim oyunlarından olan "Yumurta döyüşdürmə" oyunu oynanılacaq. 🥚',
    },
    {
      id: '3',
      image: require('../assets/images/image/club/yaradiciliq.jpeg'),
      date: '2024-03-28T00:00:00.000Z',
      name: 'Xarici dil',
      datee: 'C, 28 mart, 2024, 12:00',
      bgColor: '#FC714E',
      progresColor: '#D25600',
      color: '#fff',
      nameColor: '#fff',
      degree: '',
      center: '5 saylı Bakı DOST Mərkəzi',
      topic:
        '"Dream Language School" İnglis dili kursunun rəhbəri Gülnar Baxşəliyeva "Easiest ways to learn English" adlı təlim keçəcək.',
      text: 'Xarici Dil klubunda "Dream Language School" İnglis dili kursunun rəhbəri Gülnar Baxşəliyeva "Easiest ways to learn English" adlı təlim keçəcək.✌️',
    },
  ],
  clubHome: [
    {
      id: '1',
      text: 'Yaradıcılıq',
      bgColor: '#2858EE',
      colors: '#2858EE18',
      image: require('../assets/images/image/club/ferdi.png'),
      object: {
        image: require('../assets/images/image/club/yaradiciliq.jpeg'),
        name: 'Yaradıcılıq klubu',
        text: 'Musiqi, rəsm və digər incəsənət növləri ilə məşğul olan könüllülərin (‘’Gənc DOST” və ‘’Gümüşü DOST’’ könüllüləri), o cümlədən, müxtəlif incəsənət növləri ilə məşğul olan şəxslərin bir yerə toplanması və iştirakçıların şəxsi inkişafı üçün müxtəlif masterklassların təşkil olunması məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/yaradiciliq.jpeg'),
          require('../assets/images/image/club/yaradiciliq.jpeg'),
        ],
      },
    },
    {
      id: '2',
      text: 'Xarici dil',
      bgColor: '#DDA2E6',
      colors: '#DBA1E428',
      image: require('../assets/images/image/club/xariciDil.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/xariciDilKlubu.jpg'),
        name: 'Xarici dil klubu',
        text: 'Gənclərə mütəxəssislər tərəfindən danışıq klublarının keçirilməsi, onlarda xarici dil bacarıqlarının inkişaf etdirilməsi məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/clubAbout/xariciDilKlubu.jpg'),
          require('../assets/images/image/club/clubAbout/xariciDilKlubu.jpg'),
        ],
      },
    },
    {
      id: '3',
      text: 'Kitab',
      bgColor: '#FE5024',
      colors: '#FE502428',
      image: require('../assets/images/image/club/kitab.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/kitabKlubu.jpeg'),
        name: 'Kitab klubu',
        text: 'Könüllü DOSTların mütaliəyə olan marağının artırılması, onlarda dünyagörüşü və bədii poeziyanın mənəvi təsirinin yaradılması, gəncləri müxtəlif sahələr üzrə yeni ədəbiyyatla tanış etmək, yazarlarla birgə görüşlər təşkil edilərək seçilmiş əsərlərin müzakirəsi və fikir mübadiləsi aparmaq məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/clubAbout/kitabKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/kitabKlubu.jpeg'),
        ],
      },
    },
    {
      id: '4',
      text: 'Film',
      bgColor: '#E64646',
      colors: '#E6464628',
      image: require('../assets/images/image/club/filim.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/filimKlubu.jpeg'),
        name: 'Sağlam həyat klubu',
        text: 'Klubun əsas məqsədi yaşından asılı olmayaraq "Könüllü DOST" proqramı çərçivəsində fəaliyyət göstərən könüllülərin sağlam inkişafına, o cümlədən asudə vaxtlarının səmərəli keçirilməsinə dəstək göstərməkdir.',
        imageList: [
          require('../assets/images/image/club/clubAbout/filimKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/filimKlubu.jpeg'),
        ],
      },
    },
    {
      id: '5',
      text: 'Şahmat',
      bgColor: '#DA78A7',
      colors: '#DA78A728',
      image: require('../assets/images/image/club/sahmat.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/sahmatKlubu.jpeg'),
        name: 'Şahmat Klubu',
        text: 'Şahmat Klubu - Haqqında tezliklə!!!',
        imageList: [
          require('../assets/images/image/club/clubAbout/sahmatKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/sahmatKlubu.jpeg'),
        ],
      },
    },
    {
      id: '6',
      text: 'Layihələr',
      bgColor: '#006554',
      colors: '#00655428',
      image: require('../assets/images/image/club/lahieler.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/lahielerklubu.jpeg'),
        name: 'Layihələr klubu',
        text: 'Layihə hazırlanması, müxtəlif yerli və beynəlxalq qrant müsabiqələrinə "təşəbbüs qrupları" olaraq layihələrini reallaşdırmaq istəyən, o cümlədən, layihə meneceri kimi formalaşmaq istəyən könüllülərə bu mövzuda təlimlərin keçirilməsi məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/clubAbout/lahielerklubu.jpeg'),
          require('../assets/images/image/club/clubAbout/lahielerklubu.jpeg'),
        ],
      },
    },
    {
      id: '7',
      text: 'Fərdi inkişaf',
      bgColor: '#E69800',
      colors: '#E6980028',
      image: require('../assets/images/image/club/ferdiinksad.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/ferdiInksafKlubu.jpeg'),
        name: 'Fərdi inkişaf klubu',
        text: 'Karyera və şəxsi inkişafı dəstəkləyən bu klub könüllülərin dünyagörüşünü, karyera yolunda ilkin addımların atılmasını, fərdi bacarıqlarının təkmilləşdirməsi məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/clubAbout/ferdiInksafKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/ferdiInksafKlubu.jpeg'),
        ],
      },
    },
    {
      id: '8',
      text: 'Tarix',
      bgColor: '#E62900',
      colors: '#E6290028',
      image: require('../assets/images/image/club/tarix.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/tarixKlubu.jpeg'),
        name: 'Tarix klubu',
        text: 'Gənclərə peşəkar spikerlər tərəfindən "Tarix və incəsənət" sahəsi üzrə müxtəlif mövzular əsasında təlimlərin keçirilməsi, könüllülərin bilik və bacarıqlarının artırılması məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/clubAbout/tarixKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/tarixKlubu.jpeg'),
        ],
      },
    },
    {
      id: '9',
      text: 'Natiqlik',
      bgColor: '#7311D2',
      colors: '#7311D228',
      image: require('../assets/images/image/club/natiqlik.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/natiqlikKlubu.jpeg'),
        name: 'Natiqlik klubu',
        text: 'Gənclərdə natiqlik mədəniyyətini inkişaf etdirmək, natiqlik haqqında anlayışlar, nitqi anlaşılmaz edən faktorlar, həyəcanın idarəolunması mövzularında gənclərə bilik və bacarıqların aşılanması məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/clubAbout/natiqlikKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/natiqlikKlubu.jpeg'),
        ],
      },
    },
    {
      id: '10',
      text: 'Oyunlar',
      bgColor: '#B98A40',
      colors: '#B98A4028',
      image: require('../assets/images/image/club/oyunlar.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/oyunlarKlubu.jpeg'),
        name: 'İntellektual oyunlar klubu',
        text: 'Təlim və yarışlarla gənclərin bilik və bacarıqlarını formalaşdırmaq, onlara tədqiqat və intellektual turnirlərdə motivasiya kimi bacarıqlar aşılamaq, həmçinin, “Könüllü DOST” proqramının intellektual yarışlar komandasını formalaşdırmaq məqsədi daşıyır',
        imageList: [
          require('../assets/images/image/club/clubAbout/oyunlarKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/oyunlarKlubu.jpeg'),
        ],
      },
    },
    {
      id: '11',
      text: 'Səyahətçilər',
      bgColor: '#E6AFA2',
      colors: '#E6AFA228',
      image: require('../assets/images/image/club/seyahetciler.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/seyahetcilerKlubu.jpeg'),
        name: 'Səyahətçilər klubu',
        text: 'Gənclərin dünyagörüşünü artırmaq, müxtəlif ölkələrin, o cümlədən, Azərbaycanın tarixi, etnoqrafiyası, turistik relyefi haqqında biliklərini təkmilləşdirmək, könüllülərin düzgün səyahət planlaması, müxtəlif ölkələrdə turistik məkanların tapılmasına dəstək olmaq məqsədi daşıyır.',
        imageList: [
          require('../assets/images/image/club/clubAbout/seyahetcilerKlubu.jpeg'),
          require('../assets/images/image/club/clubAbout/seyahetcilerKlubu.jpeg'),
        ],
      },
    },
    {
      id: '12',
      text: 'Şeir',
      bgColor: '#E64646',
      colors: '#E6464618',
      image: require('../assets/images/image/club/vector.png'),
      object: {
        image: require('../assets/images/image/club/clubAbout/seirKlubu.png'),
        name: 'Şeir Klubu',
        text: 'Şeir Klubu - Haqqında tezliklə!!!',
        imageList: [
          require('../assets/images/image/club/clubAbout/seirKlubu.png'),
          require('../assets/images/image/club/clubAbout/seirKlubu.png'),
        ],
      },
    },
  ],
};
