import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useDispatch} from "react-redux";
import { inforUiActions } from "../../../store/shipping-infor/inforUiSlice";
import "../../../styles/shipping-info.css";

const ShippingInfo = () => {

  const dispatch = useDispatch();
  const toggleInfor= () => {
    dispatch(inforUiActions.toggle());
  };
  return (
    <div className="shipping__container">
      <div className="shipping-info">
            <div className="shipping-info__container">
                <div className="shipping__close" onClick={toggleInfor}>
                    <AiFillCloseCircle/>
                </div>
                <div className="shipping-info__title">
                    <h3>Shipping Info</h3>
                </div>
                <div className="shipping-info__content">
                    <input type="text" placeholder='Enter your name'/>
                    <input type="text" placeholder='Enter your numberphone'/>
                    <input type="text" placeholder='Enter your address'/>
                    <input type="email" placeholder='Enter your email'/>
                    <button onClick={toggleInfor}>OK</button>
                </div>    
            </div>            
        </div>
    </div>
  );
};

export default ShippingInfo;