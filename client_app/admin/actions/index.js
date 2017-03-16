import axios from 'axios';

export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const EDIT_TAG = "EDIT_TAG";
export const FETCH_TAGS = "FETCH_TAGS";

const ROOT_URL = '/api/v1';

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/admin/post/create`, values);

  return {type: CREATE_POST, payload: request};
}

export function editPost(values) {
  const request = axios.post(`${ROOT_URL}/admin/post/${id}/edit`, values);

  return {type: EDIT_POST, payload: request};
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  return {type: FETCH_POSTS, payload: request};
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/post/${id}`);

  return {type: FETCH_POST, payload: request};
}

export function createCategory(values) {
  return {
    type: CREATE_CATEGORY,
    payload: axios.post(`${ROOT_URL}/admin/category/create`, values).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error.response);
    })
  };
}

export function editCategory(values) {
  const request = axios.post(`${ROOT_URL}/admin/category/${id}/edit`, values);

  return {type: EDIT_CATEGORY, payload: request};
}

export function fetchCategories() {
  const request = axios.get(`${ROOT_URL}/categories`);

  return {type: FETCH_CATEGORIES, payload: request};
}

export function editTag(values) {
  const request = axios.post(`${ROOT_URL}/tag/${id}/edit`, values);

  return {type: EDIT_TAG, payload: request}
}

export function fetchTags() {
  const request = axios.get(`${ROOT_URL}/tags`);

  return {type: FETCH_TAGS, payload: request}
}
