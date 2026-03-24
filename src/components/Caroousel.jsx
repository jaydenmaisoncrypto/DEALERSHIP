import React from 'react'

const Caroousel = () => {
  return (
    <section className='row'>
        <div className='col-md-12'>
            <nav className='navbar navbar-expand-md navbar-light bg-light'>
                <a href="#" className='navbar-brand'>
                    <b>Sadera Car Dealership</b>
                </a>
                {/* Collapse button */}
                <button className='navbar-toggler' data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarcollapse'>
                    <div className='navbar-nav'>
                       <link rel="stylesheet" href="" />
                    </div>
                </div>
            </nav>
        </div>
    <section className='row'>
        <div className='col-md-12'>
            {/* The carousel starts here */}
            <div className='carousel slide' id='mycarousel' data-be-ride='carousel'>
                {/* image wrapper */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src="" alt="" className='d-block w-100'/>
                    </div>
                     <div className='carousel-item'>
                        <img src="images/auris.jpg" alt="" className='d-block w-100'/>
                    </div>
                     <div className='carousel-item '>
                        <img src="images/crown.jpg" alt="" className='d-block w-100'/>
                    </div>
                </div>
                {/* controllers */}
                <div>
                    <a href="#mycarousel" className='carousel-control-prev' data-bs-slide="prev">
                        <span className='carousel-control-prev-icon bg-danger'></span>
                    </a>
                    <a href="#mycarousel" className='carousel-control-next' data-bs-slide="next">
                        <span className='carousel-control-next-icon bg-danger'></span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    </section>
  )
}

export default Caroousel