

<template>
<div class="App">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">

    <div class="titulo">
      <h1>{{message}}</h1>
    </div>
    <div style="width: 50%; margin: 0;">
    <!--
      <p>Cambiar titulo</p>
      <input type="text" v-model="message" /> 
  <button v-on:click="clearMessage">Clear Message!</button>-->
    </div>

  <Content></Content>


</div>
</template>
<style>

  .titulo{
    text-align: center;
    margin: 0 auto;
    border-bottom-color:solid dimgray;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 90%;
  }
</style>

<script>
import Content from '../components/Content'
export default {
  
  data(){
    return{
      message: "PWA Builder 2.0"
    }
  },
  methods: {
    clearMessage(){
      this.message = "";
      console.log("clearMessage")
    }

  },
  components: {Content}
}
</script>
