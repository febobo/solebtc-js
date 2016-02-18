import store from 'store';

export const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED';

export function changeLanguage(language) {
  store.set('language', language);
  return {
    type: LANGUAGE_CHANGED,
    language
  };
}
