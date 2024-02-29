<script>
    import Nav from "$lib/Navigation/Nav.svelte";
    import "../app.pcss";
    import { title } from "$lib/js/titleStore.js";


    title.set('Home');

</script>

<svelte:head>
    <title>{$title}</title>
</svelte:head>

<nav>
    <Nav></Nav>
</nav>


<div class="w-[100vw] h-[100vh] flex justify-center absolute">
    <div class="outlines lg:w-[60vw] w-[95vw] min-w-[300px] h-full relative">
        <slot/>
    </div>
</div>



<style>
    .outlines{
        border-left: 1px solid var(--text);
        border-right: 1px solid var(--text);
        padding: 0.8vw;
    }
</style>