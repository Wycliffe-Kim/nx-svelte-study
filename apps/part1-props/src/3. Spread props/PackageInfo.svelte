<script lang="ts">
  import { PackageInfoType } from './PackageInfoType';

  let packageInfo: PackageInfoType = {};

  export let name = packageInfo.name;
  export let version = packageInfo.version;
  export let speed = packageInfo.speed;
  export let website = packageInfo.website;

  $: href = `https://www.npmjs.com/package/${name}`;
</script>

<p>
  The <code>{name}</code> package is {speed} fast. Download version {version} from
  <a {href}>npm</a>
  and <a href="{website}">learn more here</a>.
</p>
