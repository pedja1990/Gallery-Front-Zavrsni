<template>
  <div>
    <br />
    <h1>Galleries</h1>
    
    <br />
    <div v-for="(gallery, index) in galleries" :key="index">
      <h3>
        Gallery Name:
        <router-link :to="`/galleries/${gallery.id}`">
          {{ gallery.name }}</router-link>
      </h3>

    <h3>Images</h3>

    <img 
    width="150px"
    height="150px"
    v-bind:src="gallery.images[0].source"
    :key="index">

    <div class="description">Description: {{gallery.description}}</div>
     
     <p>Created_at: {{gallery.created_at}}</p>

 </div>
 

  </div>
     
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
    name: 'galleries',
  
  computed: {
    ...mapGetters('galleries', ['galleries'] ),
    
  },
  methods: {
    ...mapActions( 'galleries',['getGalleries'] ),
    ...mapActions( 'images',['getImages'] ),  //('galleries', ['setSearchTerm'])
  },
  async created() {
    await this.getGalleries();
    
  },
};
</script>

<style scoped>



</style>