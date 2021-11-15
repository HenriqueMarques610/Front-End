<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa" />
    <button @click="carregaInfo(pesquisa)">Pesquisar</button>
    <div v-for="(res, index) in resultado" :key="index">
      <h3>{{ item }}</h3>
      <img :src="item" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      pesquisa: "",
      resultado: "",
    };
  },
  methods: {
    carregaInfo(query) {
      axios
        .get("https://dog.ceo/api/breed/" + query + "/images")
        .then((res) => {
          this.resultado = res.data.message;
        });
    },
  },
  created() {
    this.carregaInfo(this.$route.params.id);
  },
};
</script>