<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { getComments } from "../../API/api.js";
  import Comments from "./Comments/Comments.svelte";

  export let id;
  export let title;
  export let body;
  export let userId;
  export let hasPageChanged;

  let comments = [];
  let showingComments = false;
  let addedComment = false;

  const dispatch = createEventDispatcher();

  const toggleShowingComments = async () => {
    showingComments = !showingComments;
    comments = await getComments(id);
  };

  $: {
    if (hasPageChanged) {
      showingComments = false;
      dispatch("pageChangedReceived");
    }
  }

  const onAddComment = ({ detail: newComment }) => {
    if (addedComment) {
      return;
    }
    comments = [...comments, newComment];
    addedComment = true;
  };
</script>

<style>
  section {
    padding: 2vh;
    margin: 2vh 0;
    border-radius: 5px;
  }

  h2 {
    text-transform: capitalize;
  }
  button {
    margin-top: 10px;
  }
</style>

<section class="section">
  <h2 class="title is-size-5">{title}</h2>
  <h3 class="title is-size-6">{body}</h3>
  {#if showingComments}
    <Comments {addedComment} on:addComment={onAddComment} {comments} />
  {/if}
  <button class="button is-info" on:click={toggleShowingComments}>
    {#if showingComments}Ukryj komentarze{:else}Pokaż komentarze{/if}
  </button>

</section>
