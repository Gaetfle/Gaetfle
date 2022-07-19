import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useSelector, useDispatch} from "react-redux";
import { paymentUiActions } from "../../../store/payment/paymentUiSlice";
import "../../../styles/payment-info.css";
import { paymentInformationActions } from "../../../store/paymentInformation/paymentInformationSlice";
import { useState } from "react";
import PaymentImg from '../../../assets/images/payment.png';
const bank = [
  {label: 'BIDV', value: 'bidv'},
  {label: 'Vietcombank', value: 'vcb'},
  {label: 'TPBank', value: 'tpb'},
  {label: 'VPBank', value: 'vpb'},
  {label: 'Sacombank', value: 'scb'},
  {label: 'Argibank', value: 'agb'},
  {label: 'Techcombank', value: 'tcb'},
  {label: 'Thanh toán trực tiếp', value: 'tttt'}
];

const PaymentInfo = () => {
  // const [inputValue, setInputValue] = useState('');
  const currentMethod = useSelector((state) => state.payment.method);
  const currentCardNumber = useSelector((state) => state.payment.cardNumber);
  const currentCardHolder = useSelector((state) => state.payment.cardHolder);
  const [method, setMethod] = useState(currentMethod)
  const [cardNumber, setCardNumber] = useState(currentCardNumber)
  const [cardHolder, setCardHolder] = useState(currentCardHolder)

  const dispatch = useDispatch();
  const togglePayment= () => {
    dispatch(paymentUiActions.toggle());
    dispatch(paymentInformationActions.setMethod(method));
    dispatch(paymentInformationActions.setCardNumber(cardNumber));
    dispatch(paymentInformationActions.setCardHolder(cardHolder));
  };

  const getMethod = (event) => {
    const newMethod = event.target.value;
    setMethod(newMethod);
  };
  const getCardNumber = (event) => {
    const newCardNumber = event.target.value;
    setCardNumber(newCardNumber);
  };
  const getCardHolder = (event) => {
    const newCardHolder = event.target.value;
    setCardHolder(newCardHolder);
  }

  return (
    <div className="payment__container">
      <div className="payment-info">
      < div className="payment__img">
        <img src={PaymentImg} alt="payment-img" />
          <div className="payment-info__title">
            <h3>Payment Infor</h3>
          </div>
      </div>
        <div className="payment-info__container">
          <div className="payment__close" style={{cursor: "pointer"}} onClick={togglePayment}>
            <AiFillCloseCircle/> 
          </div>
          
          <div className="payment-info__content">
            <div className="bank-info">
              <h6>Payment method:</h6>
              <select id="bank" onChange={getMethod} defaultValue={currentMethod}>
                {bank.map(item => (
                  <option>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="card-number">
              <h6>Card number:</h6>
              <input type="text" placeholder='Enter card number' onChange={getCardNumber} defaultValue={currentCardNumber}/>
            </div>

            <div className="card-number">
              <h6>Card holder:</h6>
              <input type="text" placeholder='Enter card holder'onChange={getCardHolder} defaultValue={currentCardHolder}/>
            </div>

            <button onClick={togglePayment}>OK</button>    
          </div>
        </div>            
      </div>
    </div>
  );
};

export default PaymentInfo;