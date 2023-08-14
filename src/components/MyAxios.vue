<template>
    <div>
      <h1>Users List via Axios</h1>
      <ul>
        <li v-for="user in users" :key="user.id"> Username: {{ user.name }}.....................Email: {{ user.email }}</li>
      </ul>
    </div>
  </template>

<script>
import axios from 'axios'

export default {
  name: 'MyAxios',
  data () {
    return {
      users: []
    }
  },
  async mounted () {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      this.users = data
    } catch (error) {
      console.error('could not fetch users', error)
    }
  }
}
</script>
