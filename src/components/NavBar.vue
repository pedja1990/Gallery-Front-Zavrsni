<template>
  <div class="nav">
    <div class="nav-box">
        <router-link to="/">Galleries</router-link> |
    </div>
     <!-- <div class="nav-box">
      <input @input="search" placeholder="search" />
    </div> -->
    <div class="nav-box">
      <input 
      @input="search"
      class="navbar-nav"
      type="text"
      placeholder="Search" 
      />
      <br/>
      <button @click="filter" class="btn btn-primary">Search</button>
    </div>

    <div class="nav-box">
      <form v-if="!isAuthenticated">
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link>
      </form>
      <form v-else>
        <a class="button" @click="logout">Logout</a>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'nav-bar',

  
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('galleries', ['galleries']),
  },
  methods: {
      search(evt) {
      this.setSearchTerm(evt.target.value);
      this.getGalleries();
    },

    
  
    ...mapActions('galleries', ['getGalleries']),
    ...mapMutations('galleries', ['setSearchTerm']),
    ...mapActions('auth', ['logout']),


    filter(){
    this.setSearchTerm(this.search)
    this.getGalleries(this.search)
    
  }
  },

  
};
</script>
<style scoped>
.nav {
  display: flex;
  padding: 30px;
}
.nav-box {
  flex: 1;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
.button {
  cursor: pointer;
}
</style>