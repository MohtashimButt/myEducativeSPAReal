// Takes the initial state and action to be performed as arguments
const myReducer = (state=0,action) =>{
    // If the action dispatched by myAction.js file is "deposit", then add the money
    if(action.type === "deposit"){
      return state + action.payload
    }
    // If the action dispatched by myAction.js file is "withdrawl", then subtract the money
    else if(action.type === "withdrawl"){
      return state - action.payload
    }
    // Else keep it in original state
    else{
      return state
    }
}
  
export default myReducer;