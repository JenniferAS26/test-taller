import axios from 'axios';

const URL_BASE = "https://mini-back-nivelacion-dev-zkrn.3.us-1.fl0.io";

export const getUserByEmailAndPassword = async (email, password) => {
  try {
    const { data } = await axios.get(
      `${URL_BASE}/users?email=${email}&&password=${password}`
    );
    return data.length ? data[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
