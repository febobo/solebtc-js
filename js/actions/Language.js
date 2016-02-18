import T from 'i18n-react';
import store from 'store';

export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';

export function changeLanguage(language) {
  store.set('language', language);
  T.setTexts(require('../texts/' + language + '.js').text);
  return {
    type: LANGUAGE_CHANGED,
    language
  };
}
