<template>
    <div>
        <p>adding here: {{ count }}</p>
        <button @click="incrementIt">To Add</button>
    </div>
</template>

<script>
export default {
    name: 'TestDriven',
    data () {
        return {
            count: 0
        }
    },
    methods: {
        incrementIt () {
            return this.count++
        }
    }
}
</script>