import React from 'react'
import "./blog.css"

const Blog = () => {
    return (
        <>
            {/* blog section start  */}

            <section className='blog-section'>
                <div className="container">
                    <div className="row">
                        <div className="head">
                            <h2>From Our Blog</h2>
                            <div className="btn">
                                <a href="#">More Products <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="main-box">
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../img/1.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>by <span>John Doe </span> - 03.05.2021</h3>
                                        <h2>Aliquam tincidunt mauris
                                            eurisus</h2>

                                        <div className="btn">
                                            <a href="#">read more <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../img/1.1.2.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>by <span>John Doe </span> - 03.05.2021</h3>
                                        <h2>Cras ornare tristique elit</h2>

                                        <div className="btn">
                                            <a href="#">read more <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../img/1.1.3.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>by <span>John Doe </span> - 03.05.2021</h3>
                                        <h2>Vivamus vestibulum ntulla necante</h2>

                                        <div className="btn">
                                            <a href="#">read more <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../img/1.1.4.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>by <span>John Doe </span> - 03.05.2021</h3>
                                        <h2>Fusce lacinia arcuet nulla</h2>

                                        <div className="btn">
                                            <a href="#">read more <i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* blog section end */}
        </>
    )
}

export default Blog