exports.getAnswer = function getAnswer () {
  for (let i = 0, j = 0; i < 1000; i++) {
    j++; // just consume some time...
  }
  return 42;
};
