<template>
  <div>
    <sbb-timetable-search>
      <sbb-autocomplete
        slot="origin"
        name="origin"
        :suggestions="originSuggestions"
        :value="originValue"
        @sbb-autocomplete_selection="onSelection"
        @sbb-autocomplete_input="onInput"
        @sbb-autocomplete_blur="onBlur"
      >
      </sbb-autocomplete>
      <sbb-autocomplete
        slot="destination"
        name="destination"
        :suggestions="destinationSuggestions"
        :value="destinationValue"
        @sbb-autocomplete_selection="onSelection"
        @sbb-autocomplete_input="onInput"
        @sbb-autocomplete_blur="onBlur"
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
      originSuggestions: defaultLocationsJSON,
      destinationValue: '',
      originValue: ''
    }
  },
  methods: {

    onBlur (e) {
      const type = e.target.name
      this[`${type}Value`] = this.$store.state[type].name
    },
    onInput (e) {
      const type = e.target.name
      const input = e.detail.input

      const cancelTokenKey = `${type}CancelToken`
      const cancelToken = this[cancelTokenKey]
      cancelToken && cancelToken()

      axios
        .get(`https://global-warmer.com/sbb/station-search/${input}`, {
          cancelToken: new CancelToken((cancelToken) => {
            this[cancelTokenKey] = cancelToken
          })
        })
        .then((respone) => {
          const locations = respone.data.locations
          this.$store.dispatch(type, locations[0])
          const suggestions = locations.map(location => ({
            label: location.name,
            id: location.uic
          }))
          this[`${type}Suggestions`] = JSON.stringify(suggestions)
        })
    },
    onSelection (e) {
      const type = e.target.name
      const selection = e.detail.selection
      this.$store.dispatch(type, {
        name: selection.label,
        uic: selection.id
      })
    }
  },
  computed: {

  },

  name: 'TimetableSearch'

}
</script>
