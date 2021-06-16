import data from "../data/data";

export const initialState = {
  basket: data,
  isLogin: false,
};

// Selector

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_TRUE":
      return {
        ...state,
        isLogin: true,
      };
    case "SIGNIN_FALSE":
      return {
        ...state,
        isLogin: false,
      };
    case "ADD_CUSTOMER":
      const nr = state.basket.length;
      const newCustomer = {
        id: nr,
        name: action.item.name,
        surname: action.item.surname,
        address2: action.item.address2,
        address: action.item.address,
        age: action.item.age,
        nationality: action.item.nationality,
      };
      return {
        ...state,
        basket: [...state.basket, newCustomer],
      };
    default:
      return state;
  }
};

export default reducer;
