<script>
  import { onMount } from "svelte";

  export let email;
  export let body;
  export let postId;
  export let id;
  export let name;
</script>

<article class="media">
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{email}</strong>
        <br />
         {body}
      </p>
    </div>
  </div>
</article>
