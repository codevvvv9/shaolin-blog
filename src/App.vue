<template>
  <Home></Home>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Home from "@/views/Home.vue"; // @ is an alias to /src

export default defineComponent({
  name: "APP",
  components: {
    Home,
  },
});
</script>
<style></style>
