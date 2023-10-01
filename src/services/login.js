import axios from "axios";

export async function login(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Login was called with", email, password);
      let request = await axios.post(
        "https://gerencia-back-7ap3-dev.fl0.io/token/",
        {
          email: email,
          password: password,
        }
      );
      resolve(request.data);
    } catch (error) {
      reject(error);
    }
  });
}
