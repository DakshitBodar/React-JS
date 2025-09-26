import './menu.css'
import { FaStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";


function Ourmenu() {
    let data = [{
        img: "item-1.jpg",
        title: "Shrimp foods",
        price: "$35.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    },
    {
        img: "item-2.jpg",
        title: "French mayos",
        price: "$65.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    },
    {
        img: "item-3.jpg",
        title: "Cheese pizza",
        price: "$45.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    },
    {
        img: "item-4.jpg",
        title: "Russian rolls",
        price: "$25.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    },
    {
        img: "item-5.jpg",
        title: "Seafood burger",
        price: "$75.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    },
    {
        img: "item-6.jpg",
        title: "Sandwich soup",
        price: "$55.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    }
    ]
    return (
        <>



            {/* Our Menu start*/}
            <section className='ourmenu'>
                <div className="container">
                    <div className="row">
                        <div className="col-12  text-center d-flex justify-content-center mb-4">
                            <ul className='our-list breadcrumb'>
                                <li className='rounded-5'>
                                    ALL
                                </li>
                                <li>
                                    SLIDES
                                </li>
                                <li>
                                    PIZZAS
                                </li>
                                <li>
                                    OFFERS
                                </li>
                                <li>
                                    PASTA
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="row ">
                            {
                                data.map((v, i) => {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={i}>
                                            <div className="box ms-2 mt-5">
                                                <div className="menu-box">
                                                    <img src={v.img} alt="" className='mb-3' />

                                                    <h3 className='mb-4'>{v.title}<span className='float-end text-danger'>{v.price}</span> </h3>
                                                    <ul className='breadcrumb text-warning mb-3'>
                                                        <FaStar /> &nbsp;
                                                        <FaStar /> &nbsp;
                                                        <FaStar /> &nbsp;
                                                        <FaStar /> &nbsp;
                                                        <FaStar />
                                                    </ul>

                                                    <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                                    <button className='rounded-5 py-2 px-4 bg-warning border-0'> <span className='me-2
                                        '><BsCart /></span>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }




                        </div>
                    </div>
                </div>
            </section>
            {/* Our Menu end*/}
        </>
    )
}
export default Ourmenu;