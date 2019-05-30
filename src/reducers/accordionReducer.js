import { actionTypes } from '../common/constants/actionTypes'


export const accordionReducer = (state = {}, action) => {
   
  switch (action.type) {
    case actionTypes.LOAD_ACCORDION_DATA:
   
      return Object.assign({}, state, {
        
          data: action.paylod
      })

    default:
          return state;

      }

}

