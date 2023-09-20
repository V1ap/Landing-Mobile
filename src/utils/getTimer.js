export const getTimer = (time) => {
  const hours = Math.floor((time / 60 / 60) % 60);
  const min = Math.floor((time / 60) % 60);
  const sec = Math.floor(time % 60);
  return `${hours > 9 ? hours : "0" + hours}:${min > 9 ? min : "0" + min}:${
    sec > 9 ? sec : "0" + sec
  }`;
};
