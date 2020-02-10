import { Detection } from 'burlak';
import history from 'core/history';
import { loadOff, loadOn } from 'actions/Loading';

export const promisify = (func = () => {}, delay = 0) => {
  return new Promise((resolve, reject) => {
    let result = func();
    if (result && result instanceof Promise) {
      result
        .then(resp => {
          setTimeout(() => {
            resolve(resp);
          }, delay);
        })
        .catch(error => {
          setTimeout(() => {
            reject(error);
          }, delay);
        });
    } else {
      setTimeout(() => {
        resolve();
      }, delay);
    }
  });
};

export const simplePromisify = (func = () => {}, delay = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      func();
      resolve();
    }, delay);
  });
};

export const isMobile = () => {
  const Detect = new Detection();
  return Detect.isMobile();
};

export const goTo = to => {
  if(history.location.pathname === to) return;
  loadOn(3000).then(() => {
    history.push(to);
    loadOff();
  });
};

// export function thunkTest(){
// 	return function(dispatch){
// 		dispatch({
// 			type: 'LOAD_SWITCH',
// 			payload: {
// 				loading: true
// 			}
// 		})
// 	}
// }
