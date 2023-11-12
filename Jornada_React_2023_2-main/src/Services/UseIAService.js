import http from "../http-common";

const getAll = () => {
  return http.get("/useia");
};

const get = (id) => {
  return http.get(`/useia/${id}`);
};

const create = (data) => {
  return http.post("/useia", data);
};

const update = (id, data) => {
  return http.put(`/useia/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/useia/${id}`);
};

const removeAll = () => {
  return http.delete(`/useia`);
};

const findByTitle = (title) => {
  return http.get(`/useia?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
