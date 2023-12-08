import axios from "axios";

export async function login(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Login was called with", email, password);
      let request = await axios.post(
        "https://gerencia-back-dev-kbzk.4.us-1.fl0.io/api/token/",
        {
          email: email,
          password: password,
        }
      );
      if (request.status == 200) {
        resolve(request.data);
      } else {
        reject(request);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
