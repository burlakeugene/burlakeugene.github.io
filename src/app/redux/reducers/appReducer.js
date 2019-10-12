import initialState from './defaultsState/app.js';

var appReducer = function(state = initialState, action) {
  let newState = Object.assign({}, state);
  if (action.type === 'LOAD_CHANGE') {
    action = action.payload;
    newState.loading = {
      appLoading: action.hasOwnProperty('appLoading') ? action.appLoading : state.loading.appLoading,
      logoMini: action.hasOwnProperty('logoMini') ? action.logoMini : state.loading.logoMini,
      logoLoading: action.hasOwnProperty('logoLoading') ? action.logoLoading : state.loading.logoLoading,
      preloaderShow: action.hasOwnProperty('preloaderShow') ? action.preloaderShow : state.loading.preloaderShow,
      headerWide: action.hasOwnProperty('headerWide') ? action.headerWide : state.loading.headerWide,
      contentHidden: action.hasOwnProperty('contentHidden') ? action.contentHidden : state.loading.contentHidden,
      footerOverlay: action.hasOwnProperty('footerOverlay') ? action.footerOverlay : state.loading.footerOverlay
    }
    return newState;
  }
  return state;
};

export default appReducer;
