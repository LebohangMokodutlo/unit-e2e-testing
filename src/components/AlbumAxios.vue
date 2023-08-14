<template>
    <div>
        <ul>
            <li v-for="album in albums" :key="album.title">id: {{ album.id }}... album title: {{ album.title }}</li>
        </ul>
    </div>
    </template>
    
    <script>
    import {axios} from 'axios'
    
    export default {
      name: 'AlbumAxios',
      data () {
        return {
          albums: []
        }
      },
      async mounted () {
        try {
          const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums')
          this.albums = data
        } catch (error) {
          console.error('could not fetch albums', error)
        }
      }
    }
    </script>
    