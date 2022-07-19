import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { inforUiActions } from "../../../store/shipping-infor/inforUiSlice";
import "../../../styles/shipping-info.css";
import { useSelector, useDispatch } from "react-redux";
import { orderInformationActions } from "../../../store/orderInformation/orderInformationSlice";
import { useState } from "react";
import informationImg from "../../../assets/images/information.png";

const ShippingInfo = () => {

  const currentName = useSelector((state) => state.order.name);
  const currentPhone = useSelector((state) => state.order.phone);
  const currentAddress = useSelector((state) => state.order.address);
  const currentGmail = useSelector((state) => state.order.gmail);

  const [name, setName] = useState(currentName)
  const [phone, setPhone] = useState(currentPhone)
  const [address, setAddress] = useState(currentAddress)
  const [email, setEmail] = useState(currentGmail)
  const dispatch = useDispatch();



  const toggleInfor= () => {
    dispatch(inforUiActions.toggle());
    dispatch(orderInformationActions.setName(name));
    dispatch(orderInformationActions.setPhone(phone));
    dispatch(orderInformationActions.setAddress(address));
    dispatch(orderInformationActions.setEmail(email));
    console.log(name);
    console.log(email)
  };
  const getName = (event) => {
    const newName = event.target.value;
    setName(newName);
  };
  const getPhone = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
  };
  const getAddress = (event) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
  };
  const getEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };
  return (
    <div className="shipping__container">
      <div className="shipping-info">
        <div className="shipping__img">
          <img src={informationImg} alt="information-img" />
        </div>
        <div className="shipping-info__container">
          <div className="shipping__close"  style={{cursor: "pointer"}} onClick={toggleInfor}>
            <AiFillCloseCircle/> 
          </div>
          <div className="shipping-info__title">
            <h3>Shipping Info</h3>
          </div>
          <div className="shipping-info__content">
            <input type="text" placeholder='Enter your name' onChange={getName} defaultValue={currentName}/>
            <input type="text" placeholder='Enter your numberphone' onChange={getPhone} defaultValue={currentPhone}/>
            <input type="text" placeholder='Enter your address' onChange={getAddress} defaultValue={currentAddress}/>
            <input type="email" placeholder='Enter your email' onChange={getEmail} defaultValue={currentGmail}/>
            <button onClick={toggleInfor}>OK</button>
          </div>   
        </div>            
     </div>
    </div>
  );
};

export default ShippingInfo;
