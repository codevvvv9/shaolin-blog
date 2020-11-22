<template>
  <Suspense>
    <template #default>
      <Timeline />
    </template>
    <template #fallback>
      <Progress />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timeline from "@/components/Timeline.vue"; // @ is an alias to /src
import Progress from "@/components/Progress.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Timeline,
    Progress,
  },
});
</script>
