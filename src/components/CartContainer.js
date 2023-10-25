import React, {useEffect} from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import CartItem from './CartItem';
import { clearCart, getCartItems, getCartTotal } from '../redux/feature/cartSlice';

const CartContainer = () => {

  const {items, totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCartTotal());
  }, [items])

  
  if (items.length === 0) {
    return (
      <div>
        <h2 className='lead-mb-0 mt-2'>Your shopping Cart</h2>
        <p>Your shopping cart is empty</p>
        <MDBBtn className='mx-2' onClick={() => dispatch(getCartItems())}>
          Get Items
        </MDBBtn>
      </div>
    )
  }

  return (
    <>
      <h2 className='lead-mb-0 mt-2'>Your shopping Cart</h2>

      {items.map((item) => {
        return <CartItem key={item.id} {...item}/>
      })}

      <footer>
        <hr/>
        <h4 style={{display: "flex", justifyContent: "space-evenly", marginRight: "60px"}}> 
        Total <span>${totalAmount}</span>
        </h4>
      </footer>

      <MDBBtn color='danger' style={{width:"140px", marginTop: "50px"}}  onClick={() => dispatch(clearCart())}>
        Clear Cart
      </MDBBtn>
      

    </>
  )
}

export default CartContainer

