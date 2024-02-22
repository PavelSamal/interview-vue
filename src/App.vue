<script setup>
import BaseInput from "@/components/BaseInput.vue";
import { computed, ref, watch } from "vue";

const inputValue = ref("first");
const selectValue = ref(null);
const focus = ref(false);

watch(selectValue, (newValue) => {
  alert(newValue);
});

function focusin() {
  focus.value = true;
}

function focusout() {
  focus.value = false;
}

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
</script>

<template>
  <div>
    <div>
      <base-input v-model="inputValue" />
      <div>inputValue: {{ inputValue }}</div>
      <div>focus: {{ focus }}</div>
    </div>
  </div>
</template>

<style scoped></style>
