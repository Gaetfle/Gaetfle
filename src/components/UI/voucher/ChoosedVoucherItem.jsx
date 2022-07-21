import React from "react";
import "../../../styles/choosed-voucher.css";
import {RiCloseCircleFill} from "react-icons/ri";
import { useDispatch } from "react-redux";
import {voucherUiActions} from "../../../store/voucher/voucherUiSlice";

const ChoosedVoucherItem = (props) => {
    const dispatch = useDispatch();
    const toggleAppliedVoucher= () => {
        dispatch(voucherUiActions.deleteOption());
    }
    return (

        <div style={{ backgroundColor: "#ebc7af" }} className="coupon-container rounded mb-2 d-flex justify-content-between">
            <div className="tengah pt-2 d-flex w-100 justify-content-start mt-3">
                <div>
                    <h3 className="coupon__title mb-1" 
                        style={{ 
                            fontSize: 16, 
                            fontWeight: "bold", 
                            paddingLeft: "16px", 
                            paddingBottom: "8px", 
                            marginTop: "-10px" 
                        }}>{props.title} </h3>
                </div>
            </div>

            <div className="kanan-container">
                <div className="info-coupon align-items-center ">
                    <div className="btn__coupon w-64" onClick={toggleAppliedVoucher}>
                        <RiCloseCircleFill/>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default ChoosedVoucherItem;
