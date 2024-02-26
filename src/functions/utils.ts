export const capitalizeSentenceFirstLetters = (sentence = "") => {
  return sentence
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};

export const capitalizeFirstLetter = (string = "") => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
