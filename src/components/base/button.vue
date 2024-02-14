<script setup>
defineProps({
    title: {
        type: String,
        require: true
    }
})
</script>
<template>
    <button>
        {{ title }}
    </button>
</template>