import axios from "axios";
import {
  getItem,
  deleteItem,
} from "../../plugins/SecureStorage/secureStorageHandler";

export async function getAll() {
  return new Promise(async (resolve, reject) => {
    try {
      let token = await getItem("token");
      let request = await axios.get(
        "https://gerencia-back-dev-kbzk.4.us-1.fl0.io/api/projetos/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      resolve(request.data);
    } catch (error) {
      console.error(
        "🚀 ~ file: projects.js:28 ~ returnnewPromise ~ error:",
        error
      );

      if (error) {
        await deleteItem("token");
      }

      reject(error);
    }
  });
}
