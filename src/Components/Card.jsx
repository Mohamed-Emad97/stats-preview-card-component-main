import React from 'react';
import pic from "../assets/images/image-header-desktop.jpg";

export default function Card() {
  return (
    <>
        <section id="card">
            <main className='center p-5'>
              <div className="content d-flex gap-3 rounded-3 flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse">
                <div className="cardContent p-5">
                  <h1>
                    Get <span className='purple'>insights</span> that help 
                    your business grow.
                  </h1>
                  <p>
                    Discover the benefits of data analytics and make
                    better decisions regarding revenue, customer
                    experience, and overall efficiency.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-9 text-lg-start text-md-start text-sm-center text-center">
                      <p className='fw-bolder num'>10K+</p>
                      <p className='desc'>companies</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-9 text-lg-start text-md-start text-sm-center text-center">
                      <p className='fw-bolder num'>314</p>
                      <p className='desc'>templates</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-9 text-lg-start text-md-start text-sm-center text-center">
                      <p className='fw-bolder num'>12M+</p>
                      <p className='desc'>queries</p>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <img src={pic} alt="" className="w-100 h-100" />
                </div>
              </div>
            </main>
        </section>
    </>
  )
}
