import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Order() {

    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    // const SHIPPING_CHARGE = 100;


    useEffect(() => {
        axios.get("https://6777ab0680a79bf919027848.mockapi.io/Orders")
            .then((res) => {
                // console.log(res.data);
                setOrders(res.data)
            })
    }, []);


    const handleView = (order) => {
        setSelectedOrder(order);
    };

    const handlePrint = () => {
        const printContent = document.getElementById("invoice").innerHTML;
        const originalContent = document.body.innerHTML;

        // Replace the body content with the invoice content
        document.body.innerHTML = printContent;

        // Trigger the print
        window.print();

        // Restore the original content
        document.body.innerHTML = originalContent;

        // Re-apply event listeners if needed (React components may need a full reload)
        window.location.reload();
    };



    return (
        <>
            {/* <h1>Order</h1> */}

            <div class="container my-5">
                <div class="table-responsive shadow-lg rounded-3">
                    <table class="table align-middle">
                        <thead class="table-light text-center">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                orders.map((order, index) => (
                                    <tr key={order.id}>
                                        <td>{index + 1}</td>
                                        <td>{order.fname}</td>
                                        <td>{order.email}</td>
                                        <td>{order.mobile}</td>
                                        <td><i class="fa-solid fa-indian-rupee-sign"></i> {order.subTotal + 100}</td>
                                        <td>
                                            <button onClick={() => handleView(order)} type="button" class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>



            {/* Modal View */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered" style={{ maxWidth: "750px" }}  >
                    <div class="modal-content rounded-3 shadow-lg" >
                        <div class="modal-header">
                            {/* <h5 class="modal-title" id="exampleModalLabel">Selected Order</h5> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body m-4">
                            {selectedOrder && (
                                <div className="container border shadow bg-light p-5 rounded-3" id="invoice">
                                    <h3 className="text-center">Invoice</h3>
                                    <p>
                                        <strong className='fw-bold'>Name:</strong> {selectedOrder.fname} {selectedOrder.lname}
                                    </p>
                                    <p>
                                        <strong className='fw-bold'>Email:</strong> {selectedOrder.email}
                                    </p>
                                    <p>
                                        <strong className='fw-bold'>Mobile:</strong> {selectedOrder.mobile}
                                    </p>
                                    <p>
                                        <strong className='fw-bold'>Address:</strong> {selectedOrder.address}, {selectedOrder.towncity},{" "}
                                        {selectedOrder.state} - {selectedOrder.zipcode}, {selectedOrder.stateCountry}
                                    </p>
                                    <h5>Order Details</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedOrder.orders.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className='rounded-circle'
                                                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                                        />
                                                        {item.title}
                                                    </td>
                                                    <td><i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td><i class="fa-solid fa-indian-rupee-sign"></i>{item.price * item.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h6 className="text-end">Shipping : <i class="fa-solid fa-indian-rupee-sign"></i> 100</h6>
                                    <h5 className="text-right fw-bold">Total : <i class="fa-solid fa-indian-rupee-sign"></i>{selectedOrder.subTotal + 100}</h5>
                                </div>
                            )}
                            <button className="btn btn-outline-dark mt-3 fw-bold" onClick={handlePrint}>
                                <i class="fa-solid fa-print"></i> Print Invoice
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}



export default Order;