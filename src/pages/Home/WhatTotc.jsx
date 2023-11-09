import { Link } from "react-router-dom";

const WhatTotc = () => {
  return (
    <div className="py-10">
      <div>
        <h2 className="text-4xl text-[#2F327D] font-semibold text-center">
          What is <span className="text-[#00CBB8]">TOTC?</span>
        </h2>
        <div className="max-w-3xl mx-auto py-5">
          <p className="text-center text-2xl">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/dGdJHH4/Rectangle-23.png" alt="Shoes" />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title flex justify-center">FOR INSTRUCTORS</h2>
            <Link to="/WhatTotcDetails">
              <button className="btn btn-outline rounded-full btn-warning text-2xl font-medium">
                Start a class today
              </button>
            </Link>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/dGdJHH4/Rectangle-23.png" alt="Shoes" />
          </figure>
          <div className="card-body my-auto">
            <h2 className="card-title flex justify-center">FOR STUDENTS</h2>
            <Link to='/WhatTotcDetails'>
              <button className="btn btn-info rounded-full text-2xl font-medium">
                Enter access code
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTotc;
