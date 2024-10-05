<template>
	<div class="flex w-1/3 flex-col items-center justify-center gap-8">
		<p class="rounded-2xl border border-teal-300 bg-teal-800 p-0.5 px-2 text-lg text-teal-300">
			Original Cube's Nuxt Template v1.0
		</p>
		<p class="text-5xl font-bold text-teal-400">Nuxt 3 Starter Template</p>
		<p class="text-lg font-light leading-8 text-white">
			A modern, pre-configured Nuxt 3 starter template with TypeScript, ESLint, Prettier, Tailwind, and Husky
			integration. Jumpstart your Vue.js projects with best practices and optimized development workflows.
		</p>
		<div class="flex w-full items-center justify-around">
			<a href="https://github.com/OriginalCube/nuxt-starter" target="_blank">
				<button
					class="flex items-center justify-center gap-2 rounded-md border border-teal-400 bg-teal-500 px-4 py-2 text-slate-800 hover:bg-teal-500/80"
				>
					<Icon name="carbon:logo-github" class="size-6" /> <span>Starter Github</span>
				</button>
			</a>

			<a href="https://nuxt.com/" target="_blank">
				<button
					class="flex items-center justify-center gap-2 rounded-md border border-teal-300 bg-teal-800 px-4 py-2 text-teal-300 hover:bg-teal-800/80"
				>
					Learn more about Nuxt3 <Icon name="carbon:arrow-right" class="size-6" />
				</button>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
