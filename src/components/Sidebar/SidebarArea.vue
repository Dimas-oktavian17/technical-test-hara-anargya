<script setup>
import { ref, reactive, onMounted, inject } from 'vue'
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const sidebarBurger = inject('sidebarBurger')
const CurrentRouter = useRoute().name
import OverviewIcon from '../../assets/images/icon/OverviewIcon.svg'
import DashboardIcon from '../../assets/images/icon/solar_home-smile-linear.svg'
const sidebarMenu = reactive([
  {
    name: 'Dashboard',
    route: '/',
    icon: DashboardIcon
  },
  {
    name: 'Overview',
    route: '/Overview',
    icon: OverviewIcon
  }
])
</script>
<template>
  <aside :class="[
    sidebarBurger ?
      'translate-x-0' : '-translate-x-full'
  ]"
    class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#FFFFFF] duration-300 ease-linear shadow-3 lg:static lg:translate-x-0">
    <!-- SIDEBAR HEADER -->
    <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <router-link to="/" class="text-3xl font-extrabold ">
        heylink.
      </router-link>

      <button class="2xsm:block lg:hidden" @click="sidebarBurger = !sidebarBurger">
        <IconVue icon="charm:cross" v-if="sidebarBurger" />
        <IconVue icon="charm:menu-hamburger" v-else />
      </button>
    </div>
    <!-- SIDEBAR HEADER -->

    <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
      <!-- Sidebar Menu -->
      <RouterLink v-for="({ name, route, icon, index }) in sidebarMenu" :key="index" :to="route">
        <div :class="[name === CurrentRouter ? 'bg-[#E3F2FD]' : '']"
          class="w-full px-4 py-3 mx-auto text-start rounded-lg max-w-60  text-[#424242] font-medium">
          <div class="flex flex-row items-center justify-start">
            <img :src="icon" :alt="name" class="mr-3">
            {{ name }}
          </div>
        </div>
      </RouterLink>
      <!-- Sidebar Menu -->
    </div>
  </aside>
</template>
