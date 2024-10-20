export default function validator(input) {
  const is_Custom = /^\/\/(.*)\\n/;
  const negative_num = /-\d+/;
  if (negative_num.test(input)) {
    throw new Error('[ERROR]');
  }
  if (!is_Custom.test(input)) {
    const default_pattern = /^[0-9,:\n]+$/;
    if (!default_pattern.test(input)) {
      throw new Error('[ERROR]');
    } else {
      return input;
    }
  } else {
    const custom_pattern = input.match(is_Custom);
    if (custom_pattern) {
      const custom_delimiter = custom_pattern[1];

      const Exp = input.slice(input.indexOf('\\n') + 2);

      const new_pattern = new RegExp(`^[0-9${custom_delimiter},:\n]+$`);

      if (!new_pattern.test(Exp)) {
        throw new Error('[ERROR]');
      } else {
        return Exp;
      }
    }
  }
}
