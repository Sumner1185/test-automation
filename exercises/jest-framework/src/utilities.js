const stripString = (string, regex = /[ "']/gi) => string.replace(regex, '');

const ucFirstLetter = (string) => {
  if (string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }
  return null;
};

export {
  stripString,
  ucFirstLetter,
};
