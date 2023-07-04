import { createStore } from "redux";
import cartReducer from "./services/reducer/cartReducer/CartReducer";

const store = createStore(cartReducer);

export default store;
