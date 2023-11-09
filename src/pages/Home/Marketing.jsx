import { useEffect, useState } from "react";
import MarketingCard from "./MarketingCard";

const Marketing = () => {
  const [marketing, setMarketing] = useState([]);
  useEffect(() => {
    fetch("marketing.json")
      .then((res) => res.json())
      .then((data) => {
        setMarketing(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(marketing);
  return (
    <div>
      <div className="space-y-1 my-3">
        <h1 className="text-3xl dark:text-white font-semibold my-2">
          Marketing Articles{marketing.length}
        </h1>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {marketing?.map((market) => (
          <MarketingCard key={market._id} market={market}></MarketingCard>
        ))}
      </div>
    </div>
  );
};

export default Marketing;
