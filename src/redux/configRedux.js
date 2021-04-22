/* selectors */
export const getRwdMode = ({ config }) => config;

/* action name creator */
const reducerName = 'config';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_RWD_MODE = createActionName('SET_RWD_MODE');

/* action creators */

export const setRwdMode = mode => ({ mode, type: SET_RWD_MODE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_RWD_MODE: {
      return statePart !== action ? action : statePart;
    }
    default:
      return statePart;
  }
}
