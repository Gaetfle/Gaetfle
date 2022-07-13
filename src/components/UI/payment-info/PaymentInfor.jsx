import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useDispatch} from "react-redux";
import { paymentUiActions } from "../../../store/payment/paymentUiSlice";
import "../../../styles/payment-info.css";

const PaymentInfo = () => {

  const dispatch = useDispatch();
  const togglePayment= () => {
    dispatch(paymentUiActions.toggle());
  };
  return (
    <div className="payment__container">
      <div className="payment-info">
            <div className="payment-info__container">
                <div className="payment__close" onClick={togglePayment}>
                    <AiFillCloseCircle/>
                </div>
                <div className="payment-info__title">
                    <h3>Payment Info</h3>
                </div>
                <div className="payment-info__content">
                    <input type="text" placeholder='Enter your name'/>
                    <input type="text" placeholder='Enter your numberphone'/>
                    <input type="text" placeholder='Enter your address'/>
                    <input type="email" placeholder='Enter your email'/>
                    <button onClick={togglePayment}>OK</button>
                </div>    
            </div>            
        </div>
    </div>
  );
};

export default PaymentInfo;