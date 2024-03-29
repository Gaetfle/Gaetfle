import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import CheckoutCartItem from "../components/UI/checkout-card/CheckoutCartItem";
import ShippingInfo from "../components/UI/shipping-info/ShippingInfor";
import PaymentInfo from "../components/UI/payment-info/PaymentInfor";
import VoucherInfo from "../components/UI/voucher-info/VoucherInfor";
import { inforUiActions } from "../store/shipping-infor/inforUiSlice";
import { paymentUiActions } from "../store/payment/paymentUiSlice";
import { voucherUiActions } from "../store/voucher/voucherUiSlice";
import ChoosedVoucherCard from "../components/UI/voucher/ChoosedVoucher";
import { orderlistActions } from "../store/order/orderSlice";
import Stepper from "../components/UI/stepper/Stepper";
// import Dialog from "../components/UI/dialog/Dialog";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Checkout = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 20000;
  const dispatch = useDispatch();
  const totalPayment = cartTotalAmount + Number(shippingCost);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const showInfo = useSelector((state) => state.inforUi.inforIsVisible);
  const toggleInfor = () => {
    dispatch(inforUiActions.toggle());
  };

  const showPayment = useSelector((state) => state.paymentUi.paymentIsVisible);
  const togglePayment = () => {
    dispatch(paymentUiActions.toggle());
  };

  const showVoucher = useSelector((state) => state.voucherUi.voucherIsVisible);
  const toggleVoucher = () => {
    dispatch(voucherUiActions.toggle());
  };

  const name = useSelector((state) => state.order.name);
  const phone = useSelector((state) => state.order.phone);
  const street = useSelector((state) => state.order.street);
  const ward = useSelector((state) => state.order.ward);
  const district = useSelector((state) => state.order.district);
  const province = useSelector((state) => state.order.province);
  const gmail = useSelector((state) => state.order.gmail);
  const voucherTitle = useSelector((state) => state.voucherUi.title);
  const voucherPrice = useSelector((state) => state.voucherUi.price);
  const method = useSelector((state) => state.payment.method);
  const cardNumber = useSelector((state) => state.payment.cardNumber);
  const current = new Date();
  const id = "GH91"
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [open, setOpen] = useState(false);
  const addToOrder = () => {
    console.log(id, "  ", date, "   ", totalPayment, "   ", method)
    dispatch(
      orderlistActions.addItem({
        id,
        date,
        total: voucherPrice ? (totalPayment - voucherPrice) : totalPayment,
        payment: method,
      })
    );
  }

  const onCloseDialog = () => {
    setOpen(false);
  }
  return (
    <Helmet title="Order">
      <section>
        <Container>
          <Row>
            <div className="narrow__back d-flex">
              <span>
                <Link to="/products">
                  <MdArrowBack />
                </Link>
              </span>
            </div>
            <div className="stepper">
              <Stepper />
            </div>
          </Row>
          <Row>
            <Col lg="8" md="6">
              <div className="product__list">
                <h5 className="mb-4">Order</h5>
                {cartItems.length === 0 ? (
                  <h5 className="text-center mt-5">No item</h5>
                ) : (
                  cartItems.map((item, index) => (
                    <CheckoutCartItem item={item} key={index} />
                  ))
                )
                }
                <div className="totalQuantity">Total Quantity: {totalQuantity}</div>
              </div>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <div className="detail__infor">
                  <span>
                    <HiLocationMarker />
                  </span>
                  <h4>Delivery Address</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{ paddingTop: "25px", borderTop: "1px solid #fff" }}>
                  {name} <span>{phone}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  {street}, {ward}, {district}, {province}
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  {gmail}
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{ color: "#999B84" }}>
                  Default
                  <span
                    style={{ color: "white", cursor: "pointer"}}
                    onClick={toggleInfor}
                  >
                    Change
                  </span>
                  {showInfo && <ShippingInfo />}
                </h6>

                <div className="detail__infor">
                  <span>
                    <MdPayment />
                  </span>
                  <h4>Payment Method</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{ paddingTop: "25px", borderTop: "1px solid #fff" }}>
                  {/* {method} */}
                  {method !== "Thanh toán trực tiếp" ? (
                    <>
                      {method} [{cardNumber}]
                    </>
                  ) : (
                    <>{method}</>
                  )}
                  <span
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={togglePayment}
                  >
                    Change
                  </span>
                  {showPayment && <PaymentInfo />}
                </h6>

                <div className="detail__infor">
                  <span>
                    <TbDiscount2 />
                  </span>
                  <h4 style={{ marginBottom: "15px" }}>Applied Vouchers</h4>
                  <div className="voucher__area">
                    {voucherTitle ? (
                      <>
                        <ChoosedVoucherCard title={voucherTitle}/>
                        <span style={{marginLeft: "320px"}}>
                          <BsFillArrowRightCircleFill style={{cursor: "pointer", marginTop: "-10px"}} onClick={toggleVoucher}/>
                        </span>
                      </>
                    ) : (
                    <span style={{marginLeft: "320px"}}>
                      <BsFillArrowRightCircleFill style={{cursor: "pointer", marginTop: "16px"}} onClick={toggleVoucher}/>
                    </span>
                    )}
                    { showVoucher && <VoucherInfo/>}
                  </div>
                </div>

                <div className="detail__infor">
                  <span>
                    <AiOutlineDollar />
                  </span>
                  <h4>Payment Details</h4>
                </div>
                <h6 className="d-flex align-items-center justify-content-between mb-3" style={{ paddingTop: "25px", borderTop: "1px solid #fff" }}>
                  Subtotal: <span>{cartTotalAmount.toLocaleString("en-US")} VNĐ</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>{shippingCost.toLocaleString("en-US")} VNĐ</span>
                </h6>
                {voucherTitle && <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Discount: <span>- {voucherPrice.toLocaleString("en-US")} VNĐ</span>
                </h6>}
                <div className="checkout__total">
                  {
                    voucherTitle ? (
                      <h5 className="d-flex align-items-center justify-content-between">
                        Total: <span>{(totalPayment - voucherPrice).toLocaleString("en-US")} VNĐ</span>
                      </h5>
                    ) : (
                      <h5 className="d-flex align-items-center justify-content-between">
                        Total: <span>{totalPayment.toLocaleString("en-US")} VNĐ</span>
                      </h5>
                    )
                  }
                </div>
                <div className="order__button">
                  <button onClick={() =>{setOpen(true);}} >
                    Order
                  </button>
                </div>
                {/* <div className="dialog__container"> */}
                  <Dialog
                    open={open}
                    onClose={onCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{zIndex: "99999"}}
                  >
                    <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description" align='center'>
                        Do you want to confirm your order?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={onCloseDialog} sx={{color: "#626546"}}>Cancel</Button>
                      <Link to="/listoforder">
                        <Button onClick={addToOrder} sx={{color: "#626546"}}>Confirm</Button>
                      </Link>
                    </DialogActions>
                  </Dialog>
                {/* </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
      </section>
    </Helmet>
  );
};

export default Checkout;
