<template>
  <sbb-footer role="contentinfo" footertitle="Fusszeile">
    <sbb-footer-columns>
      <sbb-footer-column>
        <sbb-footer-column-title columntitle="Kontakt"></sbb-footer-column-title>
        <sbb-footer-column-rte>
        <p>Haben Sie Fragen? Wir helfen Ihnen gerne. Bitte lesen Sie auch unsere Erklärung zum <a href="/de/meta/legallines/datenschutz.html">Datenschutz</a>.</p>
        </sbb-footer-column-rte>
      </sbb-footer-column>
      <sbb-footer-column>
        <sbb-footer-column-title columntitle="Bahnverkehrsinformationen"></sbb-footer-column-title>
        <sbb-footer-column-rte>
          <p>Informationen über die aktuelle Betriebslage und Störungen auf dem Schweizer Schienennetz und über wichtige Behinderungen und Streiks im Ausland.</p>
        </sbb-footer-column-rte>
      </sbb-footer-column>
      <sbb-footer-column>
        <sbb-footer-column-title columntitle="Newsletter & Social Media"></sbb-footer-column-title>
        <sbb-footer-column-rte>
          <p>Jeden Monat über Angebote und Neuigkeiten informiert sein.</p>
        </sbb-footer-column-rte>
        <sbb-footer-column-link-list>
          <sbb-footer-column-link-list-item external="true" label="Facebook" href="https://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item external="true" label="Twitter" href="https://company.sbb.ch/de/immobilien.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item external="true" label="YouTube" href="http://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item external="true" label="Instagram" href="http://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item label="SBB News" href="http://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item label="SBB Community" href="http://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
        </sbb-footer-column-link-list>
      </sbb-footer-column>
      <sbb-footer-column>
        <sbb-footer-column-title columntitle="Über die SBB"></sbb-footer-column-title>
        <sbb-footer-column-link-list>
          <sbb-footer-column-link-list-item label="Unternehmen" href="https://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item label="SBB Immobilien" href="https://company.sbb.ch/de/immobilien.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item label="SBB Cargo" href="http://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item label="Jobs & Karriere" href="http://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
          <sbb-footer-column-link-list-item label="Medien & Dossiers" href="http://company.sbb.ch/de/home.html"></sbb-footer-column-link-list-item>
        </sbb-footer-column-link-list>
      </sbb-footer-column>
    </sbb-footer-columns>

    <!--
      optional property: language
      the default language to be used

      optional property: languages
      the languages to show in the language switch. if languages are not
      provided,
      a default set is used. see sbb-footer.tsx for details.
    -->
    <sbb-language-selector
      language="de"
      :languages="languages"
      @sbb-language-selector_language-switch="onLanguageChange">
    </sbb-language-selector>

  </sbb-footer>

</template>

<script>

export default {
  data () {
    const languages = JSON.stringify([
      {
        name: 'de'
      },
      {
        name: 'fr'
      },
      {
        name: 'it'
      },
      {
        name: 'en',
        link: 'https:www.google.com'
      }
    ])
    return {
      languages
    }
  },
  methods: {
    onLanguageChange (e) {
      this.$store.state.language = e.detail.language
    }
  },
  name: 'PageFooter'
}
</script>
