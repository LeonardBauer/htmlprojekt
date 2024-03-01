<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>It seems there has been an error, sorry about that.</h1>
	{#if $page?.error}
		<div class="mt-4 p-4 border-y-2">
			{#if $page?.status}
				<p>Page status: {$page?.status}</p>
				{#if $page.status === 404   }
					<!-- gif -->
					<div class="flex h-[47vw] lg:h-[30vw]">
						<img src="https://media.discordapp.net/attachments/1205533892212301864/1208499742477131816/saveinsta-cam-ezgif.com-crop.gif?ex=65e38217&is=65d10d17&hm=8de64443b7cff0e79bc79a1dda4d17cfa8b5e898e255f248aeff69fe17360597&" alt="6 animals getting dipped in paint" />
						<img src="https://media.discordapp.net/attachments/1160907061316554774/1213054394900414484/Snapinsta.app_video_322652882_902657005202087_1208984831883108177_n-ezgif.com-optimize.gif?ex=65f413f1&is=65e19ef1&hm=a2af403a9c745679726d65c4c8ffc5ffd9b07634bbfa0ba95478e5e2ab57d887&" alt="ice magician">
					</div>
				{/if}
			{/if}
			{#if $page?.error?.message}
				<p>Error message: {$page?.error?.message}</p>
			{/if}
		</div>
	{/if}
</div>