export const SYMBOL = Object.freeze({
  empty: '',
  no_delimiter_position: -1,
  delimiter_start_index: 2,
  max_custom_delimiter_length: 1,
  newline_offset: 1,
  zero: 0,
  default_delimiter: /,|:/,
  custom_delimiter_prefix: '//',
  escaped_newline_pattern: /\\n/,
  custom_delimiter_surffix: '\n',
  formatted_newline: '\n',
  special_char_escape_pattern: /[.*+?^${}()|[\]\\]/g,
  special_char_escape_replacement: '\\$&',
});
