<script lang="ts">
  import { spring } from 'svelte/motion';

  let coords = spring({ x: 50, y: 50 });
  let size = spring(10);
</script>

<div class="container">
  <svg
    on:mousemove="{(e) => {
      coords.set({ x: e.offsetX, y: e.offsetY });
    }}"
    on:mousedown="{() => size.set(30)}"
    on:mouseup="{() => size.set(10)}"
  >
    <circle cx="{$coords.x}" cy="{$coords.y}" r="{$size}"></circle>
  </svg>

  <div class="controls">
    <label>
      <h3>stiffness ({coords.stiffness})</h3>
      <input
        bind:value="{coords.stiffness}"
        type="range"
        min="0.01"
        max="1"
        step="0.01"
      />
    </label>

    <label>
      <h3>damping ({coords.damping})</h3>
      <input
        bind:value="{coords.damping}"
        type="range"
        min="0.01"
        max="1"
        step="0.01"
      />
    </label>
  </div>
</div>

<style>
  .container {
    display: flex;
  }

  svg {
    width: 800px;
    height: 500px;
    border: 1px solid black;
    margin: 0 10px;
  }

  circle {
    fill: #ff3e00;
  }

  .controls {
    top: 1em;
    right: 1em;
    width: 500px;
    user-select: none;
  }

  .controls input {
    width: 100%;
  }
</style>
