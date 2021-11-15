<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa" />
    <button @click="carregaInfo(pesquisa)">Pesquisar</button><div>{{resultado.name}}</div>
    <div v-if="false">
    <div v-for="(item, index) in resultado" :key="index">
      <h3>{{ item.name }}</h3>
      <img :src="item" alt="" />
    </div>
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
      axios.get("https://mugenmonkey.com/api/v0/ds3_builds").then((res) => {
        this.resultado = res.data;
        console.log(res)
      });
    },
  },
  created() {
    this.carregaInfo(this.$route.params.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
