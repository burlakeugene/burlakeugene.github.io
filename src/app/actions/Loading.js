import { store } from 'store';
import { promisify } from './App';
import 'babel-polyfill';

export const loadOff = async () => {
  await promisify(() => {
    logoMini(true);
    logoLoading(false);
  }, 500);
  await promisify(() => {
    preloaderShow(false);
  }, 500);
  await promisify(() => {
    appLoading(false);
    headerWide(false);
  }, 500);
  await promisify(() => {
    contentHidden(false);
  }, 500);
  await promisify(() => {
    footerOverlay(true);
  }, 1000);
};

export const loadOn = async () => {
  await promisify(() => {
    contentHidden(true);
    footerOverlay(false);
  }, 500);
  await promisify(() => {
    headerWide(true);
  }, 500);
  await promisify(() => {
    preloaderShow(true);
  }, 500);
  await promisify(() => {
    appLoading(true);
  }, 500);
  await promisify(() => {
    logoMini(false);
    logoLoading(true);
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