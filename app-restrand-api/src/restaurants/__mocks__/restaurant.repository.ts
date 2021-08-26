export const MockRestaurantsRepository = () => {
  return {
    create: jest.fn((dto) => {
      return new Promise((res) => {
        return {
          id: Date.now(),
          ...dto,
        };
      });
    }),
    findAll: jest.fn(() => {
      return new Promise((res) => {
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
      });
    }),
    update: jest.fn((id, dto) => {
      return new Promise((res) => {
        return {
          id: +id,
          ...dto,
        };
      });
    }),
  };
};
