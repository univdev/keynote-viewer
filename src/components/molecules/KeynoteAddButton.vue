<template>
  <v-btn
    v-bind="{ ...$attrs, ...$props }"
    circle
    fab
    @click="onClick"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
  methods: {
    onClick(e: MouseEvent) {
      this.$emit('click', e);
    },
  },
});
</script>
