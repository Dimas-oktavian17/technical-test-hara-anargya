<script setup>
import { RouterView } from 'vue-router';
import { provide, ref } from 'vue'
const sidebarBurger = ref(false)
provide('sidebarBurger', sidebarBurger)
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
