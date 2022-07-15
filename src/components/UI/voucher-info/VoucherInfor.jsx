import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { voucherUiActions } from "../../../store/voucher/voucherUiSlice";
import "../../../styles/voucher-info.css";
import { useDispatch } from "react-redux";
import { ListGroup } from "reactstrap";
import freeship from "../../../assets/fake-data/freeship";
import VoucherCard from "../voucher/VoucherCard";
import FreeshipCard from "../voucher/FreeshipCard";

const VoucherInfo = () => {

  const dispatch = useDispatch();
  const toggleInfor= () => {
    dispatch(voucherUiActions.toggle());
  };

  const freeshipCard = freeship.slice(0, 2);
  
  return (
    <div className="voucher__container">
      <div className="voucher-info">
            <div className="voucher-info__container">
                <div className="voucher__close" onClick={toggleInfor}>
                    <AiFillCloseCircle/>
                </div>
                <div className="voucher-info__title">
                    <h3>Vouchers</h3>
                </div>
                <div className="voucher-info__content">
                    {freeshipCard.length === 0 ? (
                      <h6 className="text-center mt-5">No item added to the cart</h6>
                    ) : (
                      freeshipCard.map((item, index) => (
                        <FreeshipCard item={item} key={index} />
                      ))
                    )}
                </div>
                <button onClick={toggleInfor}>OK</button>    
            </div>            
        </div>
    </div>
  );
};

export default VoucherInfo;