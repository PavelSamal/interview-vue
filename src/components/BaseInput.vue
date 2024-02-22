<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
import { computed, useAttrs } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const textValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
<div class="base-input">
  <div>
    <input type="text" v-model="textValue"  v-bind="$attrs"/>
    <input type="text"/>
  </div>
</div>
</template>

<style scoped>

</style>
