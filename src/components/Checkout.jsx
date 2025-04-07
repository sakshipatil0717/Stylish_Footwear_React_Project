import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Checkout() {

	const [terms, setTerms] = useState(false)

	console.log(terms);
	const navigate = useNavigate();
	const finalAmount = useSelector((state) => state.cart.finalAmount);
	const cartProducts = useSelector((state) => state.cart.products);
	// console.log(cartProducts);const [terms, setTerms] = useState(false)

	const [data, setData] = useState({
		stateCountry: "",
		fname: "",
		lname: "",
		address: "",
		towncity: "",
		state: "",
		landmark: "",
		zipcode: "",
		email: "",
		mobile: "",
		orders: cartProducts,
        subTotal: finalAmount
	})

	function handleChange(e) {
		setData({ ...data, [e.target.id]: e.target.value })
		console.log(data);
	};



	{/* --------- validation ---------*/ }

	function handleSubmit() {

		if (data.stateCountry.trim() === "" || data.fname.trim() === "" || data.lname.trim() === "" || data.address.trim() === "" ||
			data.towncity.trim() === "" || data.state.trim() === "" || data.landmark.trim() === "" ||
			data.zipcode.trim() === "" || data.email.trim() === "" || data.mobile.trim() === "") {

			Swal.fire({
				icon: "warning",
				text: "All Fields are Mandatory !"
			});

		} else {

			axios.post("https://6777ab0680a79bf919027848.mockapi.io/Orders", data)
				.then((res) => {
					console.log(res.data);
					handlePayment();
				})
		}
	};



	{/* --------- Razropay ---------*/ }

	function handlePayment() {

		// alert("Proceed to Payment")
		if (terms) {
			var options = {
				"key": "rzp_test_4yosHYDduPYmKN", // Enter the Key ID generated from the Dashboard
				"amount": (finalAmount + 100) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
				"currency": "INR",
				"name": "Cool Footwear", //your business name
				"description": "Test Transaction",
				"image": "http://localhost:3001/static/media/brand.1356b354e46d75d0c876.png",
				"order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
				"callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
				"handler": function (response) {
					console.log(response);
					if (response.razorpay_payment_id) {
						// alert("Payment Successful")
						// navigate("/ordercomplete")
						window.location.href = '/ordercomplete';
					} else {
						alert("Payment Failed")
					}
				},
				"prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
					"name": "Gaurav Kumar", //your customer's name
					"email": "gaurav.kumar@example.com",
					"contact": "9000090000" //Provide the customer's phone number for better conversion rates 
				},
				"notes": {
					"address": "Razorpay Corporate Office"
				},
				"theme": {
					"color": "#3399cc"
				}
			};
			var rzp1 = new window.Razorpay(options);
			rzp1.open();
		} else {
			// alert("Accept Terms and Condition !")
			Swal.fire({
				icon: "warning",
				text: "Accept Terms and Condition !"
			});
		}
	};

	return (
		<>
			{/* <h1> Checkout</h1> */}
			<div class="colorlib-product p-4">
				<div class="container">
					<div class="row row-pb-lg">
						<div class="col-sm-10 offset-md-1">
							<div class="process-wrap">
								<div class="process text-center active">
									<p><span>01</span></p>
									<h3>Shopping Cart</h3>
								</div>
								<div class="process text-center active">
									<p><span>02</span></p>
									<h3>Checkout</h3>
								</div>
								<div class="process text-center">
									<p><span>03</span></p>
									<h3>Order Complete</h3>
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-8">
							<form method="post" class="colorlib-form">
								<h2>Billing Details</h2>
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label for="country">Select State</label>
											<div class="form-field">
												<i class="icon icon-arrow-down3"></i>
												<select onChange={handleChange} name="people" id="stateCountry" class="form-control">
													<option >Select state</option>
													<option value="Maharashtra">Maharashtra</option>
													<option value="Goa">Goa</option>
													<option value="kerala">kerala</option>
													<option value="karnataka">karnataka</option>
													<option value="Gujarat">Gujarat</option>
												</select>
											</div>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<label for="fname">First Name</label>
											<input onChange={handleChange} type="text" id="fname" class="form-control" placeholder="Your firstname" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="lname">Last Name</label>
											<input onChange={handleChange} type="text" id="lname" class="form-control" placeholder="Your lastname" />
										</div>
									</div>

									{/* <div class="col-md-12">
										<div class="form-group">
											<label for="companyname">Company Name</label>
											<input onChange={handleChange} type="text" id="companyname" class="form-control" placeholder="Company Name" />
										</div>
									</div> */}

									<div class="col-md-12">
										<div class="form-group">
											<label for="fname">Address</label>
											<input onChange={handleChange} type="text" id="address" class="form-control" placeholder="Enter Your Address" />
										</div>
										{/* <div class="form-group">
											<input onChange={handleChange} type="text" id="address2" class="form-control" placeholder="Second Address" />
										</div> */}
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<label for="companyname">Town/City</label>
											<input onChange={handleChange} type="text" id="towncity" class="form-control" placeholder="Town or City" />
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<label for="stateprovince">State</label>
											<input onChange={handleChange} type="text" id="state" class="form-control" placeholder="State Province" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="stateprovince">Landmark</label>
											<input onChange={handleChange} type="text" id="landmark" class="form-control" placeholder="Landmark" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="lname">Zip/Postal Code</label>
											<input onChange={handleChange} type="text" id="zipcode" class="form-control" placeholder="Zip / Postal" />
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<label for="email">E-mail Address</label>
											<input onChange={handleChange} type="text" id="email" class="form-control" placeholder="State Province" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="Phone">Phone Number</label>
											<input onChange={handleChange} type="text" id="mobile" class="form-control" placeholder="" />
										</div>
									</div>

									<div class="col-md-12">
										<div class="form-group">
											<div class="radio">
												{/* <label><input type="radio" name="optradio" /> Create an Account? </label>
												<label><input type="radio" name="optradio" /> Ship to different address</label> */}
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>

						<div class="col-lg-4">
							<div class="row">
								<div class="col-md-12">
									<div class="cart-detail">
										<h2>Cart Total</h2>
										<ul>
											<li>
												<span>Subtotal</span> <span>{finalAmount}.00/-</span>

												{/* {
													cartProducts.map((product) => {
														return (
															<li><span>{product.quantity}  x  {product.title}</span> <span>{product.price}/-</span></li>
														)
													})
												} */}

												{/* <ul>
												<li><span>1 x Product Name</span> <span>$99.00</span></li>
												<li><span>1 x Product Name</span> <span>$78.00</span></li>
											</ul> */}
											</li>
											<li><span>Shipping</span> <span>100.00/-</span></li>
											<li><span><h6 class="fw-bold">Order Total</h6></span> <span><h6 class="fw-bold">{finalAmount + 100.00}.00/-</h6></span></li>
										</ul>
									</div>
								</div>

								<div class="w-100"></div>

								<div class="col-md-12">
									<div class="cart-detail">
										<h2>Payment Method</h2>
										<div class="form-group">
											<div class="col-md-12">
												<div class="radio">
													<label><input type="radio" name="optradio" /> Direct Bank Tranfer</label>
												</div>
											</div>
										</div>
										<div class="form-group">
											<div class="col-md-12">
												<div class="radio">
													<label><input type="radio" name="optradio" /> Check Payment</label>
												</div>
											</div>
										</div>
										<div class="form-group">
											<div class="col-md-12">
												<div class="radio">
													<label><input type="radio" name="optradio" /> Paypal</label>
												</div>
											</div>
										</div>
										<div class="form-group">
											<div class="col-md-12">
												<div class="checkbox">
													<label><input checked={terms}  onChange={(e) => setTerms(e.target.checked)} type="checkbox" value="" /> I have read and accept the terms and conditions</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 text-center">
									<p><button href="#" onClick={handleSubmit} class="btn btn-info">Place an order</button></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
};

export default Checkout