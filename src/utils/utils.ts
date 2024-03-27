import dayjs from 'dayjs';

const monthNames: string[] = [
  'yanvar',
  'fevral',
  'mart',
  'aprel',
  'may',
  'iyun',
  'iyul',
  'avqust',
  'sentyabr',
  'oktyabr',
  'noyabr',
  'dekabr',
];

const dayNames: string[] = [
  'Bazar',
  'Bazar ertəsi',
  'Çərşənbə axşamı',
  'Çərşənbə',
  'Cümə axşamı',
  'Cümə',
  'Şənbə',
];

export const formatDate = (date: Date, withHours?: boolean) => {
  const month = dayjs(date).get('month');
  const day = dayjs(date).get('date');
  const year = dayjs(date).get('year');
  const hours = dayjs(date).format('HH:mm');
  const weekDay = dayjs(date).get('day');
  return `${dayNames[weekDay]} ${day} ${monthNames[month]} ${year} ${
    withHours ? `saat ${hours}` : ''
  }`;
};

export const centers = [
  {label: '1 saylı Bakı DOST Mərkəzi', value: '1 saylı Bakı DOST Mərkəzi'},
  {label: '2 saylı Bakı DOST Mərkəzi', value: '2 saylı Bakı DOST Mərkəzi'},
  {label: '3 saylı Bakı DOST Mərkəzi', value: '3 saylı Bakı DOST Mərkəzi'},
  {label: '4 saylı Bakı DOST Mərkəzi', value: '4 saylı Bakı DOST Mərkəzi'},
  {label: '5 saylı Bakı DOST Mərkəzi', value: '5 saylı Bakı DOST Mərkəzi'},
  {
    label: '6 saylı Abşeron DOST Mərkəzi',
    value: '6 saylı Abşeron DOST Mərkəzi',
  },
  {
    label: 'DOST İnkluziv İnkişaf və Yaradıcılıq Mərkəzi',
    value: 'DOST İnkluziv İnkişaf və Yaradıcılıq Mərkəzi',
  },
];
export const clubs = [
  {label: 'Klub seçin', value: 'Klub seçin'},
  {label: 'Yaradıcılıq klubu', value: 'Yaradıcılıq klubu'},
  {label: 'Xarici dil klubu', value: 'Xarici dil klubu'},
  {label: 'Kitab klubu', value: 'Kitab klubu'},
  {label: 'Film klubu', value: 'Film klubu'},
  {label: 'Şahmat klubu', value: 'Şahmat klubu'},
  {
    label: 'Layihələr klubu',
    value: 'Layihələr klubu',
  },
  {
    label: 'Fərdi inkişaf klubu',
    value: 'Fərdi inkişaf klubu',
  },
  {
    label: 'Tarix klubu',
    value: 'Tarix klubu',
  },
  {
    label: 'Natiqlik klubu',
    value: 'Natiqlik klubu',
  },
  {
    label: 'İntellektual oyunlar klubu',
    value: 'İntellektual oyunlar klubu',
  },
  {
    label: 'Səyahətçilər klubu',
    value: 'Səyahətçilər klubu',
  },
];
export const hour = [
  {label: '09:00', value: '09:00'},
  {label: '10:00', value: '10:00'},
  {label: '11:00', value: '11:00'},
  {label: '12:00', value: '12:00'},
  {label: '13:00', value: '13:00'},
  {
    label: '14:00',
    value: '14:00',
  },
  {
    label: '15:00',
    value: '15:00',
  },
  {
    label: '16:00',
    value: '16:00',
  },
  {
    label: '17:00',
    value: '17:00',
  },
  {
    label: '18:00',
    value: '18:00',
  },
  {
    label: '19:00',
    value: '19:00',
  },
];
