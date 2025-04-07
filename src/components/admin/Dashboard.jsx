
import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      {/* <h1>Dashboard Component</h1> */}


      <div class="row g-3 mt-3 mb-5">
        {/* <!-- Users Card --> */}
        <div class="col-md-4 d-flex">
          <div class="card text-center bg-light bg-opacity-50 shadow w-100 h-100" style={{ borderRadius: '2rem' }}>
            <div class="card-body">
              <div class="mb-3">
                {/* <i class="bi bi-people-fill text-dark display-4"></i> */}
                {/* <i class="fa-solid fa-users fa-xl"></i> */}
                <img src={require("../../assest/images/group.png")} alt="" style={{ height: '150px', width: '200px' }} />
              </div>
              <hr />
                <a href="/admin/user"><button class="btn btn-outline-info">Users</button></a>
            </div>
          </div>
        </div>

        {/* <!-- Products Card --> */}
        <div class="col-md-4 d-flex">
          <div class="card text-center bg-light bg-opacity-50 shadow w-100 h-100" style={{ borderRadius: '2rem' }}>
            <div class="card-body">
              <div class="mb-3">
                <i class="bi bi-bag-fill text-dark display-4"></i>
                <img src={require("../../assest/images/shopping-bag (2).png")} alt="" style={{ height: '150px', width: '200px' }} />
              </div>
              <hr />
              <a href="/admin/products"><button class="btn btn-outline-info">Products</button></a>
            </div>
          </div>
        </div>

        {/* <!-- Orders Card --> */}
        <div class="col-md-4 d-flex">
          <div class="card text-center bg-light bg-opacity-50 shadow w-100 h-100" style={{ borderRadius: '2rem' }}>
            <div class="card-body">
              <div class="mb-3">
                <i class="bi bi-shield-fill-check text-dark display-4"></i>
                <img src={require("../../assest/images/order.jpg")} alt="" style={{ height: '150px', width: '200px' }} />
              </div>
              <hr />
              <a href="/admin/order"><button class="btn btn-outline-info">Orders</button></a>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Dashboard;