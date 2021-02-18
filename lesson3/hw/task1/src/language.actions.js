export const SETTER = 'LANGUAGE/SETTER';

export const setLanguage = lang => {
  return {
    type: SETTER,
    payload: {
      lang,
    },
  };
};
