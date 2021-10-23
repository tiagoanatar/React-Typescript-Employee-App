import http from "../httpCommon";
import { BaseItem, ItemReview } from "../types/ApiTypes";

const getAll = () => {
  return http.get("/menu/items");
}

const get = (id: any) => {
  return http.get(`/menu/items/${id}`);
}

const create = (data: BaseItem) => {
  return http.post("/menu/items", data);
}

const createReview = (id: number, data: ItemReview) => {
  return http.post(`/menu/items/${id}/employeesreview`, data);
}

const createAssign = (id: number, data: ItemReview) => {
  return http.post(`/menu/items/${id}/assignedreviews`, data);
}

const update = (id: any, data: BaseItem) => {
  return http.put(`/menu/items/${id}`, data);
}

const remove = (id: any) => {
  return http.delete(`/menu/items/${id}`);
}

const removeReview = (id: number, index: number) => {
  return http.delete(`/menu/items/${id}/employeesreview/${index}`);
}

const removeAssign = (id: number, index: number) => {
  return http.delete(`/menu/items/${id}/assignedreviews/${index}`);
}

const TutorialService = {
  getAll,
  get,
  create,
  createReview,
  createAssign,
  update,
  remove,
  removeReview,
  removeAssign,
}

export default TutorialService;