<script setup>
import { ref, watchEffect, toRefs, computed } from 'vue'

const props = defineProps({
  userList: {
    type: Array,
    required: true,
  }
})
const first_name = ref('')
const last_name = ref('')
const phone = ref(null)
const open = ref(false)
const profile_picture = ref(null)
const street = ref('')
const city = ref('')
const state = ref('')
const country = ref('')
const email = ref('')
const HandlePopup = (id) => {
  const productMenu = props.userList.find((item) => item.id === id)
  if (productMenu) {
    open.value = true
    first_name.value = productMenu.first_name
    last_name.value = productMenu.last_name
    phone.value = productMenu.phone
    profile_picture.value = productMenu.profile_picture
    street.value = productMenu.street
    city.value = productMenu.city
    state.value = productMenu.state
    country.value = productMenu.country
    email.value = productMenu.email
  }
}
</script>

<template>
  <div class="rounded-[10px] border border-stroke bg-white px-5 pt-6 pb-2.5 drop-shadow-3 sm:px-7.5 xl:pb-1">
    <h4 class="mb-6 text-lg font-semibold text-[#080808] drop-shadow-3">User List</h4>
    <div class="flex flex-col">
      <div class="grid grid-cols-7 rounded-sm bg-[#FAFBFC] py-4 drop-shadow-3">
        <div class="p-2.5 xl:p-5">
          <p class="text-base
           text-[#7C7C7C] font-semibold capitalize ">
            ID
          </p>
        </div>
        <div class="p-2.5 xl:p-5">
          <p class="text-base
           text-[#7C7C7C] font-semibold capitalize ">
            User
          </p>
        </div>
        <div class="p-2.5 xl:p-5">
          <p class="text-base
           text-[#7C7C7C] font-semibold capitalize ">
            Date Of Birth
          </p>
        </div>
        <div class="flex flex-col p-2.5 xl:p-5">
          <p class="text-base text-[#7C7C7C] font-semibold capitalize ">
            Email
          </p>
        </div>
        <div class="p-2.5 xl:p-5">
          <p class="text-base
           text-[#7C7C7C] font-semibold capitalize ">
            Job
          </p>
        </div>
        <div class="p-2.5 xl:p-5">
          <p class="text-base
           text-[#7C7C7C] font-semibold capitalize ">
            Country
          </p>
        </div>
        <div class="p-2.5 xl:p-5">
          <p class="text-base
           text-[#7C7C7C] font-semibold capitalize ">
            Action
          </p>
        </div>

      </div>

      <!-- api table -->
      <div
        v-for="({ id, profile_picture, job, first_name, last_name, email, date_of_birth, country, index }) in props.userList"
        :key="index" class="grid grid-cols-7 rounded-sm bg-[#FAFBFC] py-4 drop-shadow-3">
        <div class="p-2.5 xl:p-5 flex flex-col justify-center items-start ">
          <p class="text-xs  text-[#7C7C7C] font-semibold capitalize ">
            {{ id }}
          </p>
        </div>
        <div class="p-2.5 xl:p-5  flex flex-row justify-center items-center">
          <img :src="profile_picture" :alt="first_name" width="24" class="w-6 h-6 rounded-full">
          <div class="flex flex-row">
            <p class="text-xs  text-[##080808] font-medium capitalize ml-1">
              {{ first_name }} {{ last_name }}
            </p>
          </div>
        </div>
        <div class="p-2.5 xl:p-5 flex flex-col justify-center items-start">
          <p class="text-xs  text-[#686868] font-normal  capitalize ">
            {{ date_of_birth }}
          </p>
        </div>
        <div class="p-2.5 xl:p-5 flex flex-col justify-center items-start">
          <p class="text-[6px] text-[#080808] font-medium capitalize ">
            {{ email }}
          </p>
        </div>
        <div class="p-2.5 xl:p-5 flex flex-col justify-center items-start">
          <p class="text-xs text-[#686868] font-normal capitalize ">
            {{ job }}
          </p>
        </div>
        <div class="p-2.5 xl:p-5 flex flex-col justify-center items-start">
          <p class="text-xs  text-[#080808] font-medium capitalize ">
            {{ country }}
          </p>
        </div>
        <div class="p-2.5 xl:p-5 flex flex-col justify-center items-start">
          <div class="grid grid-cols-2">
            <button disabled
              class="text-[#080808] flex flex-col items-center justify-center p-2 mr-1 text-xs bg-white rounded drop-shadow-3">
              Select
            </button>
            <button @click="HandlePopup(id)"
              class="text-[#080808] flex flex-col items-center justify-center p-2 mr-1 text-xs bg-white rounded drop-shadow-3">
              View Detail
            </button>
          </div>
        </div>
      </div>

      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 rounded-xl ">
        <!-- Modal content -->
        <div class="p-8 bg-white drop-shadow-3 rounded w-[500px]">
          <div class="flex flex-col items-end justify-end">
            <button @click="open = false" class="">
              <IconVue icon="charm:cross" class="text-[#FA1212] w-5 h-auto" />
            </button>
          </div>
          <div class="flex flex-row items-start justify-start">
            <img :src="profile_picture" class="h-auto rounded-full w-31" :alt="first_name">
            <div class="flex flex-col self-center justify-center pl-4">
              <h1 class="text-[#080808] font-medium text-3xl">{{ first_name }} {{ last_name }}</h1>
              <h1 class="text-[#080808] font-medium text-xs">{{ email }}</h1>
              <h1 class="text-[#080808] font-medium text-xs">{{ phone }}</h1>
            </div>
          </div>
          <div class="flex flex-row items-start justify-start">
            <div class="flex flex-col self-center justify-center pt-4">
              <h1 class="text-[#080808] font-medium text-lg">Street: {{ street }}</h1>
              <h1 class="text-[#080808] font-medium text-lg">City: {{ city }}</h1>
              <h1 class="text-[#080808] font-medium text-lg">State: {{ state }}</h1>
              <h1 class="text-[#080808] font-medium text-lg">Country: {{ country }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  position: absolute;
  background-color: gray;
  color: black;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 555px;
  margin-left: -150px;
}
</style>