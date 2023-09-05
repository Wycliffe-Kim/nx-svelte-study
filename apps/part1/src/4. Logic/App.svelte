<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import IfBlocks from './1. If blocks/App.svelte';
  import ElseBlocks from './2. Else blocks/App.svelte';
  import ElseIfBlocks from './3. Else-if blocks/App.svelte';
  import EachBlocks from './4. Each blocks/App.svelte';
  import KeyedEachBlocks from './5. Keyed each blocks/App.svelte';
  import AwaitBlocks from './6. Await blocks/App.svelte';

  export let params = { subPage: 'if-blocks' };
</script>

<SubLinks
  {params}
  prefixTitle="logic"
  subTitles="{{
    'if-blocks': 'If blocks',
    'else-blocks': 'Else blocks',
    'else-if-blocks': 'Else-if blocks',
    'each-blocks': 'Each blocks',
    'keyed-each-blocks': 'Keyed each blocks',
    'await-blocks': 'Await blocks',
  }}"
  subPages="{{
    'if-blocks': IfBlocks,
    'else-blocks': ElseBlocks,
    'else-if-blocks': ElseIfBlocks,
    'each-blocks': EachBlocks,
    'keyed-each-blocks': KeyedEachBlocks,
    'await-blocks': AwaitBlocks,
  }}"
/>
