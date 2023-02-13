<template>
    <h1>Session</h1>
    <!-- 
        Se usan varias vistas para mantener
        independencia entre ellas.

        La primera vista puede ser nombrada,
        pero no es obligatorio.
     -->
     <router-view />
     <router-view name="register" />
</template>