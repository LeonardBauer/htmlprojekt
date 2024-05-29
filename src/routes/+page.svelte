<script>
    import Visualizer from "$lib/Visualizer.svelte";
    import { title } from "$lib/js/titleStore.js";


    title.set('Home');
</script>

<span class="text-[calc(1.5vw+12px)] relative top-[3.125vw]">
    Hello my name is
</span>
<div class="relative w-full">

    <span class="title relative lg:-left-[7vw]"> Leonard Bauer</span>
</div>
<div class="w-[20vw] h-[20vw] absolute lg:right-0 right-[10vw] lg:top-[5vw] top-[2vw]">
    <Visualizer></Visualizer>
</div>
<div class="lg:w-[43vw] w-[80vw]">
    <span class="text-[calc(1.5vw+12px)]">
    and I am a 18 year old ['developer','student'] based in Germany near Cologne. <br/><br/>
</span>
</div>
<span class="text-[calc(1.5vw+12px)]">
    If you just want to take a quick look at all my stuff be sure to check out <a href="http://leonardbauer.com">leonardbauer.com</a>
</span>

<style>

    .title{
        font-size: calc(7.5vw + 0px);
        font-weight: 600;
        background-clip: text;

        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;

        background-image:url(/nametext.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: -15.6vh;
    }
</style>

