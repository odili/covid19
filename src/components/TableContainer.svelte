<script>
  import Table from "./Table.svelte";
  import TableFilter from "./TableFilter.svelte";

  export let tableData;
  let sortBy = "name";
  let stateName = "";

  function filterTable(data, sortBy, filter) {
    if (filter) {
      data = data.filter((d) =>
        d.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if ( sortBy === "name") {
      data = data.slice().sort((a, b) => {
        let nameA = a[sortBy].toUpperCase();
        let nameB = b[sortBy].toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }else {
      data = data.slice().sort((a, b) => b[sortBy] - a[sortBy]);
    }

    return data;
  }

  $: sorted = filterTable(tableData, sortBy, stateName);
</script>

<TableFilter bind:sortBy bind:stateName />
<Table tableData={sorted} />
