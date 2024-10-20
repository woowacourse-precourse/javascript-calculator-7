export default function checkForNaN(value) {
  return value.some((v) => Number.isNaN(v));
}
