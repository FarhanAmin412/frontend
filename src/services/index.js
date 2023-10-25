import axios from "axios";
import { BASE_URL } from "../constants";

export const getArticles = async () => {
  return await axios.get(`${BASE_URL}/api/articles`);
};
