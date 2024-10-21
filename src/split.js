const split = (input, delimiters) => {
  const delimiterPattern = new RegExp(`[${delimiters.join("")}]`)
  return input.split(delimiterPattern)
}

export default split
