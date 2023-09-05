<script lang="ts">
  let m = { x: 0, y: 0 };

  const handleMove = (event: PointerEvent) => {
    console.log(event);
    m.x = event.clientX;
    m.y = event.clientY;
  };
</script>

<div on:pointermove="{handleMove}">
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
