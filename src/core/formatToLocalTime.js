import moment from "moment/moment";

export const formatToLocalTime = (dt, timezone, format) => {
  return moment.unix(dt).utcOffset(timezone / 60).format(format);
};