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

const addMyRating = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }
    return {
      ...currentStateElement,
      myRating: action.payload.myRating,
    };
  });
};

const addMyHover = (state, action) => {
  return state.map(currentStateElement => {
    if (currentStateElement.id !== action.payload.id) {
      return currentStateElement;
    }
    return {
      ...currentStateElement,
      myHover: action.payload.myHover,
    };
  });
};

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_FAVOURITE = createActionName('ADD_FAVOURITE');
const ADD_RATING = createActionName('ADD_RATING');
const ADD_HOVER = createActionName('ADD_HOVER');

/* action creators */
export const addFavourite = payload => ({ payload, type: ADD_FAVOURITE });
export const addRating = payload => ({ payload, type: ADD_RATING });
export const addHover = payload => ({ payload, type: ADD_HOVER });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FAVOURITE: {
      return addProductToFavourite(statePart, action);
    }
    case ADD_RATING: {
      return addMyRating(statePart, action);
    }
    case ADD_HOVER: {
      return addMyHover(statePart, action);
    }
    default:
      return statePart;
  }
}
