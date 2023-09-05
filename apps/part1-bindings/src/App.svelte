<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import TextInputs from './1. Text inputs/TextInputs.svelte';
  import NumericInputs from './2. Numeric inputs/NumericInputs.svelte';
  import CheckboxInputs from './3. Checkbox inputs/CheckboxInputs.svelte';
  import SelectBindings from './4. Select bindings/SelectBindings.svelte';
  import GroupInputs from './5. Group inputs/GroupInputs.svelte';
  import SelectMultiple from './6. Select multiple/SelectMultiple.svelte';
  import TextareaInputs from './7. Textarea inputs/TextareaInputs.svelte';
</script>

<Links
  headTitle="Part 1: Bindings"
  titles="{{
    '/': 'Home',
    '/text-inputs': 'Text inputs',
    '/numeric-inputs': 'Numeric inputs',
    '/checkbox-inputs': 'Checkbox inputs',
    '/select-bindings': 'Select bindings',
    '/group-inputs': 'Group inputs',
    '/select-multiple': 'Select multiple',
    '/textarea-inputs': 'Textarea inputs',
  }}"
  routes="{{
    '/': TextInputs,
    '/text-inputs': TextInputs,
    '/numeric-inputs': NumericInputs,
    '/checkbox-inputs': CheckboxInputs,
    '/select-bindings': SelectBindings,
    '/group-inputs': GroupInputs,
    '/select-multiple': SelectMultiple,
    '/textarea-inputs': TextareaInputs,
  }}"
/>
