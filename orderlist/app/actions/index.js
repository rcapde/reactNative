export const selectLibrary = (libraryId) =>{
  return {
    type: 'select_library',
    payload: libraryId
  };
};

export const isOrdered = (ordered) =>{
  return {
    type: 'is_ordered',
    payload: ordered
  };
};
