<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/clientes">Clientes</nuxt-link>
    <nuxt-link to="/produtos">Produtos</nuxt-link>
  </nav>
</template>

<style scoped>
nav {
  height: 80px;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
}

nav a {
  text-decoration: none;
  font-size: 1.5rem;
  padding: 5px;
  color: white;
}
</style>