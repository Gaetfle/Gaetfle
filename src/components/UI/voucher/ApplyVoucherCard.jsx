import React from "react";
import "../../../styles/apply-voucher-card.css";
import { useState, useEffect } from "react";
const VoucherCard = (props) => {
    const [textSave, setTextSave] = useState("SAVE")
    const [disableSave, setDisableSave] = useState(false)
    function setButton() {
        setDisableSave(!disableSave)

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


        <div style={{ backgroundColor: "#ebc7af" }} class="coupon rounded mb-3 d-flex justify-content-between">
            <div class="kiri p-3 mt-2">
                <div class="icon-container ">
                    <div class="icon-container_box" >
                        <img src={props.image} width="50" alt="localhost:3000/" class="" />
                    </div>
                </div>
            </div>
            <div class="tengah pt-2 d-flex w-100 justify-content-start mt-2">
                <div>
                    <h3 class="mb-1 " style={{ fontSize: 16, fontWeight: "bold" }}>{props.title} </h3>
                    <p class=" mb-2 " style={{ fontSize: 14, }}>{props.desc}</p>
                    <p class="text-muted   " style={{ fontSize: 12, }}>{props.date}</p>
                </div>

            </div>

            <div className="kanan ">
                <div className="info  align-items-center ">
                    <div className="w-64 p-3 mt-2">
                    <label className="btn__container">
                        <input type="radio" checked="checked" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
                    </div>
                    <div class="w-64 mt-4">
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

export default VoucherCard;