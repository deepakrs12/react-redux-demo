import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icCreamReducer from "./iceCream/iceCreamReducer";
import burgerReducer from "./burger/burgerReducer";
import useReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icCreamReducer,
  burger: burgerReducer,
  user: useReducer
})

export default rootReducer