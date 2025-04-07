import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Adminpage() {
    const navigate = useNavigate();
    function logout(e){
        e.preventDefault(); 
        Swal.fire({
            title: "Logged Out",
            text: "You have logged out!",
            icon: "success",
            confirmButtonText: "OK"
        }).then(() => {
            localStorage.clear();
            navigate("/");
        });
    }
    return (
        <>
            {/* <h1>Adminpage</h1> */}

            {/* <!-- Sidebar --> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 p-0">
                        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                            <div class="position-sticky">
                                <div class="list-group list-group-flush border">
                                    <Link to={'/admin'}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                            <i class="fas fa-tachometer-alt fa-xl fa-fw me-3"></i><span>Main dashboard</span>
                                        </a>
                                    </Link>

                                    <Link to={"/admin/products"}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-brands fa-product-hunt fa-xl fa-fw me-3"></i><span>Products</span>
                                        </a>
                                    </Link>

                                    <Link to={"/admin/addproduct"}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-solid fa-cart-plus fa-xl fa-fw me-3"></i><span>Add Product</span>
                                        </a>
                                    </Link>

                                    <Link to={'/admin/order'}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-solid fa-bag-shopping fa-xl fa-fw me-3"></i><span>Orders</span>
                                        </a>
                                    </Link>

                                    <Link to={'/admin/user'}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                        <i class="fa-solid fa-users fa-xl fa-fw me-3"></i><span>Users</span>
                                        </a>
                                    </Link>

                                    <button onClick={(e)=> logout(e) } className='btn btn-info m-4'><i class="fas fa-lock fa-fw me-2"></i>Log out</button>
                                </div>
                            </div>
                        </nav>
                    </div >


                    <div className="col-lg-9">
                        <Outlet />
                    </div>
                </div >
            </div>
        </>
    )
}

export default Adminpage