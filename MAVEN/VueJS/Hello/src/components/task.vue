<script setup>
defineProps({
    first: {
        type: String,
        required: true,
    },
});
</script>

<template>

    <h1 class="task">{{ first }}</h1>
    <h3>
    Vue First Task
    </h3>
</template>

<style scoped>
h1{
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}
h3 {
font-size: 1.2rem;
}
.task{
    text-align: center;
}

</style>