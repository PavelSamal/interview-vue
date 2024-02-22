1. На кодсендбоксе будет BaseInput безничего только верстка
часть А - Сделать так, чтобы я v-model работал на него
часть Б - Сделать так, чтобы я мог вешать ивенты типа фокусИн и фокусАут
часть В - Я добавлю второй инпут, но надо чтобы фокусин и фокусаут срабатывали только на инпуте с в-модел

2. Надо написать селект с опциями из массива.
Доп:
- Сделать плейсхолдер, вдруг знает хак с дизейбленной опцией
- Должны быть ключи и работать в-модел
- Надо вывести на экран "selectValue: название опции - from select"
- Сделать так, чтобы на каждую смену селект валуе выкидывался алерт, что сменился селект валуе

<script>
import BaseInputOptions from '@/components/BaseInputOptions.vue';

export default {
  name: 'AppOptions',
  components: { BaseInputOptions },
  data: () => ({
    inputValue: "first",
    selectValue: null,
    focus: false,
  }),
  watch: {
    selectValue(newValue) {
      alert(newValue);
    },
  },
  computed: {
    formattedSelectValue() {
      return `${this.selectValue} - from select`;
    },
    options() {
      return ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
    }
  },
  methods: {
    focusin() {
      this.focus = true;
    },
    focusout() {
      this.focus = false;
    },
    click(event) {
      console.error('click', event);
    }
  },
};
</script>

<template>
  <div>
    <div>
      <base-input-options v-model="inputValue" @focusin="focusin" @focusout="focusout" @click="click"/>
      <div>
        inputValue: {{ inputValue }}
      </div>
      <div>
        focus: {{ focus }}
      </div>
    </div>
  </div>
  <div>
    <select v-model="selectValue">
      <option :value="null" disabled selected>Select your option</option>
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
    <div>
      selectValue: {{ formattedSelectValue }}
    </div>
  </div>
</template>

<style scoped>
</style>
