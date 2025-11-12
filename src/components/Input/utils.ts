export const createEmptyEvent = (): React.ChangeEvent<HTMLInputElement> => {
  return { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
};
