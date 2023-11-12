import React, { useState, useEffect } from "react";
import UseIADataService from "/src/Services/UseIAService.js";
import { Link } from "react-router-dom";

const UseIAList = () => {
  const [useIAs, setUseIAs] = useState([]);
  const [currentUseIA, setCurrentUseIA] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveUseIAs();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveUseIAs = () => {
    UseIADataService.getAll()
      .then((response) => {
        setUseIAs(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUseIAs();
    setCurrentUseIA(null);
    setCurrentIndex(-1);
  };

  const setActiveUseIA = (useIA, index) => {
    setCurrentUseIA(useIA);
    setCurrentIndex(index);
  };

  const removeAllUseIAs = () => {
    UseIADataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    UseIADataService.findByTitle(searchTitle)
      .then((response) => {
        setUseIAs(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>UseIA List</h4>
        <ul className="list-group">
          {useIAs &&
            useIAs.map((useIA, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveUseIA(useIA, index)}
                key={index}
              >
                {useIA.title}
              </li>
            ))}
        </ul>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllUseIAs}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentUseIA ? (
          <div>
            <h4>UseIA</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentUseIA.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentUseIA.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentUseIA.published ? "Published" : "Pending"}
            </div>
            <Link
              to={"/useias/" + currentUseIA.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a UseIA...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseIAList;
