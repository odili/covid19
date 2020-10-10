<script context="module">
  import parsers from "../data/parsers.js";

  export async function preload() {
    try {
      const res = await this.fetch(
        "https://api.covidtracking.com/v1/us/current.json"
      );
      const data = await res.json();

      const response = await this.fetch(
        "https://api.covidtracking.com/v1/us/daily.json"
      );
      const rawChat = await response.json();

      const tableResponse = await this.fetch(
        "https://api.covidtracking.com/v1/states/current.json"
      );
      const rawTableData = await tableResponse.json();
      return {
        usStat: parsers.usStats(data),
        chartData: parsers.historicUS(rawChat),
        tableData: parsers.tableParser(rawTableData),
      };
    } catch (e) {
      throw new Error(e.message);
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChat from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";

  export let usStat;
  export let chartData;
  export let tableData;
</script>

<svelte:head>
  <title>Covid19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid19 - US</h1>
  </div>
</div>

<CovidStat {usStat} />
<CovidChat {chartData} />
<TableContainer {tableData} />
