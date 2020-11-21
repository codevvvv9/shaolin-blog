<template>
  <div class="section">
    <div class="container">
      <Timeline />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timeline from '@/components/Timeline.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Timeline ,
  },
});
</script>
