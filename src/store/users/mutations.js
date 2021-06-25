export const mutations = {
  setSingleUser(state, payload) {
    state.singleUser = payload;
  },
    deleteUser(state, users) {
      state.users = state.deleteUser.filter((u) => u.id !== users.id);
    },
    
  };