const getTranslationData = () => {
  const data = [
    {
      language: 'japanese',
      words: {
        hi: 'Konnichiwa',
        bye: 'Sayonara',
        dog: 'Inu',
        cat: 'Neko',
      },
    },
    {
      language: 'french',
      words: {
        hi: 'Salut',
        bye: 'Au Revoir',
        dog: 'Chien',
        cat: 'Chat',
      },
    },
  ];

  return data;
};

export default getTranslationData;
