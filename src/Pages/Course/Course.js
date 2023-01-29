import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import { SlArrowRight } from "react-icons/sl";

const Course = ({course}) => {
    const {name,title,Duration,Fee,Rating} = course;

  return (
    <div className="container mx-auto">
      <div >
        <div className="bgc">
          <h5 className="text-2xl pt-3 px-3 text-white">{name}</h5>
         <Link>
         <h2 className="text-3xl p-3 text-white">
            {title}
          </h2>
         </Link>
          <div className="display-flex">
            <p className="text-white inline p-3">
              Duration: <span>{Duration}</span>
            </p>
            <p className="dsd inline">
              Fee: <span> {Fee}</span>
            </p>
          </div>
          <div className="display-flex ">
            <p className="text-white ddd inline p-3">
              Ratings: <span className="">{Rating}</span>
            </p>
          </div>
          <div className="flex items-center justify-between p-3 mt-6">
            <button className="btn btn-primary">Apply Now</button>
            <button className=" btn-info text-white btn ml-2 flex">Read More <span> <SlArrowRight/></span> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
