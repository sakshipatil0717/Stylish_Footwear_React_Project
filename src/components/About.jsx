
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* <h1>About</h1> */}

      {/* -------------banner----------- */}

      <div class="position-relative text-center text-white mt-5">
        <img src={require('../assest/images/banner2.jpg')} class="img-fluid w-100" style={{ filter: 'brightness(0.5)', height: '350px', objectFit: 'cover' }} />
        <div class="position-absolute top-50 start-50 translate-middle">
          <h1 class="fw-bold text-warning">Step into Comfort & Style</h1>
          <p class="fs-5">Quality footwear crafted for trendsetters like you.</p>
          {/* <a href="#" class="btn btn-outline-info btn-lg">Discover More</a> */}
        </div>
      </div>

      {/* -------------About us----------- */}

      <div className="py-5">
        <div className="container">
          <div class="bg-light text-center py-3 shadow mb-5">
            <h2 class="text-info fw-bold">About Us</h2>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img src={require('../assest/images/about2.jpg')} alt="About" className="img-fluid rounded shadow" />
                <a href="https://www.youtube.com/embed/uKN9h4OJFHM?si=oo3T_9z2Y-opRhWq" className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center shadow-lg text-white bg-info rounded-circle p-3 text-decoration-none" style={{ fontSize: '30px', width: "90px", height: "90px" }}>
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6 bg-light w-560 h-315" style={{ width: "540", height: "310" }}>
              <div className="border p-4 rounded shadow-lg">
                <h2 className="fw-bold text-center"> Elevate Your Style with Every Step in Comfort & Confidence</h2>
                <p className="text-muted text-justify text-center">
                  At Stylish Footwear, we believe that every step should be taken in style. Blending fashion with function, our footwear is designed for trendsetters who refuse to compromise on comfort. From sleek sneakers to statement heels, every pair is crafted with precision, quality, and an eye for the latest trends. Whether you're striding through city streets or making an entrance at an event, our shoes ensure you do it with confidence. Step into a world where luxury meets everyday wear—because your journey deserves the perfect pair.
                </p>
                <p className="text-muted text-justify text-center">
                  With a passion for innovation, we continuously push boundaries, creating footwear that feels as good as it looks. Walk with confidence, embrace elegance, and step into a world where every journey is taken in style.From trendy sneakers and elegant heels to sturdy boots and everyday essentials, we offer a diverse range of footwear for men, women, and kids.
                </p>
                <div class="d-flex justify-content-center mt-4">
                  <a href="#" class="btn btn-outline-info text-dark px-4 py-2">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* ------------our journey------------ */}

      {/* <div class="container my-5">
        <h2 class="text-center fw-bold bg-light text-info py-3 shadow mb-5">Our Journey</h2>
        <div class="row g-4 mt-4">
          <div class="col-md-4 text-center">
            <i class="fa-solid fa-shoe-prints fa-3x text-info"></i>
            <h5 class="mt-3">Founded in 2023</h5>
            <p>Started with a mission to create stylish & comfortable footwear.</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fa-solid fa-chart-line fa-3x text-info"></i>
            <h5 class="mt-3">Expansion in 2024</h5>
            <p>Grew internationally, introducing innovative designs.</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fa-solid fa-star fa-3x text-info"></i>
            <h5 class="mt-3">Today & Beyond</h5>
            <p>Committed to sustainability & premium quality.</p>
          </div>
        </div>
      </div> */}



      {/* <h1>Product services</h1> */}

      <div className="container bg-light mb-5">
        <div class="container text-center py-5">
          <h2 class="fw-bold">Our <span class="text-info">Services</span></h2>
          <p class="text-muted">Explore our wide range of high-quality products and exceptional services designed to meet your needs.</p>
          <div class="row text-center">
            <div class="col-md-4">
              <div class="card border-0 shadow-lg p-4">
                <div class="d-flex flex-column align-items-center">
                  <div class="bg-light rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                    <i class="fa-solid fa-truck fa-2xl fs-2 text-dark"></i>
                  </div>
                  <h5 class="mt-3">FAST DELIVERY</h5>
                  <p class="text-muted">Get your footwear delivered swiftly with our reliable parcel service.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card border-0 shadow-lg p-4">
                <div class="d-flex flex-column align-items-center">
                  <div class="bg-light rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                    <i class="fa-solid fa-headset fa-2xl fs-2 text-dark"></i>
                  </div>
                  <h5 class="mt-3">24/7 CUSTOMER SUPPORT</h5>
                  <p class="text-muted">Our support team is available round the clock to assist you.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card border-0 shadow-lg p-4">
                <div class="d-flex flex-column align-items-center">
                  <div class="bg-light rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                    <i class="fa-solid fa-rotate fa-2xl fs-2 text-dark"></i>
                  </div>
                  <h5 class="mt-3">EASY RETURNS</h5>
                  <p class="text-muted">Hassle-free return and exchange process for complete satisfaction.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row text-center mt-4 justify-content-center">
            <div class="col-md-4">
              <div class="card border-0 shadow-lg p-4">
                <div class="d-flex flex-column align-items-center">
                  <div class="bg-light rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                    <i class="fa-regular fa-gem fa-2xl fs-2 text-dark"></i>
                  </div>
                  <h5 class="mt-3">PREMIUM QUALITY ASSURANCE</h5>
                  <p class="text-muted">We guarantee high-quality materials and craftsmanship.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card border-0 shadow-lg p-4">
                <div class="d-flex flex-column align-items-center">
                  <div class="bg-light rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                    <i class="fa-solid fa-tag fa-2xl fs-2 text-dark"></i>
                  </div>
                  <h5 class="mt-3">EXCLUSIVE DISCOUNTS & OFFERS</h5>
                  <p class="text-muted">Get access to special discounts, seasonal sales, and rewards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




{/* -------------customer review----------- */}


<div className="container my-5">
        <div class="bg-light text-center py-3 shadow mb-5">
          <h2 class="text-info fw-bold">Customers Review</h2>
        </div>
        <div id="testimonialCarousel" className="carousel slide carousel-fade-up mt-4" data-bs-ride="carousel" data-bs-carousel-init>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <img src={require('../assest/images/blog-1.jpg')} className="rounded-circle shadow" alt="Sarah Johnson" width="80" />
              <p className="fs-5 mt-3">"The best footwear I've ever purchased! Super stylish & comfortable!"</p>
              <h6 className="text-info">- Meera Tupe</h6>
            </div>
            <div className="carousel-item text-center">
              <img src={require('../assest/images/blog-2.jpg')} className="rounded-circle shadow" alt="Michael Brown" width="80" />
              <p className="fs-5 mt-3">"Amazing quality! Fits perfectly & feels great on my feet!"</p>
              <h6 className="text-info">- Saurabh Jadhav </h6>
            </div>
            <div className="carousel-item text-center">
              <img src={require('../assest/images/blog-3.jpg')} className="rounded-circle shadow" alt="Emily Davis" width="80" />
              <p className="fs-5 mt-3">"Excellent service and super fast delivery! Highly recommended."</p>
              <h6 className="text-info">- Akshar Raut</h6>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-info"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-info"></span>
          </button>
        </div>
      </div>









    </>
  )
}

export default About