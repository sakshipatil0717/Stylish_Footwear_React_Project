import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeProductToCart, incrementQuanity, decrementQuanity, setTotalAmount, setDiscountAmount } from '../state/cartSlice';


function Cart() {


    let dispatch = useDispatch();

    let cartData = useSelector((state) => {
        return state.cart.products
    });

    // console.log(cartData);
    // function handleSubmit() {
    //     navigate("/checkout")
    // }


    // -------------------------------------------

    const [allTotal, setAllTotal] = useState(0);
    const [coupon, setCoupon] = useState(0);
    const [discount, setDiscount] = useState(0);

    let [count, setCount] = useState(1);

    let data = useSelector((state) => state.cart.products);

    // console.log(data);

    // function removeProduct(e, product) {
    // 	e.preventDefault();
    // 	dispatch(storeRemoveProduct(product.id));
    //   }


    useEffect(() => {
        let total = 0;
        data.forEach(item => {
            total += item.price * item.quantity;
        });
        setAllTotal(total);
    }, [data]);

    function handleCoupon() {
        let promoCode = coupon.match(/(\d+)/);

        if (promoCode) {
            const discountValue = parseInt(promoCode[0]);
            // console.log(typeof(discountValue));
            setDiscount(discountValue)
            // console.log(discountValue);
            dispatch(setDiscountAmount(discountValue))
        }
    };

    return (
        <>
            {/* <h1>Cart</h1>
             */}
            <div class="container my-5">
                {/* <!-- Product Details Table --> */}
                <div class="row table-responsive">
                    <div className="col-12">
                        <table class="table table-bordered text-center ">
                            <thead class="table-light">
                                <tr>
                                    <th>PRODUCT DETAILS</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                    <th>REMOVE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartData.map((eachdData) => {
                                        return (
                                            <tr>
                                                <td className='align-middle'>
                                                    <img style={{ width: "100px", height: "100px" }} src={eachdData.image} alt="" />
                                                    <h4 className='mt-2'>{eachdData.title}</h4>
                                                </td>
                                                <td className='align-middle'><h5><i class="fa-solid fa-indian-rupee-sign"></i>{eachdData.price}/-</h5></td>
                                                <td className='align-middle m-2'>
                                                    <button onClick={() => dispatch(decrementQuanity(eachdData.id))} className='btn btn-info'>-</button>
                                                    <span className='m-3'>{eachdData.quantity}</span>
                                                    <button onClick={() => dispatch(incrementQuanity(eachdData.id))} className='btn btn-info'> +</button></td>
                                                <td className='align-middle'><h5><i class="fa-solid fa-indian-rupee-sign"></i>{eachdData.price * eachdData.quantity}/-</h5></td>
                                                <td className='align-middle'>
                                                    <button onClick={() => dispatch(removeProductToCart(eachdData.id))} href="#" class="btn btn-danger">Remove</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!-- Coupon and Total Section --> */}
                <div class="row mt-5">
                    <div class="col-md-6 col-lg-6">
                        <div class="d-flex">
                            {/* <div className="col-md-8"> */}
                                <input type="text" class="form-control me-2 shadow-sm" placeholder="Your Coupon Number..." />
                            {/* </div> */}

                            <button class="btn btn-outline-info shadow-sm">Apply Coupon</button>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 ms-auto">
                        <div className="shadow-lg border-3">
                        <div class="card-body rounded">
                            <ul class="list-unstyled mb-3">
                                <li class="mb-2 d-flex justify-content-between ">
                                    <span>Subtotal:</span>
                                    <span>₹{allTotal}.00/-</span>
                                </li>
                                <li class=" mb-2 d-flex justify-content-between">
                                    <span>Delivery:</span>
                                    <span>₹100.00/-</span>
                                </li>
                                <li class=" mb-2 d-flex justify-content-between">
                                    <span>Discount:</span>
                                    <span>₹{discount}.00/-</span>
                                </li>
                            </ul>
                            <hr />
                            <div class="d-flex justify-content-between mb-3">
                                <strong class="fw-bold"><h5>Total:</h5></strong>
                                <strong class="fw-bold"><h5>₹{allTotal - discount}/-</h5></strong>
                            </div>
                            <div className='text-center'>
                                <Link to={"/checkout"}>
                                    <button onClick={() => dispatch(setTotalAmount(allTotal - discount))} class="btn btn-info w-100">Proceed to Checkout</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />


            <div className="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                        <h2>Related Products</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-lg-3 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">
                                <img src={require("../assest/images/footwear1.jpg")} style={{ height: "330px" }} class="img-fluid" />
                            </a>
                            <div class="desc">
                                <h2><a href="#">Women's Shoes</a></h2>
                                <span class="price"><i class="fa-solid fa-indian-rupee-sign"></i>1200/-</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-lg-3 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">
                                <img src={require("../assest/images/footwear2.jpg")} style={{ height: "330px" }} class="img-fluid" />
                            </a>
                            <div class="desc">
                                <h2><a href="#">Men's Formal</a></h2>
                                <span class="price"><i class="fa-solid fa-indian-rupee-sign"></i>2000/-</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-lg-3 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">
                                <img src={require("../assest/images/footwear3.jpg")} style={{ height: "330px" }} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                            </a>
                            <div class="desc">
                                <h2><a href="#">Women's Footwear</a></h2>
                                <span class="price"><i class="fa-solid fa-indian-rupee-sign"></i>1500/-</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 mb-4 text-center">
                        <div class="product-entry border">
                            <a href="#" class="prod-img">
                                <img src={require("../assest/images/footwear4.jpg")} style={{ height: "330px" }} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                            </a>
                            <div class="desc">
                                <h2><a href="#">Men's Sport Shoes</a></h2>
                                <h5 class="price"><i class="fa-solid fa-indian-rupee-sign"></i>1700/-</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart