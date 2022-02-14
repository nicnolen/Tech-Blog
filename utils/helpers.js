/* EXPORT FUNCTIONS TO MAKE TESTS PASS */
module.exports = {
  // Constructor function to format date
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  // Constructor function to pluralize words
  format_plural: (word, amount) => {
    // if the word quantity is not 1
    if (amount !== 1) {
      // pluralize
      return `${word}s`;
    }
    return word;
  },
};
