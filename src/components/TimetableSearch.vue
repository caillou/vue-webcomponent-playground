<template>
  <div>
    <sbb-timetable-search
      @sbb-timetable-search_change="onLocationChange">
    </sbb-timetable-search>
    <sbb-timetable-search>
      <sbb-autocomplete
        slot="origin"
        name="origin"
        :suggestions="originSuggestions"
      ></sbb-autocomplete>
      <sbb-autocomplete
        slot="destination"
        name="destination"
        :suggestions="destinationSuggestions"
      ></sbb-autocomplete>
    </sbb-timetable-search>
  </div>
</template>

<script>
import axios from 'axios'

import defaultLocations from '../mock-data/default-locations'
const CancelToken = axios.CancelToken
const defaultLocationsJSON = JSON.stringify(defaultLocations)

export default {
  data () {
    return {
      destinationSuggestions: defaultLocationsJSON,
      originSuggestions: defaultLocationsJSON
    }
  },
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
