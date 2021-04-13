import { DateTime } from "luxon";

export const getTodaysDate = () => DateTime.now().toLocaleString({month: 'long', day: 'numeric'});
  
export const getCurrentWeekday = () => DateTime.now().toLocaleString({weekday: 'long'});

export const getForecastWeekday = (dt) => DateTime.fromSeconds(dt).toFormat("cccc");