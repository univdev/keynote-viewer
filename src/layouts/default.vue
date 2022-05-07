<template>
  <v-app
    :style="style"
  >
    <organism-app-bar
      :theme="theme"
      :title="$t('global.title')"
      :locales="locales"
      :locale="locale"
      :locale-placeholder="$t('global.locale.placeholder')"
      fixed
      app
      @update:theme="onUpdateTheme"
      @update:locale="onUpdateLocale"
    />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapState } from 'vuex';
import { LocaleObject } from '@nuxtjs/i18n';
import { ThemeType } from '@/types/theme';

export default Vue.extend({
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    ...mapState(
      'app',
      ['theme'],
    ),
    locales(): LocaleObject[] {
      return this.$i18n.locales as LocaleObject[];
    },
    locale(): string {
      return this.$i18n.locale;
    },
    style(): object | null {
      if (!this.isLoaded) return { visibility: 'hidden' };
      return null;
    },
  },
  watch: {
    theme(theme: ThemeType) {
      this.setVuetifyTheme(theme);
    },
  },
  mounted() {
    this.setTheme(this.getTheme());
    this.setVuetifyTheme(this.theme);
    this.isLoaded = true;
  },
  methods: {
    ...mapMutations(
      'app',
      {
        setTheme: 'SET_THEME',
      },
    ),
    setVuetifyTheme(theme: ThemeType) {
      this.$vuetify.theme.dark = theme === 'dark';
    },
    getTheme(): ThemeType {
      if (!window.matchMedia) return 'light';
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDark ? 'dark' : 'light';
    },
    onUpdateTheme(theme: ThemeType) {
      this.setTheme(theme);
    },
    onUpdateLocale(locale: string) {
      this.switchLocalePath(locale);
    },
  },
});
</script>