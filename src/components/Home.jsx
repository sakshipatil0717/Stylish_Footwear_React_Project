

import React from 'react'

function Home() {
  return (
    <>
      {/* <h1>Home</h1> */}

      {/* --------carousel--------- */}
      <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-carousel-init>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require('../assest/images/carousel1.jpg')} class="d-block w-100" style={{ height: '550px' }} alt="Wild Landscape" />
            {/* <p><a href="#" class="btn btn-primary">Shop Collection</a></p> */}
          </div>
          <div class="carousel-item">
            <img src={require('../assest/images/carousel22.jpg')} class="d-block w-100" style={{ height: '550px' }} alt="Camera" />
          </div>
          <div class="carousel-item">
            <img src={require('../assest/images/carousel3.jpg')} class="d-block w-100" style={{ height: '550px' }} alt="Exotic Fruits" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div><br />

      {/* --------card category--------- */}
      <div className="container">
        <h4 class="text-center mt-4"><strong>SHOP BY CATEGORIES</strong></h4>
        <div class="container py-4">
          <div class="row g-4 text-center">
            <div class="col-md-4">
              <div class="card text-center border-0 shadow-lg overflow-hidden rounded-5">
                <img src={require("../assest/images/card1.jpg")} style={{ height: '250px' }} class="card-img-top img-fluid" alt="Man Clothing" />
                <div class="card-body text-dark">
                  <h4 class="fw-bold">MEN FOOTWEAR</h4>
                  <a href="/allproducts" class="btn btn-outline-info">SHOP NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center border-0 shadow-lg overflow-hidden rounded-5">
                <img src={require("../assest/images/card2.jpg")} style={{ height: '250px' }} class="card-img-top img-fluid" alt="Woman Clothing" />
                <div class="card-body text-dark">
                  <h4 class="fw-bold">WOMAN FOOTWEAR</h4>
                  <a href="/allproducts" class="btn btn-outline-info">SHOP NOW</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center border-0 shadow-lg overflow-hidden rounded-5">
                <img src={require("../assest/images/card3.jpg")} style={{ height: '250px' }} class="card-img-top img-fluid" alt="Accessories" />
                <div class="card-body text-dark">
                  <h4 class="fw-bold">KID'S FOOTWEAR</h4>
                  <a href="/allproducts" class="btn btn-outline-info">SHOP NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <br /><br /><br />


      {/* --------Blackfriday sale--------- */}
      <div class="bg-light text-center py-3 shadow">
        <h2 class="text-danger fw-bold">Exclusive Black Friday Steals – Up to 50% OFF!</h2>
      </div>
      <br /><br />
      <div className='bg-light'>
        <div className="container">
          <div class="row">
            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 mt-4">
              <img src={require('../assest/images/simg1.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water horizontal" />

              <img src={require('../assest/images/bimg1.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape vertical" style={{ height: '250px', width: '300px' }} />
            </div>

            <div class="col-lg-3 mb-4 mb-lg-0 mt-4">
              <img src={require('../assest/images/bimg2.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape vertical" style={{ height: '250px', width: '300px' }} />

              <img src={require('../assest/images/simg2.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water horizontal" style={{ height: '170px' }} />
            </div>

            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 mt-4">
              <img src={require('../assest/images/simg3.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water horizontal vertical" />

              <img src={require('../assest/images/bimg3.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" style={{ height: '230px', width: '300px' }} />
            </div>

            <div class="col-lg-3 mb-4 mb-lg-0 mt-4">

              <img src={require('../assest/images/blacksale.jpg')} class="img-fluid rounded" alt="Black Friday Sale" style={{ height: '440px', width: '550px' }} />
              <a href="/allproducts">
                <button class="btn btn-danger position-absolute start-50 translate-middle-x btn-sm" style={{ bottom: '24%' }}>
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div><br /><br />


    <div class="container text-center my-5 position-relative">
        {/* <!-- Border Background --> */}
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-info opacity-20 rounded-pill"></div>

        {/* <!-- Main Content --> */}
        <div class="position-relative p-5 bg-light bg-gradient border border-0 rounded-5 shadow-lg">
            <h2 class="fw-bold text-uppercase text-info">Ready to Elevate Your Style?</h2>
            <p class="fs-5 text-muted">Shop the latest trends in comfort & fashion footwear.</p>
            <a href="/allproducts" class="btn btn-outline-info btn-sm fw-bold px-4 py-2">Shop Now</a>
        </div>
    </div>

    </>
  )
}

export default Home