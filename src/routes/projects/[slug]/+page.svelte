<script>
    /** @type {import('./$types').PageData} */
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    //TODONE: NAVBAR
    //TODONE: CAROUSEL MOBILE IMAGE
    //TODO: Eine Page
    //TODONE: Fix List of Frameworks
    //Todo: Fix Colors
    export let data;
    import objects from "./objects.json";
    import { title } from "$lib/js/titleStore.js";
    let carousel;
    title.set(data.title);
</script>

{#if browser}
    <Carousel
      autoplay
      autoplayDuration={3000}
      autoplayProgressVisible
      pauseOnFocus
      arrows={false}

    >

        {#each data.images as img}
            <div class="w-full h-full flex justify-center">
                <img src="{img.src}" alt="{img.alt}" class="aspect-video" draggable="false">
            </div>
        {/each}
    </Carousel>
{/if}
<h1>{data.title}</h1>
<div class="flex flex-row flex-wrap">
    {#each data.frameworks as frameW}
        {#if frameW}
            <span class="h-[42px] lg:text-2xl min-w-fit relative flex justify-center items-center p-2 bg-[var(--secondary)] rounded-md mr-2 mb-2"><img src="{objects[frameW].img}" alt="{objects[frameW].name}" class="h-full mr-1" ><span class="w-fit">{objects[frameW].name}</span></span>
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

<style>
	.custom-arrow {
		width: 20px;
		background-color: #000000;
		opacity: 0.3;
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 1;
		transition: opacity 150ms ease;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	.custom-arrow:hover {
		opacity: 0.5;
	}
	.custom-arrow > i {
		border: solid #1e1e1e;
		border-width: 0 5px 5px 0;
		padding: 5px;
		position: relative;
	}
	.custom-arrow-prev {
		left: 0;
	}
	.custom-arrow-prev > i {
		transform: rotate(135deg);
		right: -4px;
	}
	.custom-arrow-next {
		right: 0;
	}
	.custom-arrow-next > i {
		transform: rotate(-45deg);
		left: -4px;
	}

</style>