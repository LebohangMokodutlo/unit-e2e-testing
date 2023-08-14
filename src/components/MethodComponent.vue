<template>
    <div>
        <p>the old message: {{ message }}</p>
        <p1>the new in CAPS message: {{ capitalizeMessage() }}</p1>
      </div>
</template>

<script>
export default {
  name: 'ComponentMethod',
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
