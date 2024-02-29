<script>
    /** @type {import('./$types').PageData} */
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    
    export let data;
    import objects from "./objects.json";
    import { title } from "$lib/js/titleStore.js";
    
    let carousel;
    title.set(data.title);
    //TODO: Remove Color add image instead
</script>

{#if browser}
    <Carousel
      autoplay
      autoplayDuration={5000}
      autoplayProgressVisible
      pauseOnFocus
    >
        {#each colors as { color, text } (color)}
            <Color {color} {text} />
        {/each}
    </Carousel>
{/if}
<h1>{data.title}</h1>
<div class="flex flex-row">
    {#each data.frameworks as frameW}
        {#if frameW}
            <span class="h-[42px] text-2xl relative flex justify-center items-center p-2 bg-[var(--secondary)] rounded-md mr-2"><img src="{objects[frameW].img}" alt="{objects[frameW].name}" class="h-full mr-1 whitespace-nowrap " ><span class="">{objects[frameW].name}</span></span>
        {/if}
    {/each}

</div>

<div>{@html data.description}</div>

{#each data.content as content}
    <div class="mb-6 text-xl bg-[var(--accent)] p-5 rounded-2xl">
        <div class="font-bold mb-2" >{content.title}</div>
        <div class="">{content.content}</div>
    </div>
{/each}