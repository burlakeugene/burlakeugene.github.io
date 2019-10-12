import { store } from 'store';

export const loadOff = () => {
  logoMini(true);
  logoLoading(false);
  setTimeout(() => {
    preloaderShow(false);
    setTimeout(() => {
      appLoading(false);
      setTimeout(() => {
        headerWide(false);
        setTimeout(() => {
          contentHidden(false);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
};

export const loadOn = () => {
  contentHidden(true);
  setTimeout(() => {
    headerWide(true);
    setTimeout(() => {
      preloaderShow(true);
      setTimeout(() => {
        appLoading(true);
        setTimeout(() => {
          logoMini(false);
          logoLoading(true);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
};

export const headerWide = (bool = false) => {
  store.dispatch({
    type: 'LOAD_CHANGE',
    payload: {
      headerWide: bool
    }
  });
};

export const appLoading = (bool = false) => {
  store.dispatch({
    type: 'LOAD_CHANGE',
    payload: {
      appLoading: bool
    }
  });
};

export const preloaderShow = (bool = false) => {
  store.dispatch({
    type: 'LOAD_CHANGE',
    payload: {
      preloaderShow: bool
    }
  });
};

export const logoMini = (bool = false) => {
  store.dispatch({
    type: 'LOAD_CHANGE',
    payload: {
      logoMini: bool
    }
  });
};

export const logoLoading = (bool = false) => {
  store.dispatch({
    type: 'LOAD_CHANGE',
    payload: {
      logoLoading: bool
    }
  });
};

export const contentHidden = (bool = false) => {
  store.dispatch({
    type: 'LOAD_CHANGE',
    payload: {
      contentHidden: bool
    }
  });
};

export const footerOverlay = (bool = false) => {
  store.dispatch({
    type: 'LOAD_CHANGE',
    payload: {
      footerOverlay: bool
    }
  });
};
