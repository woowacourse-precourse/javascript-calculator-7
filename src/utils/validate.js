import { findCustomSeparator, escapeRegExp } from './helper.js';

const checkOnlyNumber = (text) => {
  if (text !== '' && !isNaN(Number(text))) {
    throw new Error('[ERROR] 구분자가 없습니다.');
  }
};

const checkOnlySeparator = (text) => {
  if (text !== '' && text.replace(/[^0-9]/g, '') === '') {
    throw new Error('[ERROR] 숫자가 없습니다.');
  }
};

const checkCustomSeparator = (text, separator) => {
  const escapedSeparator = escapeRegExp(separator);
  const regex = new RegExp(
    `//${escapedSeparator}\\\\n|[0-9]|${escapedSeparator}`,
    'g'
  );
  const removedSeparatorAndNumber = text.replace(regex, '');
  if (removedSeparatorAndNumber.length === 0) return;

  if (removedSeparatorAndNumber.split('').some((e) => e === '-')) {
    throw new Error('[ERROR] 숫자는 양수만 가능합니다.');
  } else {
    throw new Error('[ERROR] 커스텀구분자 외에 다른 구분자가 입력되었습니다.');
  }
};

const checkDefaultSeparator = (text) => {
  const removedSeparatorAndNumber = text.replace(/[0-9,:]/g, '');

  if (removedSeparatorAndNumber === '') return;

  if (removedSeparatorAndNumber.split('').some((e) => e === '-')) {
    throw new Error('[ERROR] 숫자는 양수만 가능합니다.');
  } else {
    throw new Error(
      '[ERROR] 쉼표(,) 또는 콜론(:) 외 다른 구분자가 입력되었습니다.'
    );
  }
};

export const validation = (text) => {
  checkOnlyNumber(text);
  checkOnlySeparator(text);

  const separator = findCustomSeparator(text);

  if (separator) {
    checkCustomSeparator(text, separator);
  } else {
    checkDefaultSeparator(text);
  }
};
