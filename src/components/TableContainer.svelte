<script>
  import Table from "./Table.svelte";
  import TableFilter from "./TableFilter.svelte";

  export let tableData;
  console.log(tableData[0].state.name);
</script>

<TableFilter />
<Table {tableData} />
