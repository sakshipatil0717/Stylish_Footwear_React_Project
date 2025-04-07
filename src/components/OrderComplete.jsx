
import React from 'react'

function OrderComplete() {
    return (
        <>
            {/* <h1>OrderComplete</h1> */}
            
		<div class="colorlib-product p-5">
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
							<div class="process text-center active">
								<p><span>03</span></p>
								<h3>Order Complete</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-10 offset-sm-1 text-center">
						<p class="icon-addcart"><span><i class="fa-solid fa-check fa-lg"></i></span></p>
						<h2 class="mb-4">Thank you for purchasing, Your order is complete</h2>
						<p>
							<a href="/"class="btn btn-info btn-outline-info">Home</a>
							<a href="/allproducts"class="btn btn-info btn-outline-info"><i class="icon-shopping-cart"></i> Continue Shopping</a>
						</p>
					</div>
				</div>
			</div>
		</div>



        </>
    )
}

export default OrderComplete