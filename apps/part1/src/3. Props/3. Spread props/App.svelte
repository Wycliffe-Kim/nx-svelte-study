<script lang="ts">
  import PackageInfo from './PackageInfo.svelte';
  import { PackageInfoType } from './PackageInfoType';

  const packageInfo: PackageInfoType = {
    name: 'svelte',
    speed: 'blazing',
    version: 4,
    website: 'https://svelte.dev',
  };
</script>

<PackageInfo {...packageInfo} />
