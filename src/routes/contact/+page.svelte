<script>
	
	import { PUBLIC_ACCESSKEY } from "$env/static/public";
	
	let status = "";
	//@ts-ignore
	const handleSubmit = async data => {
		console.log(data)
		status = 'Submitting...'
		const formData = new FormData(data.currentTarget)
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = result.message || "Success"
			document.getElementById("form").childNodes.forEach((el) => {
				if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
					el.value = "";
				}
			});
		}
	}

</script>
<form on:submit|preventDefault={handleSubmit} id="form">
	<input type="hidden" id="accessKey" name="access_key" value={PUBLIC_ACCESSKEY}>
	<input type="text" class="bg-accent/10" name="name" placeholder="John Doe" required />
	<input type="email" class="bg-accent/10" name="email" placeholder="john.doe@gmail.com" required />
	<textarea name="message" class="bg-accent/10" required rows="3" placeholder="Message..."></textarea>
	<input type="submit" />
</form>

<div>{status}</div>


<style lang="postcss">
	form{
		display: flex;
		flex-direction: column;
		& > *{
			margin-bottom: 1rem;
			padding: 0.5rem;
			border: none;
			border-radius: 0.5rem;
		}
	}
	

</style>
