import { Link } from "react-router-dom";

const AssignmentCard = ({assign}) => {
  const { _id, img, title, description } = assign || {};
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-medium">{title}</h2>
        <p>{description}</p>
        <div className="py-4">
          <Link to='/assignmentSubmit'>
            <button className="btn btn-primary text-2xl font-semibold w-full">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
