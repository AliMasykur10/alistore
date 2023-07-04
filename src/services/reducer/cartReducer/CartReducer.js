const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const updatedItems = [...state.items, newItem];
      const updatedTotalAdd = state.total + newItem.price;
      return { ...state, items: updatedItems, total: updatedTotalAdd };
    case "REMOVE_FROM_CART":
      const removedItem = action.payload;
      const filteredItems = state.items.filter((item) => item.id !== removedItem.id);
      const updatedTotalRemove = state.total - removedItem.price;
      return { ...state, items: filteredItems, total: updatedTotalRemove };
    default:
      return state;
  }
};

export default cartReducer;
