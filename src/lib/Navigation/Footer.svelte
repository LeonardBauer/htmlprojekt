<script>
	import Fa from "svelte-fa";
	import {
		faInstagram,
		faTiktok,
		faFacebook,
		faGithub,
	} from "@fortawesome/free-brands-svg-icons";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
	rel="stylesheet"
/>

<div
	class="h-80 flex justify-center items-center flex-col relative bg-[var(--secondary)]"
>
	<div class="flex p-10 text-left">
		<div class="col">
			<div class="border-l mr-3 pl-3 font-bold">About Us</div>
			<div class="border-l mr-3 pl-3">File Exchange</div>
			<div class="border-l mr-3 pl-3">Jobs</div>
			<div class="border-l mr-3 pl-3">FAQs</div>
		</div>
		<div class="col text-left">
			<div class="border-l mr-3 pl-3 font-bold">Contact</div>
			<div class="border-l mr-3 pl-3">Business Inquiries</div>
			<div class="border-l mr-3 pl-3">Address</div>
			<div class="border-l mr-3 pl-3">Support</div>
		</div>
		<div class="col text-left">
			<div class="border-l mr-3 pl-3 font-bold">Community</div>
			<div class="border-l mr-3 pl-3">Developers</div>
			<div class="border-l mr-3 pl-3">API</div>
			<div class="border-l mr-3 pl-3">Investors</div>
		</div>
		<div class="col text-left flex flex-col">
			<div class="border-l mr-3 pl-3 font-bold">Follow Us</div>
			<div class="flex flex-row">
				<div class="flex flex-col mt-2">
					<div class="border-l mr-4 pl-3 fa-brands fa-instagram mt-1">
						<Fa icon={faInstagram} />
					</div>
					<div class="border-l mr-4 pl-3 fa-brands fa-tiktok mt-1">
						<Fa icon={faTiktok} />
					</div>
				</div>
				<div class="flex flex-col mt-2">
					<div class="border-l mr-4 pl-3 fa-brands fa-facebook mt-1">
						<Fa icon={faFacebook} />
					</div>
					<div class="border-l mr-4 pl-3 fa-brands fa-github mt-1">
						<Fa icon={faGithub} />
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="flex flex-col items-center">
		<div class="font-thin">Engineered in Wonderland 🦄⭐</div>
		<div>Germany 🥨</div>
	</div>
	<div
		class="user-info-footer flex flex-row absolute bottom-0 bg-slate-800 w-full text-white"
	>
		<div class="mr-3 pl-3">Contact</div>
		<div class="border-l mr-3 pl-3">Legal</div>
		<div class="border-l mr-3 pl-3">Terms of Services</div>

		<div class="border-l mr-3 pl-3">Cookie Statement</div>
	</div>
</div>


