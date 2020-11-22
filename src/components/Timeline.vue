<template>
  <nav class="is-primary panel">
    <p class="panel-tabs">
      <a
        :class="[period === selectedPeriod ? 'is-active' : '']"
        data-test="period"
        v-for="(period, index) in periods"
        :key="index"
        @click="setPeriod(period)"
      >
        {{ period }}
      </a>
    </p>

    <TimelinePost v-for="post in posts" :key="post.id" :post="post" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Period } from "@/types";
import { todayPost, thisWeek, thisMonth } from "@/mock";
import moment from "moment";
import TimelinePost from "./TimelinePost.vue";
import { useStore } from "@/store";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default defineComponent({
  name: "Timeline",
  components: {
    TimelinePost,
  },
  async setup() {
    const periods: Period[] = ["今天", "本周", "本月"];
    const selectedPeriod = ref<Period>("今天");

    const setPeriod = (period: Period) => {
      selectedPeriod.value = period;
    };

    const store = useStore()
    console.log("setup -> store", store)
    

    await delay(2000);

    const posts = computed(() =>
      [todayPost, thisWeek, thisMonth].filter((post) => {
        if (
          selectedPeriod.value === "今天" &&
          post.created.isAfter(moment().subtract(1, "day"))
        ) {
          return true;
        }
        if (
          selectedPeriod.value === "本周" &&
          post.created.isAfter(moment().subtract(7, "day"))
        ) {
          return true;
        }
        if (
          selectedPeriod.value === "本月" &&
          post.created.isAfter(moment().subtract(1, "month"))
        ) {
          return true;
        }

        return false;
      })
    );
    return {
      periods,
      selectedPeriod,
      setPeriod,
      posts,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
