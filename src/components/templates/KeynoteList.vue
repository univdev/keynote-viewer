<style lang="less" scoped>
  .keynote-list {
    position: relative;
    .keynote-add-button {
      position: fixed;
      right: 20px;
      bottom: 20px;
    }
  }
</style>

<template>
  <v-container
    class="keynote-list"
  >
    <v-row>
      <v-col
        v-for="(keynote, key) in items"
        :key="key"
        :xl="2"
        :lg="3"
        :md="6"
        :sm="12"
      >
        <molecule-keynote-card
          :thumbnail="item.thumbnail"
          :title="item.title"
          :author="item.author"
        />
      </v-col>
    </v-row>
    <organism-keynote-upload-form-dialog
      :visible.sync="isVisibleKeynoteUploadForm"
      :label="$t('pages.home.form.label')"
      :title-placeholder="$t('pages.home.form.title.placeholder')"
      :keynote-placeholder="$t('pages.home.form.keynote.placeholder')"
    />
    <molecule-keynote-add-button
      v-if="visibleAddKeynoteButton"
      class="keynote-add-button"
      elevation="2"
      @click="onClickAddKeynoteButton"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    visibleAddKeynoteButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      isVisibleKeynoteUploadForm: false,
    };
  },
  methods: {
    onClickAddKeynoteButton(e: MouseEvent) {
      this.isVisibleKeynoteUploadForm = true;
      this.$emit('click:add-keynote', e);
    },
  },
});
</script>
