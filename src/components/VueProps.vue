<template>
    <div>
        <br>
        <p>{{ count }}</p>
        <br>
        <button id="increase" @click="increment">+</button>
        <br>
        <button id="decrease" @click="decrement">-</button>
    </div>
</template>

<script>
export default {
  name: 'VueProps',
  props: {
    count: {
      type: Number,
      default: 0
    },
    message: {
      type: String
      // required: true
    }
  },
  methods: {
    increment () {
      this.$emit('increment')
    },
    decrement () {
      this.$emit('decrement')
    }
  }

}
</script>
