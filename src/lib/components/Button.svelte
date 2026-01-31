<script lang="ts">
    interface Props {
        text: string,
        isInput: boolean
    }

    const { text, isInput } : Props = $props();
</script>

<button
    class="bg-stone-400 p-2 rounded-xs"
    type={isInput ? "submit" : "button"}
>
    {text}
</button>
