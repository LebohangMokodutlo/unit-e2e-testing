<template>
    <div>
    <p>{{ phrase }}</p>
    <p2>{{ words }}</p2>
    <br>
    <p1>number of characters: {{ count() }}</p1>
    </div>
</template>

<script>
export default {

  name: 'CountChar',
  data () {
    return {
      phrase: 'thee phrase',
      words: 'coup'
    }
  },
  methods: {
    count () {
      return this.phrase.length
    }
  }

}
</script>
