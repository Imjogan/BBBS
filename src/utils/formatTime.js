import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const date = (dd) => format(new Date(dd),'dd', {locale: ru});
const month = (dd) => format(new Date(dd),'LLLL', {locale: ru});
const time = (dd) => format(new Date(dd),'p', {locale: ru});
const dayOfTheWeek = (dd) => format(new Date(dd), "iiii", { locale: ru });
export { date, month, time, dayOfTheWeek };