<template>
   <div>
    <h1>My galleries: </h1>
    <h3><div v-for="(gallery, index) in this.singleUser.galleries" :key="index">
      <b>Name: </b>{{ gallery.name }} 
      <br>
      <b>Description:</b>{{ gallery.description }} 
      <br>
      <b>Created at: </b>{{ gallery.created_at }}
      <br></div></h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('auth', ['activeUser']),
    ...mapGetters('users', ['singleUser'] ),
  },
  methods: {
    ...mapActions('auth', ['getActiveUser']),
    ...mapActions('users', ['getSingleUser']),
    ...mapActions( 'galleries',['getGalleries']),
  },
    async created() {
      console.log('1')
    await this.getActiveUser();
console.log('2')
    await this.getSingleUser(this.activeUser.id);
console.log('3')
    console.log(this.activeUser);
  },
 
};
</script>

<style scoped></style>