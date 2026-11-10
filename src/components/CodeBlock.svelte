<script lang="ts">
  let props : { content: string } = $props();
</script>

<div class="code-block">
{props.content}
</div>

<style>
  .code-block {
    background-color: #afafaf;
    border: 1px solid black;
    white-space: pre;
    width: 100%;
    font-family: monospace;
    padding: 8px;
  }
</style>