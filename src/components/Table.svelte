<script>
  export let tableData;
</script>

<style>
  table {
    width: 100%;
  }

  .section {
    padding: 0.5rem 1.5rem;
  }
</style>

<div class="section">
  <div class="container">
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <td>State</td>
          <td>Cases</td>
          <td>Deaths</td>
          <td>Tested Results</td>
        </tr>
      </thead>
      <tbody>
        {#each tableData as data}
          <tr>
            <td><a href={`/${data.abbreviation}`}>{data.name}</a></td>
            <td>{data.cases.toLocaleString()}</td>
            <td>{data.deaths.toLocaleString()}</td>
            <td>{data.tested.toLocaleString()}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
