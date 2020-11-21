<template>
  <nav class="is-primary panel">
    <p class="panel-tabs">
      <a data-test="period" v-for="(period, index) in periods" :key="index">
        {{ period }}
      </a>
    </p>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Period } from "@/types";
export default defineComponent({
  name: "Timeline",
  setup() {
    const periods: Period[] = ["今天", "本周", "本月"];

    return {
      periods,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
