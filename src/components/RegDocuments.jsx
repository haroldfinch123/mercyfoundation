import React from 'react'

function RegDocuments() {
    return (
        <main>
            {/*? Hero Start */}
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 pt-20 text-center">
                                    <h2>Registration Documents Of Mercy Charitable and Welfare Society</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/*? Blog Area Start */}
            <section className="blog_area single-post-area section-padding">
                <div className="container ">
                    <div className="row justify-content-center">
                        {/* <embed src="assets/mercy_documents/DOCUMENTS.pdf" type="application/pdf"   height="800px" width="100%"> */}
                        {/* <div class="col-md-2"></div> */}
                        <div className="col-12 col-md-10">
                            <iframe src="https://drive.google.com/file/d/1OkgVFx5GDqXF6LqKtLk0LMNk-z6xFB7P/preview" style={{ width: '100%', height: 800, border: 'none' }} allowFullScreen>
                            </iframe>
                        </div>
                        {/* <div class="col-md-2"></div> */}
                    </div>
                </div>
            </section>
            {/* Blog Area End */}
        </main>

    )
}

export default RegDocuments