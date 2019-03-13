<template>
  <div>
    <sbb-timetable-results-title
      v-if="showTitle"
      :from="originName"
      :to="destinationName">
    </sbb-timetable-results-title>
    <div v-if="isLoading">
      Loading ...
    </div>
    <sbb-timetable-results v-else-if="trips">
      <sbb-timetable-result
        v-for="trip in trips"
        :key="trip.id"
        :origin-location="trip.from.name"
        :origin-time="trip.from.time"
        :origin-track="trip.from.track"
        :destination-location="trip.to.name"
        :destination-time="trip.to.time"
        :destination-track="trip.to.track"
      ></sbb-timetable-result>
    </sbb-timetable-results>
  </div>
</template>

<script>
export default {
  computed: {
    showTitle () {
      const origin = this.$store.state.origin
      const destination = this.$store.state.destination
      return !!(origin && destination)
    },
    originName () {
      return this.$store.state.origin.name
    },

    destinationName () {
      return this.$store.state.destination.name
    },
    isLoading () {
      return this.$store.state.trips === 'loading'
    },
    trips () {
      if (!this.$store.state.trips) return []
      return this.$store.state.trips.map((trip, index) => {
        return Object.assign({
          id: index
        }, trip)
      })
    }
  },
  name: 'TimetableResults'
}
</script>
