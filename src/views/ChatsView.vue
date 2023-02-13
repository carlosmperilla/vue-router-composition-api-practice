<template>
    <div>
        <aside>
            <div v-for="chat in chats" :key="chat.id">
                <router-link :to="`/chats/${chat.id}`">
                    {{ chat.name }}
                </router-link>
            </div>
        </aside>
        <article>
            <!-- 
                Con this.$router podemos acceder a la API
                de vue-router y efectuar acciones.
                
                Con this.$route nos da acceso a la ruta actual.
             -->
             <!-- {{ this.$route.params.chatId }} -->
             
             <!-- 
                Query parameter
                Ejemplo:
                http://localhost:5173/chats/2?hola=mundo
            -->
             <!-- {{ this.$route.query }} -->

             <!-- 
                Añadimos un nuevo 'router-view'
                por mostrar las rutas anidadas.
              -->
              <router-view />
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chats: []
            }
        },
        // Usamos watchers para observar los cambios reactivos.
        // de variables, en este caso de los parametros de ruta.
        // se usa '$route.params', sin this, porque no es una función.
        // y además si se usa directamente(sin comillas) 
        // accede al valor, por ello usamos un string.
        // watch: {
        //     '$route.params' : (val) => {
        //         console.log('update params', val)
        //     }
        // },
        // Recordar el ciclo de vida de Vue.
        // Vamos a usarlo como alternativa a watch.
        // Usando watchers internamente.
        created() {
            // El primer argumento es una función
            // que encapsula la variable a observar.
            //
            // El segundo argumento es
            // La acción a efectuar con la observación.
            //
            // El tercer argumento indica
            // que debe observar desde la creación,
            // es decir antes del primer cambio.
            // https://vuejs.org/api/component-instance.html#watch
            this.$watch(
                () => this.$route.params,
                (val) => {
                    console.log('update params', val)
                    // Actualizamos los chats.
                    this.chats = [
                        { id: 1, name: 'Ximena' },
                        { id: 2, name: 'Daniel' },
                        { id: 3, name: 'Miguel' },
                    ]
                },
                { immediate: true }
            )
        }
    }
</script>