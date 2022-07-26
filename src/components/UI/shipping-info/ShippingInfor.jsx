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
  const currentStreet = useSelector((state) => state.order.street);
  const currentWard = useSelector((state) => state.order.ward);
  const currentDistrict = useSelector((state) => state.order.district);
  const currentProvince = useSelector((state) => state.order.province);
  const currentGmail = useSelector((state) => state.order.gmail);

  const [name, setName] = useState(currentName)
  const [phone, setPhone] = useState(currentPhone)
  const [street, setStreet] = useState(currentStreet)
  const [ward, setWard] = useState(currentWard)
  const [district, setDistrict] = useState(currentDistrict)
  const [province, setProvince] = useState(currentProvince)
  const [email, setEmail] = useState(currentGmail)
  const dispatch = useDispatch();



  const toggleInfor= () => {
    dispatch(inforUiActions.toggle());
    dispatch(orderInformationActions.setName(name));
    dispatch(orderInformationActions.setPhone(phone));
    dispatch(orderInformationActions.setStreet(street));
    dispatch(orderInformationActions.setWard(ward));
    dispatch(orderInformationActions.setDistrict(district));
    dispatch(orderInformationActions.setProvince(province));
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
  const getStreet = (event) => {
    const newStreet = event.target.value;
    setStreet(newStreet);
  };
  const getWard = (event) => {
    const newWard = event.target.value;
    setWard(newWard);
  };
  const getDistrict = (event) => {
    const newDistrict = event.target.value;
    setDistrict(newDistrict);
  };
  const getProvince = (event) => {
    const newProvince = event.target.value;
    setProvince(newProvince);
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
            <input type="text" placeholder='Enter your street' onChange={getStreet} defaultValue={currentStreet}/>
            <input type="text" placeholder='Enter your ward' onChange={getWard} defaultValue={currentWard}/>
            <input type="text" placeholder='Enter your district' onChange={getDistrict} defaultValue={currentDistrict}/>
            <input type="text" placeholder='Enter your province' onChange={getProvince} defaultValue={currentProvince}/>
            <input type="email" placeholder='Enter your email' onChange={getEmail} defaultValue={currentGmail}/>
            <button onClick={toggleInfor}>OK</button>
          </div>   
        </div>            
     </div>
    </div>
  );
};

export default ShippingInfo;
