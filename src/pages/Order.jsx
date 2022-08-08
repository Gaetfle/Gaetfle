import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';
// import OrderCard from "../components/UI/ordercard/OrderCard";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#999B84",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    fontWeight: "bold",
    paddingLeft: "70px"
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Order = () => {
    const orderItems = useSelector((state) => state.orderlist.orderlistItems);

    return (
        <Helmet title="List of Orders">
            {console.log((state) => state.orderlist.orderlistItems)}
            <section>
                <Container>
                    <Row>
                        <div className="narrow__back d-flex">
                            <span>
                                <Link to="/home">
                                    <MdArrowBack /> <span style={{marginLeft: "20px", fontSize: "20px", fontWeight: 600}}>BACK TO HOMEPAGE</span>
                                </Link>
                            </span>
                        </div>
                    </Row>
                    <Row>
                        <TableContainer component={Paper} sx={{mt: 2, boxShadow: "5px 5px #999B84"}}>
                            <Table sx={{ minWidth: 700, mt: 2, mb: 2, border: "1px solid #626546" }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Order Id</StyledTableCell>
                                    <StyledTableCell align="left">Order Date&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="left">Payment&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="left">Total&nbsp;(g)</StyledTableCell>
                                    <StyledTableCell align="left">Status&nbsp;(g)</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                { orderItems.length === 0 ?
                                (
                                    <h5 className="text-center mt-5">No item</h5>
                                ): ( orderItems.map((row) => (
                                    <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" sx={{fontWeight: "bold"}}>
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                    <StyledTableCell align="left">{row.total.toLocaleString("en-US")} VNĐ</StyledTableCell>
                                    <StyledTableCell align="left">{row.payment}</StyledTableCell>
                                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                                    </StyledTableRow>
                                )))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Row>
                </Container>
            </section>
            <section>
            </section>
        </Helmet>
    );
};

export default Order;