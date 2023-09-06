<script lang="ts">
  import tippy from 'tippy.js';
  import 'tippy.js/dist/tippy.css';
  import 'tippy.js/themes/material.css';

  let content = 'Hello!';

  const tooltip = (node: HTMLElement, options: tippy.Props) => {
    const tooltip = tippy(node, options);

    return {
      update: (options: tippy.Props) => {
        tooltip.setProps(options);
      },
      destroy: () => {
        tooltip.destroy();
      },
    };
  };
</script>

<input bind:value="{content}" />

<button use:tooltip="{{ content, theme: 'material' }}"> Hover me </button>
