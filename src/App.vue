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

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import { computed, ref, watch } from 'vue';

const inputValue = ref('first');
const selectValue = ref(null);
const focus = ref(false);

watch(selectValue, (newValue) => {
  alert(newValue);
})

function focusin() {
  focus.value = true;
}

function focusout() {
  focus.value = false;
}

function click(event) {
  console.error('click', event);
}

const formattedSelectValue = computed(() => `${selectValue.value} - from select`)
const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

</script>

<template>
  <div>
    <div>
      <base-input v-model="inputValue" @focusin="focusin" @focusout="focusout" @click="click"/>
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
