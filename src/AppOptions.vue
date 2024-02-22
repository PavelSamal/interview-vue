<script>
import BaseInputOptions from "@/components/BaseInputOptions.vue";

export default {
  name: "AppOptions",
  components: { BaseInputOptions },
  data: () => ({
    inputValue: "first",
    selectValue: null,
    focus: false,
  }),
  computed: {
    options() {
      return ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    },
  },
  methods: {
    focusin() {
      this.focus = true;
    },
    focusout() {
      this.focus = false;
    },
  },
};
</script>

<template>
  <div>
    <div>
      <base-input-options v-model="inputValue" />
      <div>inputValue: {{ inputValue }}</div>
      <div>focus: {{ focus }}</div>
    </div>
  </div>
</template>

<style scoped></style>
