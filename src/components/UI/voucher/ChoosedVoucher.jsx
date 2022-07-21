import React from "react";
import "../../../styles/choose-voucher.css"
import ChoosedVoucherItem from "./ChoosedVoucherItem";

const ChoosedVoucherCard = (props) => {

    return (
        <div className="voucher__item">
            <ChoosedVoucherItem id={props.id} title={props.title} image={props.image} desc={props.desc} date={props.date} />
        </div>
    );
};

export default ChoosedVoucherCard;
