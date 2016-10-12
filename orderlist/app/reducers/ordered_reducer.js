
const initialState = [
  {id:0, title:'Pizza Tonno',ingredient:'Tomate, Mozzarella y Atún ',ordered:false},
  {id:1, title:'Pizza Fresca',ingredient:'Tomate, Mozzarella y Champiñón',image:'./react.png',ordered:false},
  {id:2, title:'Pizza La Cosa Nostra',ingredient:'Tomate, Mozzarella, Carne picada, Cebolla, Bacon y Piña con el borde relleno de Mozzarella',ordered:false},
  {id:3, title:'Pizza Diabolo Rosso',ingredient:'Tomate, Mozzarella, Espárragos, Chorizo, Jamón York y Anchoas',ordered:false},
  {id:4, title:'Pizza Santa Madonna',ingredient:'Tomate, Mozzarella, Jamón York, Champiñón, Huevos y Roquefor',ordered:false},
  {id:5, title:'Pizza Porca miseria',ingredient:'Tomate, Mozzarella, Parmesano, Gruyere y Roquefort ',ordered:false},
  {id:6, title:'Pizza La Familia',ingredient:'omate, Mozzarella, Jamón York, Anchoas, Champiñón, Alcachofa y Pimiento',ordered:false},
  {id:7, title:'Pizza Napoli',ingredient:'Tomate, Mozzarella, Jamón York, Salchichas y Patatas fritas',ordered:false},
]

export default (state = initialState, action) => {
  switch(action.type){
    case 'is_ordered':
    return state.map(item =>
                     item.id === action.payload ?
                       Object.assign({}, item, { ordered: !item.ordered }) :
                       item
                   )
                   
   default:
    return state
  }
};
