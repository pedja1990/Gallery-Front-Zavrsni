import BaseService from './BaseService';

class CommentService extends BaseService {

    async add(text,id) {
        const { data } = await this.http.post(`/galleries/${id}comments`, text);
        
        return data;
      }
      async getComments(id) {
        const { data } = await this.http.get(`/galleries/${id}/comments`);
        console.log(data);
        return data;
      }
      async deleteComment(id) {
        
        const { data } = await this.http.delete(`/comments/${id}`);
        return data;
      }

}

const commentsService = new CommentService();
export default commentsService;