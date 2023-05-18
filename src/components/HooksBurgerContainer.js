import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBurger } from '../redux';

function HooksBurgerContainer() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{`Number of Burger - ${state.burger.numOfBurgers}`}</h2>
      <button onClick={()=>dispatch(buyBurger())}>Buy Burgers</button>
    </div>
  )
}

export default HooksBurgerContainer