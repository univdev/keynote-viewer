<style lang="less" scoped>
  .app-bar {
    .locales {
      /deep/ .v-input__slot {
        margin-bottom: 0;
      }
      /deep/ .v-text-field__details {
        display: none;
      }
    }
  }
</style>

<template>
  <v-app-bar
    v-bind="{ ...$attrs, ...$props }"
    class="app-bar"
  >
    <h3>{{ title }}</h3>
    <v-spacer />
    <div class="d-flex align-center">
      <v-select
        class="locales"
        :value="locale"
        :items="locales"
        :placeholder="localePlaceholder"
        item-text="name"
        item-value="code"
        solo
        @input="onChangeLocale"
      />
      <atom-theme-button
        :value="theme"
        class="ml-2"
        plain
        @input="onChangeTheme"
      />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import type { Locale } from '@/types/locale';
import { ThemeType } from '@/types/theme';

export default Vue.extend({
  props: {
    theme: {
      type: String as PropType<ThemeType>,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: '페이지 제목',
    },
    locales: {
      type: Array as PropType<Locale[]>,
      required: false,
      default: () => [],
    },
    locale: {
      type: String,
      required: false,
      default: null,
    },
    localePlaceholder: {
      type: String,
      required: false,
      default: '언어 선택',
    },
  },
  methods: {
    onChangeTheme() {
      this.$emit('update:theme', this.theme === 'dark' ? 'light' : 'dark');
    },
    onChangeLocale(locale: string) {
      this.$emit('update:locale', locale);
    },
  },
});
</script>
