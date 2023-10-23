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
export const getBlogEnPosts = async () =>
  local ? { data: localData.en } : await alembicApi.get("en.json");
