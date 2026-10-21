<script lang="ts">
  import ReferencePage from '#lib/ReferencePage.svelte';
  import { _ } from '#lib/i18n.js';

  let { data } = $props();
</script>

<ReferencePage title={_('indexPage.title')} lead={_('indexPage.lead')} doc={data.doc} />
