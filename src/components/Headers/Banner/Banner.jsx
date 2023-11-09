

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
        {/* Banner-1 */}
      <div id="slide1" className="carousel-item relative w-full">

        <img src='https://i.ibb.co/8z0RcKx/banner.jpg' className="w-full rounded-xl" />

        <div className="absolute flex rounded-xl items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold text-white">
            Studying Online is now much easier
            </h2>
            <p className="text-white">
            TOTC is an interesting platform that will teach you in more an interactive way
            </p>
            <div className="flex gap-5">
              <button className="btn btn-active btn-primary">
              Join for free
              </button>
              <button className="btn btn-outline btn-secondary">
              Watch how it works
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Banner-2 */}
      <div id="slide2" className="carousel-item relative w-full">

      <img src='https://i.ibb.co/8z0RcKx/banner.jpg' className="w-full rounded-xl" />

        <div className="absolute flex rounded-xl items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold text-white">
            Studying Online is now much easier
            </h2>
            <p className="text-white">
            TOTC is an interesting platform that will teach you in more an interactive way
            </p>
            <div className="flex gap-5">
              <button className="btn btn-active btn-primary">
              Join for free
              </button>
              <button className="btn btn-outline btn-secondary">
              Watch how it works
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Banner-3 */}
      <div id="slide3" className="carousel-item relative w-full">

      <img src='https://i.ibb.co/8z0RcKx/banner.jpg' className="w-full rounded-xl" />

        <div className="absolute flex rounded-xl items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold text-white">
            Studying Online is now much easier
            </h2>
            <p className="text-white">
            TOTC is an interesting platform that will teach you in more an interactive way
            </p>
            <div className="flex gap-5">
              <button className="btn btn-active btn-primary">
              Join for free
              </button>
              <button className="btn btn-outline btn-secondary">
              Watch how it works
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Banner-4 */}
      <div id="slide4" className="carousel-item relative w-full">

      <img src='https://i.ibb.co/8z0RcKx/banner.jpg' className="w-full rounded-xl" />

        <div className="absolute flex rounded-xl items-center h-full left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold text-white">
            Studying Online is now much easier
            </h2>
            <p className="text-white">
            TOTC is an interesting platform that will teach you in more an interactive way
            </p>
            <div className="flex gap-5">
              <button className="btn btn-active btn-primary">
              Join for free
              </button>
              <button className="btn btn-outline btn-secondary">
              Watch how it works
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
