<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Input from "$lib/components/Input.svelte";
</script>

<div class="flex flex-col gap-5 text-center">
    <h1 class="text-xl">Login to World View</h1>
    <form class="flex flex-col gap-2" method="POST">
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button text="Login" isInput={true} />
    </form>
</div>
