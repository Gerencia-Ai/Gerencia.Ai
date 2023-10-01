import api from "../../plugins/api/api";
import { getItem } from "../../plugins/SecureStorage/secureStorageHandler";

class postService {
  async getAllPosts() {
    const token = await getItem("token");
    const response = await api.get("/posts/", {
      headers: { Authorization: "Bearer " + token },
    });

    return response.data;
  }
  async savePost(post) {
    const response = await api.post("/posts/", post);
    return response.data;
  }
  async deletePost(post) {
    const response = await api.delete(`/posts/${post.id}/`);
    return response.data;
  }
}

export default new postService();
