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
      <h4>
    Author: 
        <router-link :to="{ name: 'author', params: {id: gallery.user.id }}">
          {{gallery.user.name}}</router-link>
      </h4>

    <h3>Images</h3>

    <img 
    width="150px"
    height="150px"
    v-bind:src="gallery.images"
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
    console.log('tu sam.')
    await this.getGalleries();
    
  },


  


};
</script>

<style scoped>

#carousel-1{
    width: 300px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}



</style>