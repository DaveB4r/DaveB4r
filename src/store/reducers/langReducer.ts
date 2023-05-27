import { SET_LANGUAGE, LangAction, LangState } from '../types';
const localStorageLang = localStorage.getItem('language') ? localStorage.getItem('language') : 'EN';
const initialState: LangState = {
  language: localStorageLang
}

const langReducer = (state = initialState, action: LangAction) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return{
        ...state,
        language: action.payload
      }  
    default:
      return state;
  }
}

export default langReducer;