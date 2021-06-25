import userService from "../../services/UserService";

export const actions = {
  async getSingleUser(store, id) {
    const user = await userService.getUser(id);
    
    store.commit("setSingleUser", user);
  },
};