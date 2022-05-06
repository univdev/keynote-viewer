<template>
  <v-dialog
    :value="visible"
    :max-width="750"
    @input="onChangeVisible"
    @click:outside="onClose"
  >
    <v-card>
      <v-card-title>
        {{ title }}
        <v-spacer />
        <v-btn
          color="error"
          @click="onClose"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <molecule-keynote-upload-form
          ref="editor"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="onSubmit"
        >
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
        <v-btn
          color="error"
          @click="onReset"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import KeynoteUploadForm from '@/components/molecules/KeynoteUploadForm.vue';

type EditorType = InstanceType<typeof KeynoteUploadForm>;

export default Vue.extend({
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: '키노트 업로드',
    },
  },
  computed: {
    editor(): EditorType {
      return this.$refs.editor as EditorType;
    },
  },
  methods: {
    onChangeVisible(flag: boolean) {
      this.$emit('update:visible', flag);
    },
    onClose() {
      this.$emit('update:visible', false);
    },
    onReset() {
      const form: VForm = this.editor.form;
      form.reset();
      this.$emit('reset', form);
    },
    onSubmit() {
      const form: VForm = this.editor.form;
      this.$emit('submit', form);
    },
  },
});
</script>
