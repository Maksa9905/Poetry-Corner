export const timeManager = (timing) => {
  const now = new Date();
  const year =
    timing.getFullYear() === now.getFullYear()
      ? ""
      : `.${timing.getFullYear()}`;
  const date = timing.toLocaleString().slice(0, 5);
  const fullDate = date + year;

  const hours =
    timing.getHours().toString().length === 1
      ? "0" + timing.getHours()
      : timing.getHours();
  const minutes =
    timing.getMinutes().toString().length === 1
      ? "0" + timing.getMinutes()
      : timing.getMinutes();
  const fullTime = `${hours}:${minutes}`;

  if (fullDate === now.toLocaleString().slice(0, 5)) {
    return `Сегодня в ${fullTime}`;
  } else {
    return `${fullDate} в ${fullTime}`;
  }
};
