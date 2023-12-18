import axios from "axios";

import localData from "./blog-backup.json";

const alembicApi = axios.create({
  baseURL:
    "https://alembicsoft-75205-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

const local = false;

export const getBlogArPosts = async () =>
  local ? { data: localData.ar } : await alembicApi.get("ar.json");
export const getSemesteerBlogEnPosts = async () =>
  local ? { data: localData.en } : await alembicApi.get("en.json");

const personalApi = axios.create({
  baseURL:
    "https://alembicsoft-75205-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPersonalBlogArPosts = async () =>
  local ? { data: localData.ar } : await personalApi.get("ar.json");
export const getPersonalBlogEnPosts = async () =>
  local ? { data: localData.en } : await personalApi.get("en.json");

const api = axios.create({
  baseURL:
    "https://semesteer-mailing-list-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContacts = (data: object) =>
  api.post("personal-contact-forms.json", data);
