<script setup>
</script>

<template>
  <div>
    <!-- 'router-link' te da el link de la ruta. -->
    <!-- <router-link to="/">Ir a Home</router-link> -->
    <router-link :to="{ name: 'home' }">Ir a Home</router-link>
    <router-link to="/session">Ir a Session</router-link>
    <router-link to="/chats">Ir a Chats</router-link>
    <router-link :to="{ name: 'about' }">Ir a About</router-link>
  </div>
  <!-- 'router-view' es un componente especial que dibuja,
        el componente asignado a la ruta correcpondiente.
  -->
  <router-view/>
</template>

<style>
</style>
