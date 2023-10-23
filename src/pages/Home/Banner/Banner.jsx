import img_1 from "../../../assets/images/banner/1.jpg";
import img_2 from "../../../assets/images/banner/2.jpg";
import img_3 from "../../../assets/images/banner/3.jpg";
import img_4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full py-8 rounded-lg h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img_1} className="w-full rounded-lg" />
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="space-y-4 text-white w-1/3 ml-24 mt-28">
            <h2 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn px-5 mr-5 py-3 normal-case bg-[#FF3811] text-white border-none">
                Discover More
              </button>
              <button className="btn btn-outline text-white normal-case">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img_2} className="w-full rounded-lg" />
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="space-y-4 text-white w-1/3 ml-24 mt-28">
            <h2 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn px-5 mr-5 py-3 normal-case bg-[#FF3811] text-white border-none">
                Discover More
              </button>
              <button className="btn btn-outline text-white normal-case">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img_3} className="w-full rounded-lg" />
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="space-y-4 text-white w-1/3 ml-24 mt-28">
            <h2 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn px-5 mr-5 py-3 normal-case bg-[#FF3811] text-white border-none">
                Discover More
              </button>
              <button className="btn btn-outline text-white normal-case">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img_4} className="w-full rounded-lg" />
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className="space-y-4 text-white w-1/3 ml-24 mt-28">
            <h2 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn px-5 mr-5 py-3 normal-case bg-[#FF3811] text-white border-none">
                Discover More
              </button>
              <button className="btn btn-outline text-white normal-case">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
