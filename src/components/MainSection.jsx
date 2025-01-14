import React from 'react'

function MainSection() {
    return (
        <main>
            {/* slider Area Start*/}
            <div className="slider-area">
                <div className="slider-active">
                    {/* Single Slider */}
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                                    <div className="hero__caption">
                                        <h2 data-animation="fadeInUp" data-delay=".6s" style={{ fontSize: 45, lineHeight: '1.2', wordWrap: 'break-word' }} className="responsive-text">
                                            <br /><br /><br />
                                            <br />
                                            Helping financially and psychologically with treatment for patients who need such assistance.
                                        </h2>
                                        <p data-animation="fadeInUp" data-delay=".8s" style={{ fontSize: 16 }} className="responsive-text">
                                            Society is formed by individuals who wish to financially assist poor and needy patients, particularly those who cannot pay their medical bills upon discharge.
                                        </p>
                                        {/* Hero-btn */}
                                        <div className="hero__btn">
                                            <a href="donations.html" className="btn hero-btn mb-10" data-animation="fadeInLeft" data-delay=".8s">Donate</a>
                                            <a href="industries.html" className="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                                                <i className="flaticon-null" />
                                                <p> +91 73287 01298</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="single-slider slider-height d-flex align-items-center">
          <div class="container">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                      <div class="hero__caption">
                          <h2 data-animation="fadeInUp" data-delay=".6s" style="font-size: 45px;">Helping financially and psychologically with treatment  for patients who need such assistance.</h2>
                          <P data-animation="fadeInUp" data-delay=".8s" >Society is formed by individuals who wish to financially assist poor and needy patients, particularly those who cannot pay their medical bills upon discharge.</P>
                          <div class="hero__btn">
                              <a href="industries.html" class="btn hero-btn mb-10"  data-animation="fadeInLeft" data-delay=".8s">Donate</a>
                              <a href="industries.html" class="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                                  <i class="flaticon-null"></i>
                                  <p> +91 73287 01298</p>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
                    {/* Single Slider */}
                    {/* <div class="single-slider slider-height d-flex align-items-center">
          <div class="container">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                      <div class="hero__caption">
                          <h1 data-animation="fadeInUp" data-delay=".6s">Our Helping to<br> the world.</h1>
                          <P data-animation="fadeInUp" data-delay=".8s" >Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut bore et dolore magnt, sed do eiusmod.</P>
                          <div class="hero__btn">
                              <a href="industries.html" class="btn hero-btn mb-10"  data-animation="fadeInLeft" data-delay=".8s">Donate</a>
                              <a href="industries.html" class="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                                  <i class="flaticon-null"></i>
                                  <p>+12 1325 41</p>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
                </div>
            </div>
            {/* slider Area End*/}
            {/*? Services Area Start */}
            <div className="service-area section-padding30">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                            {/* Section Tittle */}
                            <div className="section-tittle text-center mb-80">
                                <span>Society Registration Documents</span>
                                <h3>Our Society obtained the following certificates from relevant Government Departments to bring it into existence.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cat text-center mb-50">
                                <div className="cat-cap">
                                    <h5><a href="#" style={{ textAlign: 'justify' }}>Certificate of Registration from the Government of Telangana,
                                        from Registrar of Societies Hyderabad, (South)
                                    </a></h5>
                                    <img src="main_page/assets/img/mercy_documents/registration_doc.jpg" width="300px" height="300px" alt="RC Doc" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cat active text-center mb-50">
                                <div className="cat-cap">
                                    <h5><a href="#" style={{ textAlign: 'justify'}}> Certificate of Registration from the Government of India, Niti Aayog, (Darpan)</a></h5>
                                    <img src="main_page/assets/img/mercy_documents/darpan_doc.jpg" width="300px" height="300px" alt="RC Doc" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cat text-center mb-50">
                                <div className="cat-cap">
                                    <h5><a href="#" style={{ textAlign: 'justify' }}>Certificate of Registration from the Government of India, Income Tax Department</a></h5>
                                    <img src="main_page/assets/img/mercy_documents/pan_doc.jpg" width="300px" height="300px" alt="RC Doc" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Area End */}
            {/*? About Law Start*/}
            <section className="about-low-area section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-caption mb-50">
                                {/* Section Tittle */}
                                <div className="section-tittle mb-35">
                                    <span>About our foundetion</span>
                                    <h3>Primarily to help financially and psychologically with treatment for patients who need such assistance.</h3>
                                </div>
                                <p />
                                <p>To assist financially, those who are economically poor and needy depending upon the demand, situation, and availability of funds for education, old people rehabilitation, child education, assisting financially on natural calamities, burial expenses, physically handicapped people, critical illness, any other assistance not specifically mentioned in the objective clause of the memorandum, shall be given on the consent of majority members.</p>
                            </div>
                            <a href="about.html" className="btn">About US</a>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* about-img */}
                            <div className="about-img ">
                                <div className="about-font-img d-none d-lg-block">
                                    <img src="main_page/assets/img/gallery/sharing.png" alt />
                                </div>
                                <div className="about-back-img ">
                                    <img src="main_page/assets/img/gallery/danoations.jpeg" style={{ width: 350, height: 400 }} alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Law End*/}
            {/* Featured_job_start */}
            <section className="featured-job-area section-padding30 section-bg2" 
             style={{
                backgroundImage: `url(main_page/assets/img/gallery/section_bg03.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
        
            }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
                            {/* Section Tittle */}
                            <div className="section-tittle text-center mb-80">
                                <span>What we are boing</span>
                                <h2>We arrange many social events for charity donations</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-12">
                            {/* single-job-content */}
                            <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="#"><img src="main_page/assets/img/gallery/socialEvents1.png" alt /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="#"><h4>Donation is Hope</h4></a>
                                        <ul>
                                            <li><i className="far fa-clock" />8:30 - 9:30am</li>
                                            <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                                            <li><i className="fas fa-map-marker-alt" />Glenfield Mallareddy hospital, Hyderabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            {/* single-job-content */}
                            <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="#"><img src="main_page/assets/img/gallery/socialEvents2.png" alt /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="#"><h4>Helping Hands</h4></a>
                                        <ul>
                                            <li><i className="far fa-clock" />8:30 - 9:30am</li>
                                            <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                                            <li><i className="fas fa-map-marker-alt" />Nampally Hyderabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            {/* single-job-content */}
                            <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="#"><img src="main_page/assets/img/gallery/socialEvents3.png" alt /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="#"><h4>Help for Patients</h4></a>
                                        <ul>
                                            <li><i className="far fa-clock" />8:30 - 9:30am</li>
                                            <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                                            <li><i className="fas fa-map-marker-alt" />Assembly Hyderabad</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured_job_end */}
            {/*? Team Ara Start */}
            <div className="team-area pt-160 pb-160">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                            {/* Section Tittle */}
                            <div className="section-tittle section-tittle2 text-center mb-70">
                                <h2>Meet the Team of Mercy Trust</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="main_page/assets/img/gallery/sample_mem.jpg" alt style={{height:"370px", width:"300px" }} />
                                    {/* Blog Social */}
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="#">Mr's Zakia Firdous</a></h3>
                                    <p>President</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="main_page/assets/img/gallery/sample_mem.jpg" alt style={{height:"370px", width:"300px" }} />
                                    {/* Blog Social */}
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="#">Mr's Jaya Prasuna Giri</a></h3>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="main_page/assets/img/gallery/sample_mem.jpg" alt style={{height:"370px", width:"300px" }} />
                                    {/* Blog Social */}
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="#">Mr's Azeeza Khabir</a></h3>
                                    <p>General Secretary</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="main_page/assets/img/gallery/sample_mem.jpg" alt style={{height:"370px", width:"300px" }}/>
                                    {/* Blog Social */}
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="#">Mr's Asma Iqbal</a></h3>
                                    <p>Joint Secretary</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="main_page/assets/img/gallery/sample_mem.jpg" alt style={{height:"370px", width:"300px" }} />
                                    {/* Blog Social */}
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="#">Mr's Aneesa Tabassum</a></h3>
                                    <p>Treasurer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="main_page/assets/img/gallery/sample_mem.jpg" alt style={{height:"370px", width:"300px" }}/>
                                    {/* Blog Social */}
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="#">Miss Syeda Saba Firdouse</a></h3>
                                    <p>Executive Member</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" >
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="main_page/assets/img/gallery/anna_vargheese.jpg" alt  style={{height:"370px", width:"300px" }}/>
                                    {/* Blog Social */}
                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="#">Miss Anna Vargheese</a></h3>
                                    <p>Executive Member</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Ara End */}
            {/* Want To work */}
            <section className="wantToWork-area ">
                <div className="container">
                    <div className="wants-wrapper w-padding2  section-bg" 
                    style={{
                        backgroundImage: `url(main_page/assets/img/gallery/section_bg01.png)`,
                        backgroundSize: 'cover',
                
                    }}
                    >
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-5 col-lg-9 col-md-8">
                                <div className="wantToWork-caption wantToWork-caption2">
                                    <h3>We the members of society hope that you will consider our request and help us financially to achieve these objectives. Your contribution to this cause will certainly rewarded by the Creator here and hereafter.</h3>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-3 col-md-4">
                                <h2>	Our Bank Account Details are as follows</h2>
                                <hr />
                                <br />
                                <h4>ACCOUNT NUMBER: <strong className="text-danger">5020 0099 726 643</strong></h4>
                                <h4>ACCOUNT NAME: <strong className="text-danger">MERCY CHARITABLE &amp; WELFARE SOCIETY </strong></h4>
                                <h4>BANK: <strong className="text-danger">HDFC BANK</strong></h4>
                                <h4>IFSC CODE: <strong className="text-danger">HDFC0000081</strong></h4>
                                <h4>BRANCH ADDRESS: <strong className="text-danger">GROUND FLOOR KALPAVRUSKHA, ADJACENT TO LAXMI HYUNDAI SHOWROOM HIMAYAT NAGAR MAIN ROAD,HYDERABAD, PIN CODE: 500029,TELANGANA </strong></h4>
                                {/* <a href="#" class="btn white-btn f-right sm-left">Donate</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Want To work End */}
            {/*? Testimonial Start */}
            {/* Blog Area End */}
            {/*? Count Down Start */}
            <div className="count-down-area pt-25 section-bg" 
             style={{
                backgroundImage: `url(main_page/assets/img/gallery/section_bg02.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
        
            }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="count-down-wrapper">
                                <div className="row justify-content-between">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* Counter Up */}
                                        <div className="single-counter text-center">
                                            <span className="counter color-green">6,200</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Donation</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* Counter Up */}
                                        <div className="single-counter text-center">
                                            <span className="counter color-green">80</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Fund Raised</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* Counter Up */}
                                        <div className="single-counter text-center">
                                            <span className="counter color-green">256</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Beneficiaries</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        {/* Counter Up */}
                                        <div className="single-counter text-center">
                                            <span className="counter color-green">256</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Donation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Count Down End */}
        </main>

    )
}

export default MainSection