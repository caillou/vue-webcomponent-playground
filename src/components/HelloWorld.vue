<template>
  <div>
    <TimetableSearch/>
    <TimetableResults/>
  </div>
</template>

<script>
import TimetableSearch from './TimetableSearch.vue'
import TimetableResults from './TimetableResults.vue'

export default {
  name: 'HelloWorld',
  computed: {
    dateTime () {
      return this.$store.getters.dateTimeISO
    }
  },
  components: {
    TimetableSearch,
    TimetableResults
  }
}
</script>
