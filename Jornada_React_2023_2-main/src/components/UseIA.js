import React, { useState, useEffect } from "react";
import UseIADataService from "src/Services/UseIAService.js";

const UseIA = (props) => {
  const initialUseIAState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  const [currentUseIA, setCurrentUseIA] = useState(initialUseIAState);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUseIA = (id) => {
      UseIADataService.get(id)
        .then((response) => {
          setCurrentUseIA(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getUseIA(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUseIA({ ...currentUseIA, [name]: value });
  };

  const updatePublished = (status) => {
    const data = {
      id: currentUseIA.id,
      title: currentUseIA.title,
      description: currentUseIA.description,
      published: status,
    };

    UseIADataService.update(currentUseIA.id, data)
      .then((response) => {
        setCurrentUseIA({ ...currentUseIA, published: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateUseIA = () => {
    UseIADataService.update(currentUseIA.id, currentUseIA)
      .then((response) => {
        console.log(response.data);
        setMessage("The UseIA was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteUseIA = () => {
    UseIADataService.remove(currentUseIA.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/useias");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentUseIA ? (
        <div className="edit-form">
          <h4>UseIA</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentUseIA.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentUseIA.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentUseIA.published ? "Published" : "Pending"}
            </div>
          </form>
          {currentUseIA.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}
          <button className="badge badge-danger mr-2" onClick={deleteUseIA}>
            Delete
          </button>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateUseIA}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a UseIA...</p>
        </div>
      )}
    </div>
  );
};

export default UseIA;
