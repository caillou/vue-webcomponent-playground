<template>
  <div>
    <h1 v-if="query">{{query}}</h1>

    <div v-if="isLoading">
      Loading ...
    </div>
    <div v-else-if="trips">
      <sbb-timetable-results>
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
  </div>
</template>

<script>

export default {

  computed: {
    query () {
      const origin = this.$store.state.origin
      const destination = this.$store.state.destination

      const originAndDestinationSet = (origin && destination)
      if (!originAndDestinationSet) return false

      return origin.name + ' -> ' + destination.name
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
