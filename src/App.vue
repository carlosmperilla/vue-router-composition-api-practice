<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
</script>

<template>
  <div>
    <!-- 'router-link' te da el link de la ruta. -->
    <!-- <router-link to="/">Ir a Home</router-link> -->
    <router-link :to="{ name: 'home' }">Ir a Home</router-link>
    <router-link to="/session">Ir a Session</router-link>
    <router-link to="/chats">Ir a Chats</router-link>
    <router-link :to="{ name: 'about' }">Ir a About</router-link>
    <!-- 
      Se puede usar una variable interna en el script
      de componentes.
      Pero este enfoque es más versatil al no depender de
      la lectura de variables, sino de la ruta a representar.
      Recordar que 'router.hasRoute' requiere de una ruta
      con nombre definido.
     -->
     <router-link v-if="router.hasRoute('profile')" :to="{ name: 'profile' }">Ir a Profile</router-link>
  </div>
  <!-- 'router-view' es un componente especial que dibuja,
        el componente asignado a la ruta correcpondiente.
  -->
  <router-view/>
</template>

<style>
</style>
