/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* function*/

const addProductToFavourite = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }

    return {
      ...currentStateElement,
      isFavourite: action.payload.isFavourite,
    };
  });
};

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_FAVOURITE = createActionName('ADD_FAVOURITE');

/* action creators */
export const addFavourite = payload => ({ payload, type: ADD_FAVOURITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVOURITE: {
      return addProductToFavourite(statePart, action);
    }
    default:
      return statePart;
  }
}
