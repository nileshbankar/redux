const reducer = (state, action) => {
  switch (action.type) {
    case "DECREASE":
      const newCartDecrease = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }

        return item;
      });
      return { ...state, cart: newCartDecrease };
      break;
    case "INCREASE":
      const newCartIncrease = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }

        return item;
      });
      return { ...state, cart: newCartIncrease };
      break;
    case "REMOVE":
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
      break;

    case "CLEAR_CART":
      return { ...state, cart: [] };

      break;
    case "GET_TOTAL":
      let newTotal = state.cart.reduce(
        (total, item) => {
          total.total = total.total + item.amount * item.price;
          total.amount = total.amount + item.amount;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      return {
        ...state,
        total: newTotal.total,
        amount: newTotal.amount,
      };

      break;

    default:
      return state;
      break;
  }
};

export default reducer;
