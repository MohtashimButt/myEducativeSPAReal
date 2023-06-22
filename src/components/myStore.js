// createStore is a method provided by Redux library
import { createStore } from "redux";

// importing myReducer.js which we created above
import  myReducer  from "./myReducer/myReducer";

// createStore takes in the reducer and the initial state (which is empty at the moment)
const myStore = createStore(myReducer, {});

export default myStore;