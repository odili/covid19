<script>
  export let stateName = "";
  export let sortBy = "name";
</script>

<style>
  .select,
  select {
    width: 100%;
  }
</style>

<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <input
          bind:value={stateName}
          class="input"
          type="text"
          placeholder="Filter State" />
      </div>
      <div class="column is-6">
        <div class="select">
          <select bind:value={sortBy}>
            <option value="name">By State name</option>
            <option value="cases">Cases</option>
            <option value="deaths">Death</option>
            <option value="tested">Tested</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
