'use strict';

import { TOGGLE } from '../actions/sidemenu'

const initialState = {
  toggled: false,
}

export default function sideMenuReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        toggled: !state.toggled,
      }
    default:
      return state
  }
}
