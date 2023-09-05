import api from '../plugins/api'

class postService {
  async getAllPosts() {
    const response = await api.get('/posts/')
    return response.data
  }
  async savePost(post) {
    const response = await api.post('/posts/', post)
    return response.data
  }
  async deletePost(post) {
    const response = await api.delete(`/posts/${post.id}/`)
    return response.data
  }
}

export default new postService()
