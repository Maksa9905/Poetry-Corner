export const RecentPostsGrid = {
  default: {
    columns: 3,
    rows: 2,
  },
  screen640: {
    columns: 1,
    rows: 3,
  },
  screen768: {
    columns: 2,
    rows: 2,
  },
  screen1024: {
    columns: 3,
    rows: 2,
  },
  screen1440: {
    columns: 2,
    rows: 2,
  },
  screen1920: {
    columns: 3,
    rows: 2,
  },
};

export function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
