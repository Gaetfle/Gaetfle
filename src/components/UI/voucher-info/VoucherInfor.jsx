import React from "react";
import { voucherUiActions } from "../../../store/voucher/voucherUiSlice";
import "../../../styles/voucher-info.css";
import { useDispatch } from "react-redux";
import { ListGroup } from "reactstrap";
import freeship from "../../../assets/fake-data/freeship";
import ApplyVoucherCard from "../voucher/ApplyVoucherCard";
import ApplyFreeshipCard from "../voucher/ApplyFreeshipCard";
import coupon from "../../../assets/fake-data/coupon";

const VoucherInfo = () => {

  const dispatch = useDispatch();
  const toggleInfor= () => {
    dispatch(voucherUiActions.toggle());
  };

  const freeshipCard = freeship.slice(0, 2);
  
  return (
    <div className="voucher__container">
      <ListGroup className="voucher">
        <div className="voucher__close">
          <span>
            <i className="ri-close-fill" onClick={toggleInfor}></i>
          </span>
          <h5>Cart</h5>
        </div>

        <div className="voucher__item-list">
          {coupon.map((item) => (
              <div key={item.id} className="mb-4">
                {console.log(item)}
                <ApplyVoucherCard id={item.id} title={item.title} image={item.image} desc={item.desc} date={item.date} />
              </div>
          ))}
          {freeshipCard.map((item) => (
            <div key={item.id} className="mb-4">
              <ApplyFreeshipCard id={item.id} title={item.title} image={item.image} desc={item.desc} date={item.date} />
            </div>
          ))}
        </div>
        <div className="voucher__bottom d-flex align-items-center justify-content-between">
          <button onClick={toggleInfor}>
            OK
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default VoucherInfo;