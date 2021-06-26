<template>
  <div>
    <h1>
      My galeries:
      <router-link :to="`/myGalleries`"> </router-link>
      <b
        ><strong
          >{{ oneUser[0].user.name }}
         
        </strong></b
      >
    </h1>
    <hr />

    <div v-for="(user, index) in oneUser" :key="index">
      <h3>Gallery No.: {{ index + 1 }}</h3>
      <hr />
      <h3>Gallery Name: {{ user.name }}</h3>
      <h3>Description: {{ user.description }}</h3>
      <h3>Gallery Images:</h3>
      <br />

      <img
        width="200px"
        height="200px"
        v-for="(img, index) in user.images"
        :key="index"
        v-bind:src="img.url"
        alt=""
      />

      <br />
      <br />
      <hr />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ activeUser: "auth/activeUser" }),
    ...mapGetters({ singleUser: "user/singleUser" }),
  },
  methods: {
    ...mapActions({ getActiveUser: "auth/getActiveUser" }),
    ...mapActions({ getSingleUser: "user/getSingleUser" }),
  },
  async created() {
    await this.getActiveUser();
    await this.getSingleUser(this.user.id);
    if (this.singleUser.length === 0) {
      alert("This user has no galleries.");
    }
  },
};
</script>

<style scoped></style>