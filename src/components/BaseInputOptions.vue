<script>
export default {
  name: 'BaseInputOptions',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  computed: {
    textValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  mounted() {
    console.error(this?.modelValue);
  },
};
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
