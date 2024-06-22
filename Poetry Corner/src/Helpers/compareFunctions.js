export const compareFunctions = {
  new: (post1, post2) => {
    if (post1.date - post2.date < 0) {
      return 1;
    } else if (post1.date - post2.date == 0) {
      return 0;
    } else if (post1.date - post2.date > 0) {
      return -1;
    }
  },

  popular: (post1, post2) => {
    if (post1.views - post2.views < 0) {
      return 1;
    } else if (post1.views - post2.views == 0) {
      return 0;
    } else if (post1.views - post2.views > 0) {
      return -1;
    }
  },

  highRating: (post1, post2) => {
    if (post1.rating - post2.rating < 0) {
      return 1;
    } else if (post1.rating - post2.rating == 0) {
      return 0;
    } else if (post1.rating - post2.rating > 0) {
      return -1;
    }
  },

  old: (post1, post2) => {
    if (post1.date - post2.date > 0) {
      return 1;
    } else if (post1.date - post2.date == 0) {
      return 0;
    } else if (post1.date - post2.date < 0) {
      return -1;
    }
  },
};
