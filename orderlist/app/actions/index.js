export const selectLibrary = (libraryId) =>{
  return {
    type: 'select_library',
    payload: libraryId
  };
};

export const selectItem = (selectItemId) =>{
  return {
    type: 'select_item',
    payload: selectItemId
  };
};
