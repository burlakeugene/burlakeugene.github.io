import { Detection } from 'burlak';

export const loadSwitch = show => {
  return {
    type: 'LOAD_SWITCH',
    payload: {
      show
    }
  };
};

export const testFunc = () => {
  return {
    type: 'INC'
  };
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
