import { blogAPI, userAPI } from "./instance";
import memo from "../helpers/memoize";

const _getPosts = async (from = 1, amount = 10) => {
  return (await blogAPI.get(`/posts?_start=${from}&_limit=${amount}`)).data;
};

const _getComments = async postId => {
  console.log("Receiving comments for " + postId);
  return (await blogAPI.get(`/comments?postId=${postId}`)).data;
};

export const getPosts = memo(_getPosts);
export const getComments = memo(_getComments);
