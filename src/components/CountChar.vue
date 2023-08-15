<template>
    <div>
    <p>{{ phrase }}</p>
    <p>{{ words }}</p>
    <br>
    <p>number of characters: {{ count() }}</p>
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
