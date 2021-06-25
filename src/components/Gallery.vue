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

          <h2>Comments: </h2>
        <div v-for="(comment) in gallery.comments" :key="comment.id">{{ comment.text }}</div>
    
        </div>


      <!-- <input class="form-control" type="text" placeholder="Default input">
       -->

   <template v-if="isAuthenticated">    
   <form @submit.prevent="onSubmit">
         Add comment:
          <textarea
            class="text"
            type="text"
            v-model="comment.text"
            name="body"
            id="body"
            cols="50"
            rows="3"
            required
          ></textarea>
            <!-- <h3>Autor: {{ comment.user.name }}</h3>
      <h3>{{ index + 1 }}. {{ comment.text }}</h3>
      <h3>{{ comment.created_at }}</h3>
      <div v-if="comment.user.id === user.id">
        </div> -->

          <button type="submit" class="btn btn-primary">
           Add Comment
          </button>
          </form>
        </template>
    
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {


  name: 'gallery',
  props: ["id"],
  data() {
    return {
      comment: {
        gallery_id: this.id,
        text: "",
      },
      comments: [],
    
    };
  },
  computed: {
    ...mapGetters('galleries', ['gallery']),
    ...mapGetters('comments', ['comments']),
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('galleries', ['getGallery']),
    ...mapActions('comments', ['getCommentsForGallery']),
    ...mapActions('comments', ['deleteComment']),
    ...mapActions('comments', ['addComment']),
    ...mapActions('auth',['getActiveUser']),



    async onSubmit() {
      await this.addComment(this.comment);
      this.comments = await this.getCommentsForGallery(this.id);
      this.comment.text = "";
    },
  },
  async created() {
  
    await this.getGallery(this.id);
    await this.getCommentsForGallery(this.id)
    await this.$store.dispatch("auth/getActiveUser")
    
  },
};
</script>
<style scoped></style>