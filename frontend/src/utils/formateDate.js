export const formateDate = (date, config) => {
  const defaultOption = { day: "numeric", month: "short", year: "numeric" }; //default option for
  const options = config ? config : defaultOption;

  return new Date(date).toLocaleDateString("en-US", options);
};
