<template>
  <div>
    <local-time
      :datetime="dateTime"
      weekday="short"
      year="numeric"
      month="short"
      day="numeric"
      hour="numeric"
      minute="2-digit"
      second="2-digit"
    >
      {{dateTime}}
    </local-time>

    <TimetableSearch/>
    <TimetableResults/>
  </div>
</template>

<script>
import 'time-elements'
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
