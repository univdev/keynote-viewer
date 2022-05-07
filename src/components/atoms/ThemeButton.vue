<template>
  <v-btn
    v-bind="{ ...$attrs, ...$props }"
    @click="onClick"
  >
    <v-icon
      v-if="!isDark"
    >
      mdi-white-balance-sunny
    </v-icon>
    <v-icon
      v-else
    >
      mdi-moon-waxing-crescent
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import type { ThemeType } from '@/types/theme';

export default Vue.extend({
  props: {
    value: {
      type: String as PropType<ThemeType>,
      required: false,
      default: 'light',
    },
  },
  computed: {
    isDark() {
      return this.value === 'dark';
    },
  },
  methods: {
    onClick() {
      const { value } = this;
      this.$emit('click');
      this.$emit('input', value === 'light' ? 'dark' : 'light');
    },
  },
});
</script>
