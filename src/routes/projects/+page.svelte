<script >
    import { title } from "$lib/js/titleStore.js";
    import projects from "./[slug]/projects.json";
    import objects from "./[slug]/objects.json";

    title.set('Projects');
    
</script>

{#each Object.values(projects) as project }
    <a href="projects/{project.slug}" class="noDirLink">
        <div  class="h-[10vh] max-h-[200px]  bg-[var(--secondary)] mb-1.5 flex items-center p-3">
            <div class="ml-4 mr-7">
                {@html project.icon}
            </div>
            <div class="flex flex-col h-full justify-start items-start">
                <div  class="border-0 w-full">
                    {project.title}
                </div>
                <div class="text-text/70">
                    {project.teaser}
                </div>
                <div class=" flex flex-row">
                    {#each project.frameworks as framework }
                        <div class="text-text/70 h-[20px] mt-2 ">
                            {#if framework}
                                <img src="{objects[framework]?.img}" class="h-full mr-1" alt="{objects[framework]?.name}">
                            {/if}
                        </div>
                    {/each}
                </div>

            </div>
        </div>
    </a>
{/each}

