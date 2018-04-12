
<template>
    <div id="Content">
        <div class="pure-g Url">
                    <div class="pure-u-1-5">
                        <label >Ingresar URL:</label>
                    </div>
                    <div class="pure-u-1-3">
                        <input type="text" id="inputUrl" ref="inputUrl" v-model="urlSite" autofocus>
                    </div>
                    <div class="pure-u-1-3">
                        <button v-on:click="getManifest">Get Manifest</button>
                    </div>
                </div>
        <div class="pure-g">
            <div class="pure-u-1-2 formData">
                
                <div class="pure-g"> 
                    <div class="pure-u-1-3">
                        <label for="inputEmpresa">Name</label>
                    </div>
                    <div class="pure-u-1-2"> 
                        <input id="inputEmpresa" type="text" ref="inputEmpresa" v-model="nombreEmpresa"
                            v-on:keydown.tab="actualizoDatos">
                    </div>
                </div>
                <div class="pure-g"> 
                    <div class="pure-u-1-3">
                        <label for="inputEmpresaCorto">Short Name</label>
                    </div>
                    <div class="pure-u-1-2">
                        <input id="inputEmpresaCorto" type="text" ref="inputEmpresaCorto"
                         v-on:keydown.tab="actualizoDatos"/>
                    </div>
                    
                </div>
                <div class="pure-g"> 
                    <div class="pure-u-1-3">
                        <label for="inputLema">Description</label>
                    </div>
                    <div class="pure-u-1-2">
                        <input id="inputLema" type="text" ref="inputLema"
                        v-on:keydown.tab="actualizoDatos"/>
                    </div>
                    
                </div>
                
                <!-- 
                
                <div class="pure-g"> 
                    <button v-on:click="consoleData">Console Log</button>
                </div>

                <div class="pure-g" v-bind="datos">
                    <div class="pure-u-1-1" >
                        
                            {{posts}}
                        
                    </div> 
                </div>
                -->
            </div>
            <div class="pure-u-1-2 codeBlock">
                <code>
                {
                    <p id="nombreEmpresa">"name" : "{{data.name}}",</p>
                    <p id="nombreCortoEmpresa">"short_name" : "{{data.short_name}}",</p>
                    <p id="lemaEmpresa">"description" : "{{data.description}}"</p>
                }
                </code>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #Content{
        padding: 10px;
        font-family: Helvetica;
    }
    .pure-u-1-2, .pure-u-1-3, .pure-u-1-4, .pure-u-1-5{
        margin: 0.5em auto;
    }
    #inputUrl{
        width: 100%;
    }
    #inputEmpresaCorto{
        float:left;
    }
    .formData{
        background-color: rgba(186, 185, 185, 0.25);
        padding: 10px;
        
        border-radius: 8px;
        
    }
    .codeBlock{
        padding: 10px;
        background-color: #333;
        color:#a6e22e;
        border-radius: 8px;
        
    }
    .Url{
        background-color:#19C65C;
        border-radius: 8px;
        padding: 5px;
    }
</style>

<script>
import Coder from "../components/Coder";
import axios from "axios";
import { ActionTree, ActionContext } from 'vuex';


const urlSite = this.inputUrl;
const apiUrl = `http://manifold-api-pre.azurewebsites.net/manifests`; //Api para obtener manifest de una web
export default {
    name: "Content",
    
    data() {
        return {
            data: {
                name: '',
                short_name: '',
                description: '',
                posts: [],
            }
        }
    },
    created() {
        //this.nombreEmpresa = this.inputEmpresa;
        /* --- Ejemplo de GET a un API o servidor
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            console.log("response",response)
            this.posts = response.data
        })
        */
    },
    methods: {
        consoleData(){
            //console.log(this.datos)
            //console.log(this.$refs.inputEmpresa.value)
            console.log("apiUrl",apiUrl)
            //console.log(this.posts)
            //console.log(this.nombreEmpresa)
           
        },
        actualizoDatos: function(input){
            var inputID = input.target.id;
            console.log("inputID",inputID)
            
            switch(inputID){
                case "inputEmpresa":
                    this.data.name = this.$refs.inputEmpresa.value;
                    break;
                case "inputEmpresaCorto":
                    this.data.short_name = this.$refs.inputEmpresaCorto.value;
                    break;
                case "inputLema":
                    this.data.description = this.$refs.inputLema.value;
                    break;
                default:
                    break;
            }
        },
        refreshDatosPantalla(){
            

        },
        getManifest(){
            const options = {
            siteUrl: this.urlSite 
            };

            const result = axios.post(apiUrl, options)
            .then(result => {

                this.data = result.data.content
                // Al tener ambos los mismos nombres de campos se actualizan todos juntos.
            });
        }

    },
    components: { Coder }
};
</script>
