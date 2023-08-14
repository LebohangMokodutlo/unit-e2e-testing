<template>
    <div>
        <album-axios />
        <axios-component />
        <my-axios/>
        <count-char />
        <method-component />
        <test-driven />
        <vue-props />
      <button id="trig-counter" @click="incrementCounter">ADD</button>
      <p>{{ counter }}</p>

      <br>

      <p>another: {{ counter }}</p>
    <button id="trig-counter" @click="turncounter">add</button>
    </div>
  </template>
  
  
  <script>
  import AlbumAxios from '@/components/AlbumAxios.vue'
  import AxiosComponent from '@/components/AxiosComponent.vue'
  import CountChar from '@/components/CountChar.vue'
  import MethodComponent from '@/components/MethodComponent.vue'
  import MyAxios from '@/components/MyAxios.vue'
  import TestDriven from '@/components/TestDriven.vue'
  import VueProps from '@/components/VueProps.vue'

  export default {
    name: 'ToTestView',
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
    },
  };
  </script>
  