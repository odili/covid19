<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChat from "../components/CovidChat.svelte";
  import TableContainer from "../components/TableContainer.svelte";
</script>

<svelte:head>
  <title>Covid19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid19 - US</h1>
  </div>
</div>

<CovidStat />
<CovidChat />
<TableContainer />
