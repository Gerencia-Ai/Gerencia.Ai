import api from '../plugins/api'

class commentService {
  async getAllComments() {
    const response = await api.get('/comentarios/')
    return response.data
  }
  // async getAllComments() {
  //   const response = await fetch('http://127.0.0.1:8000/api/comentarios/')
  //   return response.data
  // }
  async saveComment(comment) {
    const response = await api.post('/comentarios/', comment)
    return response.data
  }
  async deleteComment(comment) {
    const response = await api.delete(`/comentarios/${comment.id}/`)
    return response.data
  }
}

export default new commentService()
