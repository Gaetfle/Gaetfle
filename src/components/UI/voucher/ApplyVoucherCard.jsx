import React from "react";
import "../../../styles/apply-voucher-card.css";
import { useState, useEffect } from "react";
import { voucherUiActions } from "../../../store/voucher/voucherUiSlice";
import { useDispatch } from "react-redux";
import coupon from "../../../assets/fake-data/coupon";

const ApplyVoucherCard = (props) => {
    const [textSave, setTextSave] = useState("SAVE")
    const [disableSave, setDisableSave] = useState(false);
    const dispatch = useDispatch();
    function setButton() {
        setDisableSave(!disableSave)
    }
 
    const optionHandler = (event) => {
        console.log(event.target.value)
        const temp = coupon.filter((item)=>item.id === event.target.value)
        console.log(temp)
        dispatch(voucherUiActions.setOption(temp))
       
    }

    useEffect(() => {
        if (disableSave === true) {
            setTextSave("SAVED")
        }
        else {
            setTextSave("SAVE")
        }
    }, [disableSave]);
    return (

        <div style={{ backgroundColor: "#ebc7af" }} className="coupon rounded mb-3 d-flex justify-content-between">
            <div className="kiri p-3 mt-2">
                <div className="icon-container ">
                    <div className="icon-container_box" >
                        <img src={props.image} width="50" alt="voucher"/>
                    </div>
                </div>
            </div>
            <div className="tengah pt-2 d-flex w-100 justify-content-start mt-2">
                <div>
                    <h3 className="mb-1 " style={{ fontSize: 16, fontWeight: "bold" }}>{props.title} </h3>
                    <p className=" mb-2 " style={{ fontSize: 14, }}>{props.desc}</p>
                    <p className="text-muted" style={{ fontSize: 12, }}>{props.date}</p>
                </div>

            </div>

            <div className="kanan ">
                <div className="info align-items-center ">
                    <div className="w-64 p-3 mt-2">
                    <label className="btn__container">
                        <input type="radio" name="radio" defaultValue={props.id} onClick={optionHandler}/>
                        <span className="checkmark"></span>
                    </label>
                    </div>
                    <div className="w-64 mt-4">
                        <a 
                            target="_blank" 
                            className="btn  btn-block" 
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "flex-end", 
                                fontSize: 10
                            }}
                        >
                            Conditions
                        </a>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default ApplyVoucherCard;
