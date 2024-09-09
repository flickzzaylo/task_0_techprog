import {DateTime, Duration, Info, Interval, Settings} from 'luxon'


var currentTime = DateTime.local();
var nextYear = currentTime.plus({ years: 1 }).startOf('year');
var daysToNewYear = nextYear.diff(currentTime, ['days', 'hours', 'minutes', 'seconds']);
console.log(`До Нового года осталось: ${daysToNewYear.days} дней, ${daysToNewYear.hours} часов, ${daysToNewYear.minutes} минут`);