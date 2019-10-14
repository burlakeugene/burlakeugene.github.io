import { store } from 'store';

export const loadOff = () => {
  promisify(() => {
    logoMini(true);
    logoLoading(false);
  })
    .then(() => {
      return promisify(() => {
        preloaderShow(false);
      });
    })
    .then(() => {
      return promisify(() => {
        appLoading(false);
        headerWide(false);
      });
    })
    .then(() => {
      return promisify(() => {
        contentHidden(false);
      });
    })
    .then(() => {
      promisify(() => {
        footerOverlay(true);
      }, 1000);
    });
};

export const loadOn = () => {
  promisify(() => {
    contentHidden(true);
    footerOverlay(false);
  })
    .then(() => {
      return promisify(() => {
        headerWide(true);
      });
    })
    .then(() => {
      return promisify(() => {
        preloaderShow(true);
      });
    })
    .then(() => {
      return promisify(() => {
        appLoading(true);
      });
    })
    .then(() => {
      promisify(() => {
        logoMini(false);
        logoLoading(true);
      });
    });
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

export const promisify = (func, time = 500) => {
  return new Promise((resolve, reject) => {
    func();
    setTimeout(() => {
      resolve();
    }, time);
  });
};
