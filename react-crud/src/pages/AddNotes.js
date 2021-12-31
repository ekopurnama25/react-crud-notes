import React, { useState } from "react";
import { createNotes } from "../utils/api/actionNotes";
import { useNavigate } from "react-router-dom";

const AddNotes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotes({ ...notes, [name]: value });
  };

  const saveNotes = async (e) => {
    e.preventDefault();
    try {
      const res = await createNotes(notes);
      if (res) {
        navigate("/Notes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-5">
      <div className="card">
        <div className="card-header">Add Product</div>
        <div className="card-body">
          <div className="container">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={notes.title}
                  name="title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Descriptionts
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={notes.description}
                  name="description"
                />
              </div>
              <div className="d-flex justify-content-end md-2">
                <button type="button" className="btn btn-outline-danger">
                  Batal
                </button>
                <button
                  type="submit"
                  onClick={saveNotes}
                  className="btn btn-outline-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
