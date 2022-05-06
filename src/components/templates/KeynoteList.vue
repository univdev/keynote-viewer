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
        <molecule-keynote-card />
      </v-col>
    </v-row>
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
  methods: {
    onClickAddKeynoteButton(e: MouseEvent) {
      this.$emit('click:add-keynote', e);
    },
  },
});
</script>
