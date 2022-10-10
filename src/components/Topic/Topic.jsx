import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const Topic = ({ topic }) => {
    const {name, logo, id, total} = topic;
  return (
    <div>
      <div className="card w-96 bg-white shadow-xl">
        <figure className="px-10 pt-10 border-3-white">
          <img
            src={logo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Quiz {total}</p>
        </div>
          <div className="flex justify-around align-middle p-5">
            <p className="text-xl font-bold">{name}</p>
            <Link to={`/quiz/${id}`} className="bg-indigo-700 text-white font-bold py-2 px-5 rounded-lg">Start Practice <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> </Link>
          </div>
      </div>
    </div>
  );
};

export default Topic;
