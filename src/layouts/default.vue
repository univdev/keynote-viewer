<style lang="less" scoped>

</style>

<template>
  <v-app>
    <organism-app-bar
      :theme="theme"
      fixed
      app
      @update:theme="onUpdateTheme"
    />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapState } from 'vuex';
import { ThemeType } from '@/types/theme';

export default Vue.extend({
  computed: {
    ...mapState(
      'app',
      ['theme'],
    ),
  },
  watch: {
    theme(theme: ThemeType) {
      this.setVuetifyTheme(theme);
    },
  },
  created() {
    this.setVuetifyTheme(this.theme);
  },
  methods: {
    ...mapMutations(
      'app',
      {
        setTheme: 'SET_THEME',
      },
    ),
    onUpdateTheme(theme: ThemeType) {
      this.setTheme(theme);
    },
    setVuetifyTheme(theme: ThemeType) {
      this.$vuetify.theme.dark = theme === 'dark';
    },
  },
});
</script>