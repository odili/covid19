<script>
  export let usStat;
</script>

<style>
  .columns {
    border: 1px solid gray;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Cases: {usStat.cases}</h2>
      <h2 class="is-3 column">Deaths: {usStat.deaths}</h2>
      <h2 class="is-3 column">Recovered: {usStat.recovered}</h2>
      <h2 class="is-3 column">Updated: {usStat.updated}</h2>
    </div>
  </div>
</div>
<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Tested: {usStat.tested}</h2>
      <h2 class="is-3 column">Hospitalized: {usStat.hospitalized}</h2>
      <h2 class="is-3 column">Total ICU: {usStat.icu}</h2>
      <h2 class="is-3 column">Total Ventilator: {usStat.ventilator}</h2>
    </div>
  </div>
</div>
