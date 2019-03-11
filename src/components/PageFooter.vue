<template>
  <sbb-footer
    language="de"
    uselinks="false"
    @sbb-footer_language-switch="onLanguageChange"
  ></sbb-footer>
</template>

<script>

export default {
  methods: {
    onLanguageChange (e) {
      this.$store.state.language = e.detail.language
    }
  },
  name: 'PageFooter'
}
</script>
