export const splitBySeparatorList = (value, separatorList) => {
  return value.split(new RegExp(`[${separatorList.join("")}]`));
};
