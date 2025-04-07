import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
	const count = useSelector((state) => state.cart.products);

	return (
		<>
			{/* <h1>Header</h1>  */}

			<nav className=" colorlib-nav navbar navbar-expand-lg navbar-light bg-light m-0" role="navigation">
				<div className="container">
					{/* Logo Section */}
					<Link to="/" className="navbar-brand d-flex align-items-center">
						<img
							style={{ width: '100px',height:'100px'}}
							src={require('../assest/images/stylish logo1.png')}
							alt="Logo" />
						{/* <div id="colorlib-logo" className="ms-2 mt-1">
							<span>FOOTWEAR</span>
						</div> */}
					</Link>

					{/* Navbar Toggler for Mobile */}
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* Navbar Links */}
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/allproducts" className="nav-link">
									All Products
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/adminlogin" className="nav-link">
									Admin Login
								</Link>
							</li>
						</ul>

						{/* Search Form */}
						<div className="input-group ms-lg-4 mt-2 mt-lg-0" style={{ maxWidth: '250px' }}>
							<div className="position-relative w-100">
								<input
									type="search"
									className="form-control rounded-pill ps-4 pe-5 shadow"
									placeholder="Search"
									aria-label="Search"
									style={{ height: '40px', borderRadius: '50px' }}
								/>
								<button
									className="btn btn-info text-white position-absolute top-50 end-0 translate-middle-y me-2 border-0 d-flex align-items-center justify-content-center"
									type="submit"
									style={{ borderRadius: '50%', width: '34px', height: '34px' }}>
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</div>
						</div>

						{/* Cart */}
						<Link to="/admin/cart" className="btn btn-outline-info ms-4">
							<i className="fa-solid fa-cart-shopping"></i> Cart
							<span className="fw-bold badge bg-info text-white ms-3 px-2 py-1">{count.length}</span>
						</Link>
					</div>
				</div>
			</nav>
			{/* #50abc8  */}
			{/* #8FCBC0 */}
			{/* Sale Section */}
			<div className="text-dark text-center py-2" style={{backgroundColor:'#4ca1bd '}}>
				<h4>Our biggest sale yet: 50% off all summer shoes!</h4>
			</div>
		</>
	)
}

export default Header