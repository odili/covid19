<script context="module">
  export async function preload(page) {
    console.log(page);

    return { state: page.params["state"] };
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChat from "../components/CovidChat.svelte";
  import TableContainer from "../components/TableContainer.svelte";
  export let state;
</script>

<svelte:head>
  <title>Covid19 {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid19 - {state}</h1>
  </div>
</div>

<CovidStat />
<CovidChat />
