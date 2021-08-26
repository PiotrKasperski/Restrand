export const MockRestaurantsService = () => {
  const stubRestaurantsDB = new Array([
    {
      id: Date.now(),
      name: 'one',
    },
    {
      id: Date.now(),
      name: 'two',
    },
  ]);
  return {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn(() => {
      return [
        {
          id: Date.now(),
          name: 'one',
        },
        {
          id: Date.now(),
          name: 'two',
        },
      ];
    }),
    update: jest.fn((id, dto) => {
      return {
        id: +id,
        ...dto,
      };
    }),
  };
};
