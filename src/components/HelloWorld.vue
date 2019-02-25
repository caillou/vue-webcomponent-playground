<template>
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
</template>

<script>
import 'time-elements'
export default {
  name: 'HelloWorld',
  computed: {
    dateTime () {
      return this.$store.getters.dateTimeISO
    }
  }
}
</script>
