export const GO_NEXT = 'USERS-LIST/GO_NEXT';
export const GO_PREV = 'USERS-LIST/GO_PREV';

export const goPrev = () => {
  return {
    type: GO_PREV,
  };
};

export const goNext = () => {
  return {
    type: GO_NEXT,
  };
};
