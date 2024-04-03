<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    {{ count }}
    <br />
    <v-btn block color="primary" @click="count++"> Add </v-btn>
</template>
