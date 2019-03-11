<template>
  <div>
    <sbb-timetable-search
      @sbb-timetable-search_change="onLocationChange">
    </sbb-timetable-search>
  </div>
</template>

<script>
import axios from 'axios'
const CancelToken = axios.CancelToken

export default {

  methods: {
    onLocationChange (e) {
      const { type, value } = e.detail
      const cancelTokenKey = `${type}CancelToken`
      const cancelToken = this[cancelTokenKey]
      cancelToken && cancelToken()

      axios
        .get(`http://global-warmer.com/station-search/${value}`, {
          cancelToken: new CancelToken((cancelToken) => {
            this[cancelTokenKey] = cancelToken
          })
        })
        .then((respone) => {
          this.$store.dispatch(type, respone.data.locations[0])
        })
    }
  },
  computed: {

  },

  name: 'TimetableSearch'

}
</script>
