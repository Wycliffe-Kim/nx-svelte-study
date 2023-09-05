<script lang="ts">
  import { SubLinks } from '@nx-svelte-study/atoms';
  import TextInputs from './1. Text inputs/App.svelte';
  import NumericInputs from './2. Numeric inputs/App.svelte';
  import CheckboxInputs from './3. Checkbox inputs/App.svelte';
  import SelectBindings from './4. Select bindings/App.svelte';
  import GroupInputs from './5. Group inputs/App.svelte';
  import SelectMultiple from './6. Select multiple/App.svelte';
  import TextareaInputs from './7. Textarea inputs/App.svelte';

  export let params = { subPage: 'text-inputs' };
</script>

<SubLinks
  {params}
  prefixTitle="bindings"
  subTitles="{{
    'text-inputs': 'Text inputs',
    'numeric-inputs': 'Numeric inputs',
    'checkbox-inputs': 'Checkbox inputs',
    'select-bindings': 'Select bindings',
    'group-inputs': 'Group inputs',
    'select-multiple': 'Select multiple',
    'textarea-inputs': 'Textarea inputs',
  }}"
  subPages="{{
    'text-inputs': TextInputs,
    'numeric-inputs': NumericInputs,
    'checkbox-inputs': CheckboxInputs,
    'select-bindings': SelectBindings,
    'group-inputs': GroupInputs,
    'select-multiple': SelectMultiple,
    'textarea-inputs': TextareaInputs,
  }}"
/>
