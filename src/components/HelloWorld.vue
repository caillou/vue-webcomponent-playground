<template>
  <div>
    <sbb-global-styles></sbb-global-styles>
    <sbb-webfonts></sbb-webfonts>
    <sbb-header
      :language="language"
      :items="headerItems">
    </sbb-header>
    <TimetableSearch/>
    <TimetableResults/>
    <sbb-homepage-main-teaser></sbb-homepage-main-teaser>
    <sbb-heading
      text="Rund um die SBB."
      level="2">
    </sbb-heading>
    <sbb-deeplink-teasers
      titles-level="3"
      :items="deeplinkItems">
    </sbb-deeplink-teasers>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import TimetableSearch from './TimetableSearch.vue'
import TimetableResults from './TimetableResults.vue'
import PageFooter from './PageFooter.vue'
import headerItems from '../mock-data/header-items'
import deeplinkItems from '../mock-data/deeplink-items'

export default {
  name: 'HelloWorld',
  data () {
    return {
      headerItems: JSON.stringify(headerItems),
      deeplinkItems: JSON.stringify(deeplinkItems)
    }
  },
  computed: {

    language () {
      return this.$store.state.language
    }
  },
  components: {
    TimetableSearch,
    TimetableResults,
    PageFooter
  }
}
</script>
