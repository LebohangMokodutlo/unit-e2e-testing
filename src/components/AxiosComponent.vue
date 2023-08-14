<template>
    <div>
      <h1>Posts List</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </template>

<script>
// Import axios in your component
import axios from 'axios'

export default {
  name: 'AxiosComponent',
  data () {
    return {
      posts: [] // Initialize an empty array to store the fetched posts
    }
  },
  mounted () {
    // Perform the axios.get request in the mounted lifecycle hook or whenever appropriate
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Once the data is fetched successfully, update the 'posts' data property
        this.posts = response.data
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error fetching data:', error)
      })
  }
}

</script>
