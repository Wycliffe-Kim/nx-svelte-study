<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import IfBlocks from './1. If blocks/IfBlocks.svelte';
  import ElseBlocks from './2. Else blocks/ElseBlocks.svelte';
  import ElseIfBlocks from './3. Else-if blocks/ElseIfBlocks.svelte';
  import EachBlocks from './4. Each blocks/EachBlocks.svelte';
  import KeyedEachBlocks from './5. Keyed each blocks/KeyedEachBlocks.svelte';
  import AwaitBlocks from './6. Await blocks/AwaitBlocks.svelte';
</script>

<Links
  headTitle="Part 1: Logic"
  titles="{{
    '/': 'Home',
    '/if-blocks': 'If blocks',
    '/else-blocks': 'Else blocks',
    '/else-if-blocks': 'Else-if blocks',
    '/each-blocks': 'Each blocks',
    '/keyed-each-blocks': 'Keyed each blocks',
    '/await-blocks': 'Await blocks',
  }}"
  routes="{{
    '/': IfBlocks,
    '/if-blocks': IfBlocks,
    '/else-blocks': ElseBlocks,
    '/else-if-blocks': ElseIfBlocks,
    '/each-blocks': EachBlocks,
    '/keyed-each-blocks': KeyedEachBlocks,
    '/await-blocks': AwaitBlocks,
  }}"
/>
