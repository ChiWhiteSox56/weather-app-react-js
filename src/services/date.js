import moment from 'moment';

export const getTodaysDate = () => moment().format('LL');
  
export const getCurrentWeekday = () => moment().format('dddd');