<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  .container {
    margin-top: 3rem;
  }
</style>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status === 404}
  <div class="container">
    <article class="message is-danger">
      <div class="message-header">
        <p>Page Not Found</p>
      </div>
      <div class="message-body">
        <a href="/">Click here</a>
        to return to home page
      </div>
    </article>
  </div>
{:else}
  <div class="container">
    <article class="message is-danger">
      <div class="message-header">
        <p>Error - {status}</p>
      </div>
      <div class="message-body">{error.message}</div>
    </article>
  </div>
{/if}
