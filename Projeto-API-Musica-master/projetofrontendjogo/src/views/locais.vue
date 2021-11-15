<template>
  <div style="display: flex">
    <div class="hello">
      <div v-for="(data, index) in resultados" :key="index">
        <app-card largura="520px">
          <hr />
          <h3 @click="navega(data.id) + data.name">{{ data.name }}</h3>
          <img :src="data.img_url" alt="" @click="marcaFavorito(data)" />
          <br />
          <br />
          <b-button pill @click="navega(data.id) + data.name"
            >Informações</b-button
          >
        </app-card>
      </div>
    </div>
    <app-card class="favoritos" cor="grey">
      <p>FAVORITOS</p>
      <div v-for="(data, index) in $store.state.favoritos" :key="index">
        <app-card cor="white" @click="desmarcaFavorito(index)">
          <img
            :src="data.img_url"
            width="90"
            alt=""
            @click="desmarcaFavorito(index)"
          />
        </app-card>
      </div>
    </app-card>
  </div>
</template>

<script>
import axios from "axios";
import appCard from "../views/app-card.vue";
export default {
  name: "Api",
  props: {
    msg: String,
  },
  components: {
    appCard,
  },
  data() {
    return {
      resultados: "",
      favoritos: [],
    };
  },
  methods: {
    marcaFavorito(data) {
      //this.favoritos.unshift(data)
      //console.log(!!this.$store.state.favoritos.find(res=>res===data))
      if (!!!this.$store.state.favoritos.find((res) => res === data)) {
        this.$store.commit("marcaFavorito", data);
      }
    },
    desmarcaFavorito(index) {
      this.$store.commit("desmarcaFavorito", index);
    },
    carregaInfo() {
      axios.get("https://finalspaceapi.com/api/v0/location/").then((res) => {
        console.log(res.data);
        this.resultados = res.data;
      });
    },
    navega(id) {
      this.$router.push({ path: `/local/${id}` });
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
  display: flex;
  flex-flow: row wrap;
}
.favoritos {
  max-width: 130px;
  font-weight: 700;
  color: white;
}
</style>