/* selectors */

export const getFavourites = ({ favourites }) => favourites;

/*ACTIONS*/

//action name creator
const reducerName = 'furniture';
const createActionName = name => `app/${reducerName}/${name}`;

// action type
export const ADD_FURNITURE = createActionName('ADD_FURNITURE');

//action creators
export const addFournitureToFavourite = payload => ({ payload, type: ADD_FURNITURE });

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case ADD_FURNITURE:
      return {
        ...statePart,
        [action.payload]: action.payload,
      };
    default:
      return statePart;
  }
}
