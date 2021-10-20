export const trimText = (text = "", limit) =>
  text.length > limit ? text.slice(0, limit).concat("...") : text;
