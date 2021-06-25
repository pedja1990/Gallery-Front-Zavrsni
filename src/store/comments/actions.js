import CommentService from "../../services/CommentService";

export const actions = {
  async addComment(store, text,id) {
    const { data } = await CommentService.add(text,id);

    store.commit("addComments", data);
  },

  async getCommentsForGallery(store, id) {
    return await CommentService.getComments(id);
  },

  async deleteComment(store, id) {
   
    const data = await CommentService.deleteComment(id);

    return data;
  },
};