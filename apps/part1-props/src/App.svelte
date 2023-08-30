<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import DeclaringProps from './1. Declaring props/DeclaringProps.svelte';
  import DefaultValues from './2. Default values/DefaultValues.svelte';
  import SpreadProps from './3. Spread props/SpreadProps.svelte';
</script>

<Links
  headTitle="Part 1: Props"
  titles="{{
    '/': 'Home',
    '/declaring-props': 'Declaring props',
    '/default-values': 'Default values',
    '/spread-props': 'Spread props',
  }}"
  routes="{{
    '/': DeclaringProps,
    '/declaring-props': DeclaringProps,
    '/default-values': DefaultValues,
    '/spread-props': SpreadProps,
  }}"
/>
