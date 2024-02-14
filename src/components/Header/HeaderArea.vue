<script setup>
import { RouterLink } from 'vue-router'
import { inject } from 'vue'
// import DarkModeSwitcher from './DarkModeSwitcher.vue'
// import DropdownMessage from './DropdownMessage.vue'
// import DropdownNotification from './DropdownNotification.vue'
// import DropdownUser from './DropdownUser.vue'

// const { isSidebarOpen, toggleSidebar } = useSidebarStore()
const sidebarBurger = inject('sidebarBurger')
</script>

<template>
  <header class="sticky top-0 flex w-full bg-white shadow-3 shadow-white z-999">
    <div class="flex items-center justify-between flex-grow px-4 py-5 shadow-2 md:px-6 2xl:px-11 ">
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle BTN -->
        <button class="z-99999 block rounded-sm bg-white p-1.5 shadow-sm lg:hidden"
          @click="sidebarBurger = !sidebarBurger">
          <IconVue icon="charm:cross" v-if="sidebarBurger" />
          <IconVue icon="charm:menu-hamburger" v-else />
        </button>
        <!-- Hamburger Toggle BTN -->
        <RouterLink class="flex-shrink-0 block lg:hidden text-[#080808] font-semibold text-[17px] leading-[20.57px]"
          to="/">
          Conversion
        </RouterLink>
      </div>
      <!-- <div class="hidden sm:block">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div class="relative">
            <button class="absolute left-0 -translate-y-1/2 top-1/2">
              <svg class="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="20" height="20"
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                  fill="" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                  fill="" />
              </svg>
            </button>

            <input type="text" placeholder="Type to search..."
              class="w-full pr-4 bg-transparent xl:w-125 pl-9 focus:outline-none" />
          </div>
        </form>
      </div> -->

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <li class="text-[#080808] hidden lg:block font-semibold ml-4 text-[17px] leading-[20.57px]">
            Conversion
            <!-- Dark Mode Toggler -->
            <!-- <DarkModeSwitcher /> -->
            <!-- Dark Mode Toggler -->
          </li>

          <!-- Notification Menu Area -->
          <!-- <DropdownNotification /> -->
          <!-- Notification Menu Area -->

          <!-- Chat Notification Area -->
          <!-- <DropdownMessage /> -->
          <!-- Chat Notification Area -->
        </ul>

        <!-- User Area -->
        <!-- <DropdownUser /> -->
        <!-- User Area -->
      </div>
    </div>
  </header>
</template>
