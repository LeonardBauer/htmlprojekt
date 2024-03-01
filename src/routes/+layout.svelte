<script>
    import Nav from "$lib/Navigation/Nav.svelte";
    import "../app.pcss";
    import { title } from "$lib/js/titleStore.js";
    import Footer from "$lib/Navigation/Footer.svelte";
    import Navbar from "$lib/Navigation/Navbar.svelte";


    title.set('Home');

</script>

<svelte:head>
    <title>{$title}</title>
</svelte:head>

<nav>
    <Nav></Nav>
    
</nav>


<div class="w-[100vw] min-h-[100vh] flex flex-col items-center">
    <div class="outlines lg:w-[60vw] w-[95vw] min-w-[300px] h-full fixed">
    
    </div>
    <div class="lg:w-[60vw] w-[95vw] min-w-[300px] h-full p-[0.8vw] relative">
        <nav>
            <Navbar></Navbar>
        </nav>
        <div class="relative">
        <slot/>
        </div>
    </div>
    
    
</div>
<Footer></Footer>




<style>
    .outlines{
        border-left: 1px solid var(--text);
        border-right: 1px solid var(--text);
        padding: 0.8vw;
    }
</style>