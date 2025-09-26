import './Strength.css'

function Strength() {
    let data = [
        {
            icon: "all-kinds-foods.png",
            title: "All kinds of Foods",
            desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
        },
        {
            icon: "fresh-foods.png",
            title: "Fresh Foods",
            desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
        },
        {
            icon: "best-taste.png",
            title: "Best Taste",
            desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
        },
        {
            icon: "on-time-delivery.png",
            title: "On Time Delivery",
            desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry."
        }

    ]
    return (
        <>
            <section className='kind'>
                <div className="kind-img d-none d-xs-none d-md-flex">
                    <img src="strength.png" alt="" />
                </div>
                <div className="container">
                    <div className="col-12">
                        <h4 className='kind-title text-danger '>Our Strength</h4>
                        <h1 className='mb-5'>Why We Are The Best?</h1>

                    </div>
                    <div className="row">
                        {
                            data.map((v, i) => {
                                return (
                                    <div className="col-12 col-md-6 col-xxl-3">
                                        <div className='kind-box'>
                                            <div className="kind-icon mb-4 d-block">
                                                <img src={v.icon} alt="" />
                                            </div>
                                            <div className="kind-content">
                                                <h4 className='mb-2'>{v.title}</h4>
                                                <p style={{ fontSize: "18px" }}>{v.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
            </section>
        </>
    )
}
export default Strength;