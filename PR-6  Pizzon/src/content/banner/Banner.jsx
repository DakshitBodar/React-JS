import './Banner.css';

function Banner (){
    return(
        <>
           {/* Banner start */}
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                            <div className='banner-content'>
                                <h2>Our Menu</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 align justify-content-center d-flex  d-lg-none d-xl-none d-xxl-neno">
                            <ul className='breadcrumb'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    Our Menu
                                </li>
                            </ul>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 align justify-content-end  d-xs-flex d-lg-flex  d-none d-xxl-flex">
                            <ul className='breadcrumb'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    Our Menu
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="banner-img">
                    <div className='jamun-img d-none d-xl-flex  '>
                        <img src="black-jamun.png" alt="" />
                    </div>
                    <div className='onion-img d-none d-lg-block d-md-flex'>
                        <img src="onion.png" alt="" />
                    </div>
                    <div className='tamatop-img d-none d-lg-block d-md-flex'>
                        <img src="tamato.png" alt="" />
                    </div>
                    <div className='leaf-img d-none d-lg-block d-md-flex'>
                        <img src="banner-leaf.png" alt="" />
                    </div>
                </div>
            </section>
            {/* Banner end */} 
        </>
    )
}

export default Banner;