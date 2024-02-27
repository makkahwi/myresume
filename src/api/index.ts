import axios from "axios";

const api = axios.create({
  baseURL:
    "https://myresume-6ab68-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContacts = (data: object) =>
  api.post("personal-contact-forms.json", data);
