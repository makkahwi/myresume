import axios from "axios";

const api = axios.create({
  baseURL:
    "https://alembicsoft-75205-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContacts = (data: object) =>
  api.post("personal-contact-forms.json", data);
