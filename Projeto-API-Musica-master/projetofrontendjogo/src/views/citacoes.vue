<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div v-for="(data, index) in resultados" :key="index">
      <hr />
      <h3>Citação: {{ data.quote }}</h3>
      <h3>Dito por: {{ data.by }}</h3>
      <img :src="data.image" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Api",
  props: {
    msg: String,
  },
  data() {
    return {
      resultados: "",
    };
  },
  methods: {
    carregaInfo() {
      axios.get("https://finalspaceapi.com/api/v0/quote").then((res) => {
        console.log(res.data);
        this.resultados = res.data;
      });
    },
  },
  mounted() {
    this.carregaInfo();
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
.hello {
  background-color: #659dbd;
  color: white;
}
</style>