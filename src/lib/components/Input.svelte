<script lang="ts">
    const { name, type, placeholder } = $props();
</script>

<input
    class="border border-stone-200 rounded-xs p-1"
    {name}
    {type}
    {placeholder}
/>
