<template>
    <div>
        <album-axios />
        <axios-component />
        <my-axios/>
        <count-char />
        <method-component />
        <test-driven />
        <vue-props :count="count" @increment="incrementCount" @decrement="decrementCount" />

        <button id="trig-counter" @click="incrementCounter">ADD</button>
        <p>{{ counter }}</p>
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
    components: {
        AlbumAxios,
        AxiosComponent,
        CountChar,
        MethodComponent,
        MyAxios,
        TestDriven,
        VueProps
    },
    data() {
    return {
      count: 0,
      counter: 0
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
    incrementCounter() {
      this.counter++;
    }
  }
}
</script>
  