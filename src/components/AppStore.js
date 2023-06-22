import React , {useState} from "react";

const AppStore = () => {

  const [counter, setCounter] = useState(0);

  const handleClickMinus = () => {
    setCounter(counter - 100);
  }

  const handleClickPlus = () => {
    setCounter(counter + 100);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center align-items-center">
      <div className='d-flex justify-content-center align-items-center my-3'>
            <button onClick={handleClickMinus} className='btn btn-primary mx-2'>-</button>
              <button type="button" className="btn btn-primary mr-3" disabled={true}>Your Balance={counter}</button>
            <button onClick={handleClickPlus} className='btn btn-primary mx-2'>+</button>
        </div>
      
    </nav>
  );
};

export default AppStore;
