import { store } from 'store';
import { promisify, simplePromisify } from './App';
import 'babel-polyfill';

export const loadOff = async () => {
  await simplePromisify(() => {
    logoMini(true);
    logoLoading(false);
  });
  await simplePromisify(() => {
    preloaderShow(false);
  }, 300);
  await simplePromisify(() => {
    appLoading(false);
    headerWide(false);
  }, 500);
  await simplePromisify(() => {
    contentHidden(false);
  }, 500);
  await simplePromisify(() => {
    footerOverlay(true);
  }, 1000);
};

export const loadOn = async () => {
  await simplePromisify(() => {
    contentHidden(true);
    footerOverlay(false);
    headerWide(true);
    preloaderShow(true);
  });
  await simplePromisify(() => {
    appLoading(true);
  }, 500);
  await simplePromisify(() => {
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