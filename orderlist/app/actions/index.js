export const selectLibrary = (libraryId) =>{
  return {
    type: 'select_library',
    payload: libraryId
  };
};

export const toggle = (id) =>{
  return {
    type: 'toggle',
    payload: id
  };
};
export const addToCard = (title) => {
  return {
    type: 'addToCard',
    payload: title
  };
};
export const deleteFromCard = (title) => {
  return {
    type: 'deleteFromCard',
    payload: title
  };
};
