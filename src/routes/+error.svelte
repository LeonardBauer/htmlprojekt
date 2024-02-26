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
					<img src="https://media.discordapp.net/attachments/1205533892212301864/1208499742477131816/saveinsta-cam-ezgif.com-crop.gif?ex=65e38217&is=65d10d17&hm=8de64443b7cff0e79bc79a1dda4d17cfa8b5e898e255f248aeff69fe17360597&" alt="404" />
				{/if}
			{/if}
			{#if $page?.error?.message}
				<p>Error message: {$page?.error?.message}</p>
			{/if}
		</div>
	{/if}
</div>