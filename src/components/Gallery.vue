<template>
    <div v-if="gallery">
        <h1>Gallery</h1>
        <h2>Gallery: {{gallery.name}}</h2>
        <h4>Author: <router-link :to="{ name: 'author', params: {id: gallery.user.id }}">{{gallery.user.name}}</router-link></h4>
         <div class="description">Description: {{gallery.description}}</div>
        <div>
             <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ABABAB"
                img-width="1500"
                img-height="1004"
                style="text-shadow: 1px 1px 2px #333;"
                
                >
                     <b-carousel-slide v-for="(image,index) in gallery.images" :key="index"   :img-src="image.source">
                     </b-carousel-slide>
         </b-carousel>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'gallery',
  props: ["id"],
  computed: {
    ...mapGetters('galleries', ['gallery']),
  },
  methods: {
    ...mapActions('galleries', ['getGallery']),
  },
  async created() {
    console.log('usao sam')
    await this.getGallery(this.id);
  },
};
</script>
<style scoped></style>