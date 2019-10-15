import { Detection } from 'burlak';

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

export const isMobile = () => {
  const Detect = new Detection();
  return Detect.isMobile();
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
