<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import Comment from "./Comment.svelte";

  const dispatch = createEventDispatcher();

  export let addedComment;

  let name = "";
  let email = "";
  let body = "";

  const onSubmit = e => {
    e.preventDefault();
    dispatch("addComment", { name, email, body });
    name = "";
    email = "";
    body = "";
  };

  export let comments;
</script>

<style>
  form {
    margin-top: 10px;
  }
</style>

<div in:slide out:slide>
  {#each comments as comment}
    <Comment {...comment} />
  {/each}
  {#if !addedComment}
    <form class="form" on:submit={onSubmit}>
      <div class="field">
        <div class="control">
          <input
            placeholder="email"
            type="email"
            class="input"
            bind:value={email} />
          <input
            placeholder="name"
            type="name"
            class="input"
            bind:value={name} />
          <textarea placeholder="email" class="textarea" bind:value={body} />
          <input class="button is-info" type="submit" value="Dodaj komentarz" />
        </div>
      </div>

    </form>
  {/if}

</div>
