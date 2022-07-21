import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import "../../../styles/confirm-box.css";
import { useDispatch, useSelector } from "react-redux";
import { confirmUiActions } from "../../../store/confirm-box/confirmUiSlice";
import { Link } from "react-router-dom";
import { orderlistActions } from "../store/order/orderSlice";

const ShippingInfo = () => {
  const dispatch = useDispatch();
  
  const current = new Date();
  const id = "GH91"
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const method = useSelector((state) => state.payment.method);
  const addToOrder = () => {
    console.log(id, "  ", date, "   ", totalPayment, "   ", method)
    dispatch(
      orderlistActions.addItem({
        id,
        date,
        total: totalPayment,
        payment: method,
      })
    );
  }

  const toggleNoti= () => {
    dispatch(confirmUiActions.toggle());
  };

  return (
    <div className="Confirm__container">
      <div className="Confirm-info">
        <div className="Confirm-info__container">
          <div className="Confirm__close"  style={{cursor: "pointer"}} onClick={toggleNoti}>
            <AiFillCloseCircle/> 
          </div>
          <div className="Confirm-info__title">
            <h3>Confirm Info</h3>
          </div>
          <div className="Confirm-info__content">
            <button onClick={toggleNoti}> Cancel </button>
            <Link to="/order" onClick={addToOrder}>
                    <button >
                      Order
                    </button>
            </Link>
          </div>   
        </div>            
     </div>
    </div>
  );
};

export default ShippingInfo;
