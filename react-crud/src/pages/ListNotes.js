import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteNotes, getNotes } from "../utils/api/actionNotes";
import { useNavigate } from "react-router-dom";
const ListNotes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState();

  const DeleteDataNotes = async (e, id) => {
    e.preventDefault();
    try {
      const res = await deleteNotes(id);
      if (res) {
        const data = await getNotes();
        setNotes(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getListNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    };

    getListNotes();
  }, []);
  return (
    <div className="container p-5">
      <h5 className="card-title">List Data Product</h5>
      <div className="container table-responsive p-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Decriptions</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {notes &&
              notes.data.map((Notes, index) => {
                return (
                  <tr key={Notes.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{Notes.title}</td>
                    <td>{Notes.description}</td>
                    <td>
                      <button
                        type="sumbit"
                        onClick={(e) => {
                          DeleteDataNotes(e, Notes.id);
                        }}
                        className="btn btn-outline-danger"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                      <Link
                        to={`/getIdNotes/${Notes.id}`}
                        className="btn btn-outline-primary"
                      >
                        <i className="fa fa-pencil"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListNotes;
