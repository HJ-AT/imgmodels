// import image from './logo512.png'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div classname="App">

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MODELS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#photogallary">Photo Gallary</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href='#footer'>Contact us</a>
              </li>
            </ul>
            <a href='#footer'>
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <button className="btn btn-outline-success">Contact Us</button>
            </a>
          </div>
        </div>
      </nav>


      {/* CARAOUSEL */}


      <section id='caraousel'>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/02/large-1676045659-ffe90257b8e9f0337fb0b58a40d1e91e.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1680634301-2c9b0cbe924ccbda6de512c63b9c95c5.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311012-862cbc46831dddf045019284dc818509.jpg" className="d-block w-100" alt="pic" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>


      {/* PHOTO GALARY */}


      <section id='photogallary'>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center my-2">
              <h4>More Photos</h4>
            </div>
          </div>
          <div className="portfolio-menu mt-2 mb-4">
            <ul>
              <li className="btn btn-outline-dark active" data-filter="*">All</li>
            </ul>
          </div>
          <div className="portfolio-item row">
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm ">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311679-23eba6f7a6f8fad7633cb5f99de60be9.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311679-23eba6f7a6f8fad7633cb5f99de60be9.jpg  " alt />
              </a>

            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311541-6153091c13ee76c85383b264ca308df0.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311541-6153091c13ee76c85383b264ca308df0.jpg" alt />
              </a>
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681329051-95c7b851268fed45d74ce701afc7d93e.jpeg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681329051-95c7b851268fed45d74ce701afc7d93e.jpeg" alt />
              </a>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" alt />
              </a>
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311679-23eba6f7a6f8fad7633cb5f99de60be9.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311679-23eba6f7a6f8fad7633cb5f99de60be9.jpg  " alt />
              </a>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311541-6153091c13ee76c85383b264ca308df0.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311541-6153091c13ee76c85383b264ca308df0.jpg" alt />
              </a>
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681329051-95c7b851268fed45d74ce701afc7d93e.jpeg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681329051-95c7b851268fed45d74ce701afc7d93e.jpeg" alt />
              </a>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" alt />
              </a>
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311679-23eba6f7a6f8fad7633cb5f99de60be9.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311679-23eba6f7a6f8fad7633cb5f99de60be9.jpg  " alt />
              </a>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311541-6153091c13ee76c85383b264ca308df0.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311541-6153091c13ee76c85383b264ca308df0.jpg" alt />
              </a>
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681329051-95c7b851268fed45d74ce701afc7d93e.jpeg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681329051-95c7b851268fed45d74ce701afc7d93e.jpeg" alt />
              </a>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
              <a href="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" className="fancylight popup-btn" data-fancybox-group="light">
                <img className="img-fluid" src="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg" alt />
              </a>
            </div>
          </div>
        </div>


      </section>

      {/* FOOTER */}

      <section id='footer'>

        <div className="container border-top ">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="#photogallary" className="nav-link px-2 text-muted">Photo Gallary</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
           
            <p className='text-center text-muted'>For more information contact :</p> <p className='text-center text-muted'> <a href = "mailto: abc@example.com" className='link-secondary'>abc@example.com</a> </p>
           
            <p className="text-center text-muted">© 2023 MODELS, Inc</p>
          </footer>
              
        </div>
      </section>

    
 
    </div>








  );
}

export default App;
