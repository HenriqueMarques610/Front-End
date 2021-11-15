<template>
  <div class="app">
    <div class="produtos">
      <produto
        v-for="(artigo, index) in artigos"
        :key="index"
        :produto="artigo.produto"
        :valor="artigo.valor"
      >
        <button @click="carregaCarrinho(artigo)">Comprar</button>
      </produto>
    </div>

    <div class="listaCarrinhoCompras">
      <p style="color: white">Ultima Compra: {{ ultimaCompra }} - Total</p>
      <div
        class="produto"
        v-for="(artigo, index) in carrinhoCompras"
        :key="index"
      >
        <h2>Produto {{ artigo.produto }}</h2>
        <p>{{ artigo.valor }} Euros</p>
        <button @click=descarregaCarrinho(index)>Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({$axios}){
    return $axios.get('https://carrinhocompras-eba53-default-rtdb.firebaseio.com/')
      .then(
        (res)=>{
          return{
            artigos:res.data
          }
        }
      )
  },
  data() {
    return {
      ultimaCompra: "Nenhuma compra efetuada",
      carrinhoCompras: [],
      artigos: [
        {
          produto: "Produto XYZ",
          valor: 25,
        },
        {
          produto: "Produto XPTO",
          valor: 5,
        },
        {
          produto: "Produto GTO",
          valor: 15,
        },
      ],
    };
  },
  methods: {
    carregaCarrinho(artigo) {
      this.carrinhoCompras.unshift({ ...artigo, dataCompra: new Date() });
      this.ultimaCompra = this.carrinhoCompras[0].dataCompra
        .toString()
        .slice(0, 10);
    },
    descarregaCarrinho(index) {
      this.carrinhoCompras.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: around;
}
.listaCarrinhoCompras {
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 90px;
  background-color: rgb(48, 88, 48, 0.87);
  width: 420px;
  height: 100vh;
}
.produtos {
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
.produto {
  background-color: white;
  padding: 3rem;
  margin: 10px;
  width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 3);
}
</style>