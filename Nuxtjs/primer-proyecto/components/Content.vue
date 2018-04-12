
<template>
    <div id="Content">
        <div class="pure-g">
                    <div class="pure-u-1-3">
                        <label>Ingresar URL:</label>
                    </div>
                    <div class="pure-u-1-3">
                        <input type="text" id="inputUrl" ref="inputUrl" v-model="urlSite">
                    </div>
                    <div class="pure-u-1-3">
                        <button v-on:click="getManifest">Get Manifest</button>
                    </div>
                </div>
        <div class="pure-g">
            <div class="pure-u-1-2">
                
                <div class="pure-g"> 
                    <div class="pure-u-1-2">
                        <label for="inputEmpresa">Name</label>
                    </div>
                    <div class="pure-u-1-2"> 
                        <input id="inputEmpresa" type="text" ref="inputEmpresa" v-model="nombreEmpresa"
                            v-on:keydown.tab="actualizoDatos" autofocus>
                    </div>
                </div>
                <div class="pure-g"> 
                    <div class="pure-u-1-2">
                        <label for="inputEmpresaCorto">Short Name</label>
                    </div>
                    <div class="pure-u-1-2">
                        <input id="inputEmpresaCorto" type="text" ref="inputEmpresaCorto"
                         v-on:keydown.tab="actualizoDatos"/>
                    </div>
                    
                </div>
                <div class="pure-g"> 
                    <div class="pure-u-1-2">
                        <label for="inputLema">Description</label>
                    </div>
                    <div class="pure-u-1-2">
                        <input id="inputLema" type="text" ref="inputLema"
                        v-on:keydown.tab="actualizoDatos"/>
                    </div>
                    
                </div>
                
                
                <div class="pure-g"> 
                    <button v-on:click="consoleData">Console Log</button>
                </div>
                <!-- 

                <div class="pure-g" v-bind="datos">
                    <div class="pure-u-1-1" >
                        
                            {{posts}}
                        
                    </div> 
                </div>
                -->
            </div>
            <div class="pure-u-1-2">
                <code>
                <p id="nombreEmpresa">Name: {{data.name}}</p>
                <p id="nombreCortoEmpresa">Short Name: {{data.short_name}}</p>
                <p id="lemaEmpresa">Description: {{data.description}}</p>
                </code>
            </div>
        </div>
    </div>
</template>

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
