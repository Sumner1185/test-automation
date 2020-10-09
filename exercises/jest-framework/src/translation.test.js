import translate from './translation';
import getTranslationData from './translationService';

jest.mock('./translationService.js');

describe('Translator', () => {
  it('should mock the translation service successfully', () => {
    const mockData = [{
      language: "spanish",
      words: {
        hi: 'Hola'
      }}]
    getTranslationData.mockImplementation(() => mockData)
    const result = translate('spanish', 'hi');
    expect(getTranslationData).toHaveBeenCalled();
    expect(result).toBe('Hola');
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });
});
