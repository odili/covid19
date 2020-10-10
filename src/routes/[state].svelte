<script context="module">
  import parsers from "../data/parsers.js";
  import stateNames from "../data/stateNames";

  export async function preload(page) {
    const state = page.params["state"];

    if (stateNames.find((s) => s.abbreviation === state) === undefined) {
      this.error(404, "State Nout Found");
      return;
    }

    try {
      const res = await this.fetch(
        "https://api.covidtracking.com/v1/states/current.json"
      );
      const data = await res.json();
      const stateData = data.find((s) => s.state === state);

      const response = await this.fetch(
        "https://api.covidtracking.com/v1/states/daily.json"
      );
      const rawChat = await response.json();
      const stateChart = rawChat.filter((s) => s.state === state);

      return {
        usStat: parsers.stateParser(stateData),
        state,
        chartData: parsers.historicUS(stateChart),
        tableData: parsers.tableParser(data),
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
  export let state;
  export let usStat;
  export let chartData;
</script>

<svelte:head>
  <title>Covid19 {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid19 - {state}</h1>
  </div>
</div>

<CovidStat {usStat} />
<CovidChat {chartData} {state} />
