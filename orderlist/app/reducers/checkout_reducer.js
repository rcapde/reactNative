
const initialState = [
  {title:'Pizza Fresca'},
]

export default (state = initialState, action) => {
  switch(action.type){
    case 'addToCard':
    return[
        {
          title: action.payload
        },
        ...state
    ]
    case 'deleteFromCard':
      return state.filter(item =>
      item.title !== action.payload
    )

   default:
    return state
  }
};
