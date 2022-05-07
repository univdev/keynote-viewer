<style lang="less" scoped>
  .error-viewer {
    text-align: center;
  }
</style>

<template>
  <div class="error-viewer">
    <v-icon
      class="icon mb-2"
      :size="iconSize"
    >
      {{ icon }}
    </v-icon>
    <h2 class="code">{{ code }}</h2>
    <p class="description mt-2">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    code: {
      type: Number,
      required: false,
      default: 404,
    },
    icon: {
      type: String,
      required: false,
      default: 'mdi-alert-circle',
    },
    iconSize: {
      type: Number,
      required: false,
      default: 96,
    },
    description: {
      type: String,
      required: false,
      default: '페이지를 찾을 수 없습니다.',
    },
  },
});
</script>