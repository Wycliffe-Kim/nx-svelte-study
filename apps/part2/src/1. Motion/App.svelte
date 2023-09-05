<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import Tweens from './1. Tweens/App.svelte';
  import Springs from './2. Springs/App.svelte';

  export let params = { subPage: 'tweens' };
</script>

<SubLinks
  {params}
  prefixTitle="Motion"
  subTitles="{{
    tweens: 'Tweens',
    springs: 'Springs',
  }}"
  subPages="{{
    tweens: Tweens,
    springs: Springs,
  }}"
/>
