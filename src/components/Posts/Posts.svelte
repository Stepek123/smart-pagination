<script>
  import { onMount } from "svelte";
  import { getPosts } from "../../API/api";
  import Post from "./Post.svelte";
  import Pagination from "../Pagination.svelte";

  let posts = [];
  let currentPage = 1;
  let isMax = false;
  let isMaxInTwoPages = false;
  let hasPageChanged = false;

  const pageChanged = async ({ detail: nextPage }) => {
    currentPage = nextPage;
    posts = await getPosts((currentPage - 1) * 10, 10);
    hasPageChanged = true;
  };

  const checkNextTwoPages = async () => {
    const localposts = await getPosts(currentPage * 10, 10);
    const nextlocalposts = await getPosts((currentPage + 1) * 10, 10);
    if (localposts.length === 0) {
      isMax = true;
    } else {
      isMax = false;
    }
    if (nextlocalposts.length === 0) {
      isMaxInTwoPages = true;
    } else {
      isMaxInTwoPages = false;
    }
  };

  const handlePageChagedReceived = () => {
    hasPageChanged = false;
  };

  onMount(async () => {
    posts = await getPosts((currentPage - 1) * 10, 10);
  });
</script>

<div class="container">
  <Pagination
    {isMax}
    {currentPage}
    {isMaxInTwoPages}
    on:pageChanged={pageChanged}
    on:checkNextTwoPages={checkNextTwoPages} />
  {#each posts as post}
    <Post
      {hasPageChanged}
      on:pageChangedReceived={handlePageChagedReceived}
      {...post} />
  {/each}
  <Pagination
    {isMax}
    {currentPage}
    {isMaxInTwoPages}
    on:pageChanged={pageChanged}
    on:checkNextTwoPages={checkNextTwoPages} />
</div>
