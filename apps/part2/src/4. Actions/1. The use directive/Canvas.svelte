<script lang="ts">
  import { Point } from './Point';
  import { onMount } from 'svelte';

  export let color: string;
  export let size: number;
  export let container: HTMLDivElement;

  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;
  let previous: Point | null;

  const getCoords = (e: PointerEvent): Point => {
    const { left, top } = canvas.getBoundingClientRect();
    const x = e.x - left;
    const y = e.y - top;
    return { x, y };
  };

  onMount(() => {
    context = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  $: {
    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
  }
</script>

<canvas
  bind:this="{canvas}"
  on:pointerdown="{(e) => {
    const coords = getCoords(e);
    context.fillStyle = color;
    context.beginPath();
    context.arc(coords.x, coords.y, size / 2, 0, 2 * Math.PI);
    context.fill();

    previous = coords;
  }}"
  on:pointerleave="{() => {
    previous = null;
  }}"
  on:pointermove="{(e) => {
    const coords = getCoords(e);

    if (e.buttons === 1) {
      e.preventDefault();

      context.strokeStyle = color;
      context.lineWidth = size;
      context.lineCap = 'round';
      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(coords.x, coords.y);
      context.stroke();
    }

    previous = coords;
  }}"
></canvas>

{#if previous}
  <div
    class="preview"
    style="--color: {color}; --size: {size}px; --x: {previous.x}px; --y: {previous.y}px"
  ></div>
{/if}

<style>
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .preview {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    transform: translate(-50%, -50%);
    background: var(--color);
    border-radius: 50%;
    opacity: 0.5;
    pointer-events: none;
  }
</style>
