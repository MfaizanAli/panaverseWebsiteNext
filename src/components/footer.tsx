/* eslint-disable @next/next/no-sync-scripts */
const Footer=() => {
  return (
    <>
      <footer id="newsletter">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="section-heading">
                <h4>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</h4>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <fieldset>
                      <input type="address" name="address" class="email" placeholder="Email Address..." autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" class="main-button">Subscribe Now <i class="fa fa-angle-right"></i></button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="footer-widget">
                <h4>Contact Us</h4>
                <p>+92-308-2220203 (WhatsApp as well)</p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-widget">
                <h4>About Us</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-widget">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Free Apps</a></li>
                  <li><a href="#">App Engine</a></li>
                  <li><a href="#">Programming</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">App News</a></li>
                </ul>
                <ul>
                  <li><a href="#">App Dev Team</a></li>
                  <li><a href="#">Digital Web</a></li>
                  <li><a href="#">Normal Apps</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              {/* <div class="footer-widget">
                <h4>About Our Company</h4>
                <div class="logo">
                  <img src="assets/images/white-logo.png" alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div> */}
            </div>
            <div class="col-lg-12">
              <div class="copyright-text">
                <p>Copyright © 2022 Panaverse. All Rights Reserved. </p>
              </div>
            </div>
          </div>
        </div>
      </footer>


      {/*  Scripts */}
      <script src="/vendor/jquery/jquery.min.js"></script>
      <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/js/owl-carousel.js"></script>
      <script src="/assets/js/animation.js"></script>
      <script src="/assets/js/imagesloaded.js"></script>
      <script src="/assets/js/popup.js"></script>
      <script src="/assets/js/custom.js"></script>

    </>
  );
};

export default Footer;