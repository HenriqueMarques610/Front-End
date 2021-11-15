<template>
  <div class="breeds">
    <div v-for="(item, index) in $store.state.info" :key="index">
      <app-card largura="200px">
        <img :src="item.photo" height="120" alt="" />
        <br>
        <router-link :to="'/breeds/' + item.name">{{ item.name }}</router-link>
        <button @click="navega(item.name)">{{ item.name }}</button>
      </app-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import appCard from "@/components/app-card.vue";
export default {
  components: {
    appCard,
  },
  data() {
    return {
      pesquisa: "",
      resultados: "",
      breeds: [],
    };
  },
  methods: {
    navega(breed) {
      this.$router.push("/breeds/" + breed);
    },
  },
};
</script>

<style>
.breeds {
  display: flex;
  flex-flow: row wrap;
}
</style>