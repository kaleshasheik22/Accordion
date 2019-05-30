import axios from 'axios'
import { actionTypes } from '../common/constants/actionTypes'


export const loadAccordionData = (dispatch) => {
    const _getAccordionURL = 'https://api.myjson.com/bins/1ekltn'

    axios.get(_getAccordionURL
      ).then(({ data }) => {
      
        dispatch({
            type: actionTypes.LOAD_ACCORDION_DATA, paylod: {
                data
            }
        })
     
    }).catch((error) => {
        console.warn('error', error)
    })
   
}
