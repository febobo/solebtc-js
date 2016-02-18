import T from 'i18n-react';

export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';

export function changeLanguage(language) {
  T.setTexts('../texts/' + language + '.yml');
  return {
    type: LANGUAGE_CHANGED,
    language
  }
}
