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

export const formatDate = (date: string, withHours?: boolean) => {
  const month = dayjs(date).get('month');
  const day = dayjs(date).get('date');
  const year = dayjs(date).get('year');
  const hours = dayjs(date).format('HH:mm');
  const weekDay = dayjs(date).get('day');
  return `${dayNames[weekDay]} ${day} ${monthNames[month]} ${year} ${
    withHours ? `saat ${hours}` : ''
  }`;
};
