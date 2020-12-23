import './style.css'
import bannerImage from '../svg/banner-image.svg';
const Banner = () => {
    return (
      <div className="banner-wrapper banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 pb-5 pb-md-0 hero-grid">
              <div className="inner-wrapper">
                <h2 className="banner-header">
                  Hello! I’m Charl. I am Frontend Developer.
                </h2>
                <button className="banner-button mt-5">Download Resume</button>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center pb-5">
              <img src={bannerImage} className="bannerImage" />
            </div>
          </div>
        </div>
        <div className="scroll-icon-container">
          <div className="icon-scroll"></div>
        </div>
      </div>
    );
}

export default Banner;