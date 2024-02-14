<script setup>
import { reactive, onMounted, ref } from 'vue'
const cardMenu = reactive([
    {
        status: true,
        title: 'Pending',
        price: '2.480,30',
        icon: 'ph:arrow-up-bold',
        margin: '2,15%',
        date: 'Last Month',
        view: 'View More',
    },
    {
        status: false,
        title: 'Paid',
        price: '84.310',
        icon: 'ph:arrow-up-bold',
        margin: '1,10%',
        date: 'Last Month',
        view: 'View More',
    },
    {
        status: true,
        title: 'Rejected',
        price: '12.155',
        icon: 'ph:arrow-up-bold',
        margin: '2,15%',
        date: 'Last Month',
        view: 'View More',
    },
])
const userList = ref([])
onMounted(async () => {
    try {
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/users')
        const data = await response.json()
        userList.value = data.users.slice(0, 6)
    } catch (error) {
        console.error(error);
    }
})
</script>

<template>
    <DefaultLayout>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:ml-4 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <!-- Card component -->
            <!-- <DataStatsOne /> -->
            <CardsHeader :cardMenu="cardMenu" />
        </div>

        <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 lg:ml-4 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <!-- ====== Chart One Start -->
            <!-- <ChartOne /> -->
            <!-- ====== Chart One End -->
            <!-- hi -->
            <!-- ====== Chart Two Start -->
            <!-- <ChartTwo /> -->
            <!-- ====== Chart Two End -->

            <!-- ====== Chart Three Start -->
            <!-- <ChartThree /> -->
            <!-- ====== Chart Three End -->

            <!-- ====== Map One Start -->
            <!-- <MapOne /> -->
            <!-- ====== Map One End -->

            <!-- ====== Table One Start -->
            <div class="col-span-12 xl:col-span-8">
                <TableOne :userList="userList" />
                <!-- hi -->
            </div>
            <!-- ====== Table One End -->

            <!-- ====== Chat Card Start -->
            <!-- <ChatCard /> -->
            <!-- ====== Chat Card End -->
        </div>
    </DefaultLayout>
</template>