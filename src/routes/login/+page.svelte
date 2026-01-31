<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Input from "$lib/components/Input.svelte";
</script>

<div class="flex flex-col gap-5 text-center">
    <h1 class="text-xl">Login to World View</h1>
    <div class="flex flex-col gap-2">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
    </div>
    <Button text="Login" isInput={true} />
</div>
