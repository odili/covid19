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
        {#each tableData as data (data.state.name)}
          <tr>
            <td>
              <a href={`/${data.state.abbreviation}`}>{data.state.name}</a>
            </td>
            <td>{data.cases}</td>
            <td>{data.deaths}</td>
            <td>{data.tested}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
