<style lang="less" scoped>

</style>

<template>
  <v-app-bar
    v-bind="{ ...$attrs, ...$props }"
  >
    <v-spacer />
    <atom-theme-button
      :value="theme"
      @input="onChangeTheme"
    />
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ThemeType } from '@/types/theme';

export default Vue.extend({
  props: {
    theme: {
      type: String as PropType<ThemeType>,
      required: false,
      default: null,
    },
  },
  methods: {
    onChangeTheme() {
      this.$emit('update:theme', this.theme === 'dark' ? 'light' : 'dark');
    },
  },
});
</script>
