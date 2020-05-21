export const toLocalDate = (isoDate) => {
  let date = new Date(isoDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  return `${month}/${day}/${year}`;
};

export const toLocalDateTime = (isoDate) => {
  let date = new Date(isoDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
};

export const dateDistance = (isoDate) => {
  let _MS_PER_DAY = 1000 * 3600 * 24;

  let date = new Date(isoDate);
  let currentDate = new Date(Date.now());

  let diff = currentDate.getTime() - date.getTime();
  const days = diff / _MS_PER_DAY;

  if (days >= 1) return `${Math.ceil(days)} days ago`;

  const hours = days * 24;
  if (hours >= 1) return `${Math.ceil(hours)} hours ago`;

  const minutes = hours * 60;
  if (minutes >= 1) return `${Math.ceil(minutes)} minutes ago`;

  const seconds = parseInt(minutes * 60);
  return `${seconds} seconds ago`;
};
