<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa">
    <button @click="carregaInfo(pesquisa)">Pesquisar</button>
    <div v-for="(res, index) in resultado" :key="index">
      <h3>{{res.data[0].title}}</h3>
      <img :src="res.links[0].href" alt="">
      <p>{{res.data[0].description}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'HelloWorld',
  props:{
    msg:String
  },
  data(){
    return{
      pesquisa:"",
      resultado:""
    }
  },
  methods:{
    carregaInfo(query){
      axios.get("https://images-api.nasa.gov/search?q=" + query + "&media_type=image")
      .then(res=>{
        this.resultado=res.data.collection.items
      })
    }
  }
}
</script>