import {Reservation} from '../modules/statistic/types/StatisticTypes.ts';
import {Clubs, News} from '../modules/home/types/HomeTypes.tsx';

export const db: {clubs: Reservation[]; clubHome: Clubs[]; news: News[]} = {
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
        name: 'Film klubu',
        text: 'Gənclərlə film izlədikdən sonra onun üzərində təhlillər aparmaq, obrazları analiz etmək, həmçinin, gənclərin asudə vaxtlarının daha səmərəli təşkili məqsədi daşıyır.',
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
  news: [
    {
      id: '1',
      image: require('../assets/images/image/news/xeberler1.jpeg'),
      name: '“Könüllü Klubları” layihəsi çərçivəsində növbəti təlim',
      text: '“Caspian Energy Club”ın baş icraçı direktoru Telman Əliyev 5 saylı Bakı DOST Mərkəzində olub.Könüllülərlə iş şöbəsinin müdiri Solmaz Həsənova qonağı "Könüllü DOST" proqramı ilə tanış edib. Daha sonra Telman Əliyev Agentliyin “Könüllü DOST” proqramının üzvlərinə "Gələcək biznes ideyasının formalaşdırılması" mövzusunda təlim keçib. Təlim “Könüllü Klubları” layihəsinin “Fərdi İnkişaf” klubu çərçivəsində baş tutub. Görüş qarşılıqlı diskussiya şəklində davam edib. Sonda gəncləri maraqlandıran suallar cavablandırılıb. Qeyd edək ki, “Könüllü Klubları” layihəsi 2022-ci ildən etibarən 12 müxtəlif istiqamət üzrə fəaliyyət göstərir. Layihənin əsas məqsədi cəmiyyətin bütün sahələrində gənclərin fəal iştirakına şərait yaratmaq, təcrübi biliklərini artırmaq, yaradıcı və innovativ potensialının üzə çıxarılmasını dəstəkləmək, təhsil və məşğulluq məsələlərinə diqqəti artırmaq, habelə asudə vaxtlarının daha səmərəli təşkilidir.',
    },
    {
      id: '2',
      image: require('../assets/images/image/news/xeberler2.jpeg'),
      name: 'Könüllü DOSTlarımız 2 fevralda gəncləri birləşdirdi',
      text: 'DOST Agentliyinin "Könüllü DOST" proqramının təşəbbüsü, Azərbaycan Könüllü Təşkilatları İttifaqının dəstəyi ilə ittifaqa daxil olan könüllü təşkilatları birgə tədbir keçiriblər. Müxtəlif könüllü təşkilatlarını təmsil edən gənclər 4 saylı Bakı DOST Mərkəzində Könüllü DOSTlarımızla birlikdə vətəndaşlara xidmət göstəriblər. Tədbirdə “Ekokönüllü”, “Könüllü Gömrükçü” dəstəsi, “ASAN Könüllüləri” təşkilatı, “Gənc Könüllüləri” İctimai Birliyi, “AİLƏM Könüllüləri” İctimai Birliyi, “BİR Könüllü” Tələbələrin Əməkdaşlığı İctimai Birliyi, “SOCAR Könüllüləri”, “Bakı Şəhər Halqası Könüllülər” proqramı, “Mədəniyyət Könüllüləri” İctimai birliyi, BDU Könüllüləri, RİİB Könüllüləri iştirak ediblər. Layihənin əsas məqsədi könüllülərin timsalında gənclərin prezident seçkilərində aktiv iştirak etməsinə cəlb edilməsi, o cümlədən könüllülərin birliyinin, həmrəyliyinin göstərilməsidir.',
    },
    {
      id: '3',
      image: require('../assets/images/image/news/xeberler3.jpeg'),
      name: 'DOST Agentliyi beynəlxalq müsabiqədə finalçı olub',
      text: 'DOST Agentliyi Rusiyanın Moskva şəhərində keçirilən “We are Together” adlı beynəlxalq müsabiqədə finalçı olub. 100-dən çox ölkədən təxminən 1300 layihənin təqdim olunduğu tədbirdə DOST Agentliyi “Bərabər imkanlar və sosial ədalət” nominasiyası üzrə təltif olunub. Müsabiqədə iştirak edən Agentliyin İnsan resurslarının idarə edilməsi departamentinin müdiri Leyla Hüseynova və departamentin mütəxəssisi Tənzilə Hüseynova sosial məsuliyyətlilik mövzusunda görülən işlər barədə layihə iştirakçılarına məlumat verib. Xalq Təsərrüfatı Nailiyyətləri Sərgisində keçirilən 3 günlük tədbirdə komandamız sosial məsuliyyət üzrə master klasslara qoşulub, Diana Qurtskaya adına Sosial İnteqrasiya Mərkəzinin iş prinsipi ilə tanış olublar. Layihənin məqsədi könüllü hərakatı vasitəsi ilə humanitar problemlərin həllinə töhfə verən təşkilatlara dəstək olmaqdır.',
    },
    {
      id: '4',
      image: require('../assets/images/image/news/xeberler4.jpeg'),
      name: 'Özbəkistanın Könüllülər Assosiasiyanın direktoru "Könüllü Klubları"nda',
      text: 'Özbəkistan Könüllülər Assosiasiyasının direktoru Şirin Abidova DOST Agentliyində olub. Qonağa əvvəlcə DOST Agentliyi barədə məlumat verilib. DOST konsepsiyasının innovativ üstünlükləri və nailiyyətləri, bu konsepsiyanın dünyanın qabaqcıl təcrübələri sırasına daxil edildiyi və beynəlxalq uğurları diqqətə çatdırılıb. Daha sonra Şirin Abidova Agentliyin "Könüllü DOST" proqramının üzvlərinə “Komanda quruculuğu və komanda daxilində iş” mövzusunda təlim keçib. Təlim "Könüllü Klubları" layihəsinin "Fərdi İnkişaf" klubu çərçivəsində baş tutub. Görüş qarşılıqlı diskussiya şəklində davam edib. Sonda gəncləri maraqlandıran suallar cavablandırılıb. Qeyd edək ki, “Könüllü Klubları” layihəsi 2022-ci ildən etibarən 12 müxtəlif istiqamət üzrə fəaliyyət göstərir. Layihənin əsas məqsədi cəmiyyətin bütün sahələrində gənclərin fəal iştirakına şərait yaratmaq, təcrübi biliklərini artırmaq, yaradıcı və innovativ potensialının üzə çıxarılmasını dəstəkləmək, təhsil və məşğulluq məsələlərinə diqqəti artırmaq, habelə asudə vaxtlarının daha səmərəli təşkilidir.',
    },
  ],
};
