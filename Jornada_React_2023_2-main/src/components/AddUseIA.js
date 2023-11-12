import React, { useState } from "react";
import UseIADataService from "/src/Services/UseIAService.js";

const AddUseIA = () => {
  const initialUseIAState = {
    id: null,
    title: "",
    description: "",
    published: false
  };

  const [useIA, setUseIA] = useState(initialUseIAState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUseIA({ ...useIA, [name]: value });
  };

  const saveUseIA = () => {
    var data = {
      title: useIA.title,
      description: useIA.description
    };

    UseIADataService.create(data)
      .then((response) => {
        setUseIA({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newUseIA = () => {
    setUseIA(initialUseIAState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUseIA}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={useIA.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={useIA.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <button onClick={saveUseIA} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUseIA;
