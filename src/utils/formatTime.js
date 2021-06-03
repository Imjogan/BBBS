import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";

const dateUnixFormat = (dd) => getUnixTime(new Date(dd));
const date = (dd) => format(new Date(dd),'dd', {locale: ru});
const month = (dd) => format(new Date(dd),'LLLL', {locale: ru});
const time = (dd) => format(new Date(dd),'p', {locale: ru});
const dayOfTheWeek = (dd) => format(new Date(dd), "iiii", { locale: ru });

function getDateAndTime(event) {

  const monthName = month(event.startAt);
  const dayName = dayOfTheWeek(event.startAt);
  const dayNumber = date(event.startAt);
  const startsAt = time(event.startAt);
  const endsAt = time(event.endAt);
  
  return  {
    monthName,
    dayName,
    dayNumber,
    startsAt,
    endsAt
  };
}

export { date, month, time, dayOfTheWeek, dateUnixFormat, getDateAndTime };


