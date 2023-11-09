import { Link } from "react-router-dom";

const MarketingCard = ({ market }) => {
  const { _id, image, card_title, description } = market || {};
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 dark:text-white shadow-inner border-2 rounded-md">
      <figure className="flex justify-center items-center bg-white rounded-md">
        <img
          className="w-10/12  hover:w-full duration-200 h-[300px] object-contain"
          src={image}
          alt=""
        />
      </figure>

      <div className="p-3">
        <h1 className="text-xl dark:text-white font-semibold text-gray-800">
          {card_title}
        </h1>
        <p className="  whitespace-nowrap overflow-hidden text-ellipsis">
          {description}
        </p>

        {/* <p className="font-bold">{price}</p> */}
        <div className="flex gap-2">
          <Link
            to={`/marketingUpdate/${_id}`}
            className="  btn btn-sm btn-secondary   mt-2"
          >
            Update
          </Link>
          <Link
            to={`/marketingDetails`}
            className="  btn btn-sm btn-secondary mt-2"
          >
            {" "}
            View Details
            {/* <AiOutlineDoubleRight></AiOutlineDoubleRight> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketingCard;
