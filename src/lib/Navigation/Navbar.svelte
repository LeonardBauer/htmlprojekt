<nav class="c">
	<ul>
		<li><a href="/">home</a></li>
		<li><a href="/projects">projects</a></li>
		<li><a href="/contact">contact</a></li>
		<li><a href="/aboutme">aboutme</a></li>
	</ul>
</nav>

<style lang="postcss">
	.c{
		display: none;
		z-index: 1000;
		margin: 10px;
		& ul{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			& li > a {
				border: none;
				&:hover{
					color: #f00;
				}
			}
		}
		
	}
	@media (hover: none) {
		.c{
			display: block;
			& ul{
				flex-direction: row;
			}
		}
	}
</style>