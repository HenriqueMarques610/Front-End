<template>
  <div id="app">
    <appCard cor="lightblue">
      <div id="nav" class="d-flex justify-content-between align-items-center">
        <div></div>
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/personagens">Personagens</router-link> |
          <router-link to="/episodios">Episodios</router-link> |
          <router-link to="/locais">Localizações</router-link> |
          <router-link to="/citacoes">Citações</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <div>
          <router-link to="/login" tag="b-button">Login</router-link>
        </div>
      </div>
    </appCard>
    <router-view />
  </div>
</template>

<script>
import appCard from "./views/app-card.vue";

export default {
  name: "App",
  components: {
    appCard,
  },
  mounted() {
    this.$store.dispatch("carregaFavoritos");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #659dbd;
}
</style>
