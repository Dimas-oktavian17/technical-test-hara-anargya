<script setup>
defineProps({
    cardMenu: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:gap-7.5">
        <div v-for="({
            status,
            title,
            price,
            icon,
            margin,
            date,
            view,
            index
        }) in cardMenu" :key="index" class="flex flex-col  text-black bg-white rounded-[10px] drop-shadow-3  ">
            <header class="flex flex-row items-center justify-between px-5 pt-5">
                <span class="text-[#727272] text-[12px] font-semibold leading-[14.52px]">
                    {{ title }}
                </span>
                <div class="px-2 py-2 bg-[#F2F4F7] rounded flex flex-col items-center justify-center">
                    <IconVue class="h-auto w-[22px] text-[#817F7F]" icon="solar:square-transfer-horizontal-broken" />
                </div>
            </header>
            <h1 class="font-semibold text-xl text-[#080808] px-5 pb-2">{{ price }}</h1>
            <footer class="flex flex-row items-center justify-between px-5 py-3 bg-[#F9FAFC]">

                <div class="flex flex-row items-center justify-center py-2 rounded">
                    <IconVue :class="[status ? 'rotate-45 text-[#4CBF93]' : 'rotate-[135deg] text-[#EE7C85]']"
                        class="h-auto w-[15.57px] text-[#817F7F]" :icon="icon" />
                    <span class="text-[10px] font-semibold leading-[12px] pl-1"
                        :class="[status ? 'text-[#4CBF93]' : 'text-[#EE7C85]']">
                        {{ margin }}
                    </span>
                    <span class="text-[10px] text-[#AAAAAA] font-medium leading-[12px] pl-2">
                        {{ date }}
                    </span>
                </div>
                <span class="text-[#727272] text-[12px] font-semibold leading-[14.52px]">
                    {{ view }}
                </span>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.boxShadow {
    box-shadow: 1px 1px 11px 12px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 1px 1px 11px 12px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 1px 1px 11px 12px rgba(0, 0, 0, 0.2);
}
</style>