

<template>
<div>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">

    <div style="width: 50%; margin: 0 ;">
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
