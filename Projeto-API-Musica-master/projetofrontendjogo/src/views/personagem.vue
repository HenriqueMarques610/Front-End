<template>
  <div class="hello">
    <div v-if="false" />
    <hr />
    <h3>Personagem: {{ resultados.name }}</h3>
    <img :src="resultados.img_url" alt="" />
    <h3>Estado: {{ resultados.status }}</h3>
    <h3>Especie: {{ resultados.species }}</h3>
    <h3>Genero: {{ resultados.gender }}</h3>
    <h3>Cabelo: {{ resultados.hair }}</h3>
    <h3>Origem: {{ resultados.origin }}</h3>
    <h3>Abilidades:</h3>
    <h3>{{ resultados.abilities[0] }}</h3>
    <h3>{{ resultados.abilities[1] }}</h3>
    <h3>{{ resultados.abilities[2] }}</h3>
    <h3>{{ resultados.abilities[3] }}</h3>
    <h3>{{ resultados.abilities[4] }}</h3>
    <h3>{{ resultados.abilities[5] }}</h3>
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
      pesquisa: "",
      resultados: "",
    };
  },
  methods: {
    carregaInfo(id) {
      axios
        .get("https://finalspaceapi.com/api/v0/character/" + id)
        .then((res) => {
          console.log(res.data);
          this.resultados = res.data;
        });
    },
  },
  mounted() {
    //1
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
.hello {
  background-color: #659dbd;
  color: white;
}
</style>