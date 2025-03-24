<script lang="ts">
	import * as ComponentExports from "../index";

	const components = Object.entries(ComponentExports).map(
		([name, component]) => ({
			name,
			component,
		}),
	);

	let activeTab = components.length > 0 ? components[0].name : "";

	function selectTab(tabName: string) {
		activeTab = tabName;
	}
</script>

<div class="container">
	<h1>Medblocks Platform Toolkit</h1>
	<div class="tabs">
		{#each components as { name }}
			<button
				class="tab-button {activeTab === name ? 'active' : ''}"
				on:click={() => selectTab(name)}
			>
				{name}
			</button>
		{/each}
	</div>

	<div class="component-container">
		{#if components.length === 0}
			<div class="empty-state">
				<h3>No components exported from index.ts</h3>
				<p>
					Any component exported from index.ts will automatically
					appear as a tab in this interface.
				</p>
			</div>
		{:else}
			{#each components as { name, component }}
				{#if activeTab === name}
					<div class="component-wrapper">
						<h2>{name}</h2>
						<svelte:component this={component} />
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			sans-serif;
	}

	.tabs {
		display: flex;
		border-bottom: 1px solid #ccc;
		margin-bottom: 20px;
	}

	.tab-button {
		padding: 10px 20px;
		border: none;
		background: none;
		cursor: pointer;
		font-size: 16px;
		border-bottom: 3px solid transparent;
		transition: all 0.2s ease;
	}

	.tab-button:hover {
		background-color: #f5f5f5;
	}

	.tab-button.active {
		border-bottom: 3px solid #3182ce;
		font-weight: bold;
	}

	.component-container {
		padding: 20px;
		border: 1px solid #e2e8f0;
		border-radius: 5px;
		background-color: #f8f9fa;
	}

	.component-wrapper {
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	h2 {
		margin-top: 0;
		margin-bottom: 20px;
		color: #2d3748;
		font-size: 24px;
		border-bottom: 1px solid #edf2f7;
		padding-bottom: 10px;
	}

	.empty-state {
		padding: 40px;
		text-align: center;
		color: #718096;
		font-size: 16px;
	}

	.empty-state h3 {
		margin-top: 0;
		color: #4a5568;
		font-size: 20px;
		margin-bottom: 20px;
	}
</style>
