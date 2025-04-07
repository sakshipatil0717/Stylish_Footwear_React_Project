
import React from 'react'

function Contact() {


  return (
    <div>
      {/* <h1>Contact</h1> */}

      <div class="container">
        <div class="row justify-content-md-center mt-4">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h5 class="mb-4 display-6 text-center">Contact Information</h5>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-2 p-2 bg-light text-dark rounded text-center d-flex">
          <div class="col-lg-3">
            <i class="fa-solid fa-location-dot m-2"></i>
            <span>
              291 South 21th Street,<br/>
                Suite 721 India
            </span>
          </div>

          <div class="col-lg-3">
            <i class="fa-solid fa-phone m-2"></i>
            <span> +91 99783 45680</span>
          </div>

          <div class="col-lg-3">
            <i class="fa-solid fa-envelope m-2"></i>
            <span>stylishfootwear@gmail.com</span>
          </div>

          <div class="col-lg-3">
            <i class="fa-solid fa-globe m-2"></i>
            <span>stylishfootwear.com</span>
          </div>
        </div>
      </div>


      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <div class="row justify-content-xl-center">
              <div class="col-12 col-xl-11">
                <div class="bg-light border rounded shadow-lg overflow-hidden">
                  <form action="#!">
                    <div class="row gy-4 p-4 p-xl-5">
                      <div class="col-12">
                        <label for="fullname" class="form-label">Full Name<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="fullname" name="fullname" required />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="email" class="form-label">Email<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <span class="input-group-text">
                            <i class="fa-solid fa-envelope"></i>
                          </span>
                          <input type="email" class="form-control" id="email" name="email" required />
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="phone" class="form-label">Phone Number</label>
                        <div class="input-group">
                          <span class="input-group-text">
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          <input type="tel" class="form-control" id="phone" name="phone" />
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="subject" class="form-label">Subject <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="subject" name="subject" required />
                      </div>
                      <div class="col-12">
                        <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                        <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button class="btn btn-info btn-sm" type="submit">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>


          {/* -----iframe---- */}
          <div className="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19433.59381411564!2d74.23449978934676!3d16.701255171469228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1738655254123!5m2!1sen!2sin" width="500" height="550" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          </div>
        </div>
      </div>

    </div>


  )
}

export default Contact;