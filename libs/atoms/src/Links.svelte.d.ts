import { SvelteComponent } from 'svelte';

export class Links extends SvelteComponent<{
  headTitle: string;
  titles: Record<string, string>;
  routes: Record<string, ComponentType>;
}> {}
