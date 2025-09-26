import './Feedback.css'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";


function Feedback() {
    let feed = [
        {
            img: "client-1.jpg",
            name: "Johan Doe",
            text: "“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”"
        },
        {
            img: "client-2.jpg",
            name: "Alex Saanu",
            text: "“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”"
        },
        {
            img: "client-3.jpg",
            name: "Takar Bowa",
            text: "“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”"
        },
        {
            img: "client-4.jpg",
            name: "Takar Bowa",
            text: "“Lorem Ipsum is simply dummy text of the print book. It has survived not only five centuries, but also the leap”"
        }
    ]

    return (
        <>
            <section className='feedback'>
                <div className="feedback-img d-none d-md-none d-lg-none d-xl-none d-xl-flex d-xxl-flex d-lg-block">
                    <img src="leaf.png" alt="" />
                </div>
                <div className="container">
                    <div className="col-12 d-flex justify-content-between pb-5">
                        <div className="title1">
                            <h4 className='feed-title text-danger '>Customer Feedback</h4>
                            <h2 className='mb-5 fs-1'>Client Testimonials</h2>
                        </div>
                        <span className='d-flex justify-content-end text-warning'>
                            <BsArrowLeftCircleFill /> &nbsp;
                            <BsArrowRightCircleFill />
                        </span>


                    </div>
                    <div className="feedback2">
                        <div className="row">
                            {feed.map((v, i) => {
                                return (
                                    <div className="col-12 col-md-6 col-xl-3 mb-5" key={i}>
                                        <div className="feed-box">
                                            <div className="feed-img">
                                                <img src={v.img} alt="" />
                                            </div>
                                            <div className="feed-info">
                                                <h4 className='mt-4 mb-3'>{v.name}</h4>
                                                <p className='mb-3 fs-5' style={{ color: '#777777' }}>{v.text}</p>

                                                <ul className='breadcrumb text-warning mb-3 d-flex justify-content-center'>
                                                    <FaStar /> &nbsp;
                                                    <FaStar /> &nbsp;
                                                    <FaStar /> &nbsp;
                                                    <FaStar /> &nbsp;
                                                    <FaStar />
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Feedback;