import React from "react";
import "../../../styles/choosed-voucher.css";

const ChoosedVoucherItem = (props) => {
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
                    <p className="text-muted   " style={{ fontSize: 12, }}>{props.date}</p>
                </div>

            </div>

            <div className="kanan-container">
                <div className="info-coupon align-items-center ">
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

export default ChoosedVoucherItem;
