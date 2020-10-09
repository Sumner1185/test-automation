import getTranslationData from './translationService';

const translate = (language, word) => {
  const data = getTranslationData().find(d => d.language === language);
  return data.words[word];
};

export default translate;
