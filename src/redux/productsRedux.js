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

const addProductToCompare = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }

    return {
      ...currentStateElement,
      compare: action.payload.compare,
    };
  });
};

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_FAVOURITE = createActionName('ADD_FAVOURITE');
const ADD_COMPARE = createActionName('ADD_COMPARE');

/* action creators */
export const addFavourite = payload => ({ payload, type: ADD_FAVOURITE });
export const addCompare = payload => ({ payload, type: ADD_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVOURITE: {
      return addProductToFavourite(statePart, action);
    }
    case ADD_COMPARE: {
      return addProductToCompare(statePart, action);
    }
    default:
      return statePart;
  }
}
