export function loadSwitch(bool = true){
	return {
		type: 'LOAD_SWITCH',
		payload: {
			load: bool
		}
	}
}