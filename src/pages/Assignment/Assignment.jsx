import { useEffect, useState } from "react";
import AssignmentCard from "../AssignmentCard/AssignmentCard";

const Assignment = () => {
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    fetch("assignment.json")
      .then((res) => res.json())
      .then((data) => {
        setAssignment(data);
      });
  }, []);
  return (
    <div className="py-10">
      <div>
        <h2 className="text-3xl text-[#2F327D] font-semibold py-5 text-center">Assignment Submit</h2>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            assignment?.map((assign) => (<AssignmentCard key={assign._id} assign={assign}></AssignmentCard>))
        }
      </div>
    </div>
  );
};

export default Assignment;
