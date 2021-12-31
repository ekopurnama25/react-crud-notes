import axios from "./api";

export const getNotes = async () => {
  try {
    const req = await axios.get("/");
    return req;
  } catch (err) {
    console.log(err);
  }
};

export const getIdNotes = async (id) => {
  try {
    const req = await axios.get(`/${id}`);
    const { data } = req;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createNotes = async (data) => {
  try {
    const req = await axios.post("/", data);
    return req;
  } catch (err) {
    console.log(err);
  }
};

export const updateNotes = async (id, notes) => {
  try {
    const req = await axios.put(`/${id}`, notes);
    const { data } = req;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteNotes = async (id) => {
  try {
    const req = await axios.delete(`/${id}`);
    const { data } = req;
    return data;
  } catch (err) {
    console.log(err);
  }
};
