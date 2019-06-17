<script>
  import { createEventDispatcher } from "svelte";
  import getPaginationNumbers from "../helpers/getPaginationNumbers.js";

  export let currentPage;
  export let isMax;
  export let isMaxInTwoPages;

  const dispatch = createEventDispatcher();

  $: paginationNumbers = getPaginationNumbers(currentPage, isMax);

  const setCurrentPage = currentPage => dispatch("pageChanged", currentPage);
  const checkNextTwoPages = () => dispatch("checkNextTwoPages");
</script>

<style>
  nav {
    margin-top: 5vh;
  }
</style>

<nav class="pagination" role="navigation" aria-label="pagination">
  <ul class="pagination-list">
    <li>
      <button
        class:is-current={currentPage === 1}
        class="pagination-link"
        on:click={() => {
          setCurrentPage(1);
          checkNextTwoPages();
        }}>
        1
      </button>
    </li>
    {#if currentPage > 3}
      <li>
        <span class="pagination-ellipsis">…</span>
      </li>
    {/if}
    {#each paginationNumbers as number}
      <li>
        <button
          class:is-current={currentPage === number}
          class="pagination-link"
          on:click={() => {
            setCurrentPage(number);
            checkNextTwoPages();
          }}>
           {number}
        </button>
      </li>
    {/each}
    {#if !isMax && !isMaxInTwoPages}
      <li>
        <span class="pagination-ellipsis">…</span>
      </li>
    {/if}
  </ul>
</nav>
