<script lang="ts">
  let m = { x: 0, y: 0 };
</script>

<div
  on:pointermove="{(e) => {
    m = { x: e.clientX, y: e.clientY };
  }}"
>
  The pointer is at {m.x} x {m.y}
</div>

<style>
  div {
    background-color: antiquewhite;
    width: 50vw;
    height: 50vh;
    padding: 1rem;
  }
</style>
