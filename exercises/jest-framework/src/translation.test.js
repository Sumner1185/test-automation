import translate from './translation';
import getTranslationData from './translationService';

jest.mock('./translationService.js');

describe('Translator', () => {
  it('should mock the translation service successfully', () => {
    // Implement mock function for getTranslationData.
    // Hint: Jest has a method called 'mockImplementation'
    const result = translate('spanish', 'hi');
    expect(getTranslationData).toHaveBeenCalled();
    expect(result).toBe('Hola');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
