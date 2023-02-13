<script>
  export default {
    data() {
      return {
        username: ''
      }
    },
    methods: {
      iniciar() {
        // Este método empuja una nueva entrada en la pila de historial.
        // Esto nos permite usar el boton de "ida y vuelta"
        // del navegador, a la vez que nos dirige a la ruta.
        // En este caso '/chats'
        //
        // this.$router.push('/chats')
        //
        // this.$router.push({
        //   path: '/chats',
        //   // añadimos parametros query a la ruta.
        //   query: {
        //     variable1: 1,
        //   },
        //   // por defecto false,
        //   // remplaza en el historial la ruta previa
        //   // por la siguiente '/chats' en este caso.
        //   replace: true,
        // })
        //
        // Tambien se puede reemplazar la ruta en el
        // historial de la siguiente manera.
        // this.$router.replace('/chats')
        //
        // Avanza o retrocede una cantidad entera
        // de pasos en el historial de navegación.
        // En este caso retrocede 1 paso.
        this.$router.go(-1)
      }
    }
  }
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario - {{ username }}</h3>
    <input type="text" placeholder="username" v-model="username" />
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>
