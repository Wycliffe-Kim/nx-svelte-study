<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import Assignments from './1. Assignments/App.svelte';
  import Declarations from './2. Declarations/App.svelte';
  import Statements from './3. Statements/App.svelte';
  import UpdatingArraysAndObjects from './4. Updating arrays and objects/App.svelte';

  export let params = { subPage: 'assignments' };
</script>

<SubLinks
  {params}
  prefixTitle="reactivity"
  subTitles="{{
    assignments: 'Assignments',
    declarations: 'Declarations',
    statements: 'Statements',
    'updating-arrays-and-objects': 'Updating arrays and objects',
  }}"
  subPages="{{
    assignments: Assignments,
    declarations: Declarations,
    statements: Statements,
    'updating-arrays-and-objects': UpdatingArraysAndObjects,
  }}"
/>
