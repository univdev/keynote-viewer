<template>
  <v-form
    ref="form"
  >
    <v-file-input
      :value="keynotes"
      :placeholder="keynotePlaceholder"
      :multiple="keynoteMultiple"
      @input="onInput('files', $event)"
    />
    <v-text-field
      :value="title"
      :label="titlePlaceholder"
      @input="onInput('title', $event)"
    />
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    keynotes: {
      type: Array,
      required: false,
      default: () => [],
    },
    keynotePlaceholder: {
      type: String,
      required: false,
      default: '키노트 파일을 업로드 해주세요',
    },
    keynoteMultiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    titlePlaceholder: {
      type: String,
      required: false,
      default: '제목',
    },
  },
  computed: {
    form(): VForm {
      return this.$refs.form as VForm;
    },
  },
  methods: {
    onInput(key: string, value: any) {
      this.$emit(`update:${key}`, value);
    },
  },
});
</script>
