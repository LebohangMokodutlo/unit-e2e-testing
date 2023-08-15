<template>
    <div>
        <p>the old message: {{ message }}</p>
        <p>the new in CAPS message: {{ capitalizeMessage() }}</p>
      </div>
</template>

<script>
export default {
  name: 'MethodComponent',
  data () {
    return { message: 'Hello, world!' }
  },
  methods: {
    capitalizeMessage () {
      return this.message.toUpperCase()
    }
  }
}
</script>
