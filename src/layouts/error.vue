<style lang="less" scoped>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<template>
  <div class="error-page">
    <organism-error-viewer
      :code="error.statusCode"
      :description="message"
    />
  </div>
</template>

<script lang="ts">
import Vue, { ComputedOptions } from 'vue';

export default Vue.extend({
  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    message() {
      const messages: any = this.$i18n.t('pages.error.messages') as ComputedOptions<any>;
      const message = messages[this.error.statusCode] || messages.unknown;
      return message;
    },
  },
});
</script>
