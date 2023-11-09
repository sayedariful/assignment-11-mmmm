import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("https://assignment-10-server-site-lemon.vercel.app/product")
      .then((res) => res.json())
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const filter = product && product?.filter((item) => item?.brand === id);
    setProduct(filter);
    // console.log(filter);
  }, [id, product]);
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://i.ibb.co/Bqbwcfs/12055.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/5Tyf0x6/785857e15ddbe19.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/DQnrmrB/laptop-backlight-colorful-194324-300x168.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/YfX51wv/HD-wallpaper-colorful-laptop-with-black-background-black-aesthetic.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product &&
          product?.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-neutral-900 dark:text-white shadow-inner border-2 rounded-md
        "
            >
              <figure className="flex justify-center items-center bg-white rounded-md">
                <img
                  className="w-10/12 hover:w-full duration-300 h-[300px] object-contain"
                  src={item?.url}
                  alt=""
                />
              </figure>

              <div className="p-3">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item?.name}
                </h1>
                <p className="  whitespace-nowrap overflow-hidden text-ellipsis">
                  {item?.description}
                </p>

                <p className="font-bold">{item?.price}</p>
                <div className="flex gap-2">
                  <Link
                    to={`/bookDetails/${item?._id}`}
                    className="btn btn-sm btn-secondary mt-2"
                  >
                    Update
                  </Link>
                  <Link
                    to={`/student/${item?._id}`}
                    className="  btn btn-sm btn-secondary mt-2"
                  >
                    {" "}
                    View Details
                    {/* <AiOutlineDoubleRight></AiOutlineDoubleRight> */}
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookDetails;
