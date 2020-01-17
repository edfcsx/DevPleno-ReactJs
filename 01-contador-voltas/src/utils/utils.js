export const secondsToTime = (time) => {
  const minutes = parseInt(time / 60, 10);
  const seconds = time % 60;

  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutesStr}:${secondsStr}`;
}