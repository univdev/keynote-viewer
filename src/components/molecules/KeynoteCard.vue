<style lang="less" scoped>

</style>

<template>
  <v-card>
    <v-img
      :src="thumbnail"
    />
    <v-card-title>
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    thumbnail: {
      type: String,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: '제목',
    },
  },
});
</script>
