// Action for depositing cash
export const increment = (money) =>{
    return(dispatch)=>{
      dispatch({
        type:'deposit',
        payload: money
      })
    }
  }
  
  // Action for withdrawal of cash
  export const decrement = (money) =>{
    return(dispatch)=>{
      dispatch({
        type:'withdrawl',
        payload: money
      })
    }
  }