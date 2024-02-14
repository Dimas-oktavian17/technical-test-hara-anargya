<script setup>

import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

<<<<<<< HEAD
import { ref, watch, computed } from 'vue'
=======
import { ref, watchEffect, watch, onMounted } from 'vue'
>>>>>>> 1a740eb72e8a006e8392cdf25a9eb3e2f6ec96d3
import province from '../../assets/js/province.js'
import city from '../../assets/js/city.js'
const provinces = ref(province)
const cities = ref([])


const selectedProvince = ref(null)
const pageTitle = ref('Overview')

watch(selectedProvince, (pronvinceID) => {

    if (pronvinceID !== null) {
        cities.value = city.filter(city => city.provinsi_id === pronvinceID)
    } else {
        cities.value = []
    }
}
    , { immediate: true }

)

</script>

<template>
    <DefaultLayout>
        <!-- Breadcrumb Start -->
        <BreadcrumbDefault :pageTitle="pageTitle" />
        <!-- Breadcrumb End -->

        <!-- ====== Form Layout Section Start -->
        <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <div class="flex flex-col gap-9">
                <!-- Contact Form Start -->
                <!-- Contact Form Start -->
                <DefaultCard cardTitle="Contact Form">
                    <form action="#">
                        <div class="p-6.5">

                            <!-- location api -->
                            <div class="mb-4.5">
                                <label class="mb-2.5 block text-black dark:text-white mt-2.5">Province</label>

                                <div class="relative z-20 bg-transparent ">
                                    <select v-model="selectedProvince"
                                        class="relative z-20 w-full px-5 py-3 text-black transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary ">
                                        <option value="" disabled selected>Type your subject</option>
<<<<<<< HEAD
                                        <option v-for="(
                                        { name, id, index }) in provinces" :key="index" :value="id">
=======
                                        <option v-for="({ name, id, index }) in provinces" :key="index" :value="id">
>>>>>>> 1a740eb72e8a006e8392cdf25a9eb3e2f6ec96d3
                                            {{ name }}
                                        </option>
                                    </select>

                                    <span class="absolute z-30 -translate-y-1/2 top-1/2 right-4">
                                        <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.8">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                    fill=""></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <!-- City -->
                                <label class="mb-2.5 block text-black dark:text-white mt-2.5">Province</label>

                                <div class="relative z-20 bg-transparent ">
                                    <select
                                        class="relative z-20 w-full px-5 py-3 text-black transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary ">
                                        <option value="" disabled selected>Type your subject</option>
                                        <option v-for="({ name, id, index }) in cities" :key="index" :value="id">
                                            {{ name }}
                                        </option>
                                    </select>

                                    <span class="absolute z-30 -translate-y-1/2 top-1/2 right-4">
                                        <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.8">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                    fill=""></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <!-- end city -->

                            </div>
                            <!-- end location api -->
                            <button
                                class="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
                                Send Message
                            </button>
                        </div>
                    </form>
                </DefaultCard>
                <!-- Contact Form End -->
            </div>


        </div>
        <!-- ====== Form Layout Section End -->
    </DefaultLayout>
</template>
