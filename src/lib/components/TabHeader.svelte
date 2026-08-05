<script>
	let { displayName, selected, onSelect } = $props();
</script>

<span class="pill" class:selected onclick={() => onSelect(displayName)}>
	{displayName}
</span>

<style>
	.pill {
		display: inline-block;
		padding: 8px 18px;
		border-radius: 999px;
		cursor: pointer;
		text-transform: capitalize;
		font-size: 13px;
		font-weight: 600;
		color: #ffffff;
		background: rgba(255, 255, 255, 0.14);
		border: 1px solid rgba(255, 255, 255, 0.3);
		transition:
			background 0.2s ease,
			transform 0.15s ease;
	}

	.pill:hover {
		background: rgba(255, 255, 255, 0.28);
		transform: translateY(-1px);
	}

	.selected {
		color: #1c2440;
		background: #ffd166;
		border-color: #ffd166;
		box-shadow: 0 4px 12px rgba(255, 209, 102, 0.4);
	}
</style>
