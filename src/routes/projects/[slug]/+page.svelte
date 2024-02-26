<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import objects from "./objects.json";
    import { title } from "$lib/js/titleStore.js";


    title.set(data.title);
</script>

<h1>{data.title}</h1>
<div class="flex flex-row">
    {#each data.frameworks as frameW}
        {#if frameW}
            <span class="h-[42px] text-2xl relative flex justify-center items-center p-2 bg-[var(--secondary)] rounded-md mr-2"><img src="{objects[frameW].img}" class="h-full mr-1 " ><span class="">{objects[frameW].name}</span></span>
        {/if}

    {/each}
</div>
<div>{@html data.description}</div>

