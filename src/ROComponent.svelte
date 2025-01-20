<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:options customElement="demo-form-ro" />

<script lang="ts">
	import "medblocks-ui";
	import "medblocks-ui/dist/styles";
	let selectedPart = "";
	export const mbConnect = (ehr: string, composition: any) => {
		selectedPart =
			composition["mini-encounter-test-1/problem_diagnosis/body_site"];
	};
</script>

<main>
	<div style="margin: 20px auto; text-align: center;">
		<svg width="150" height="400">
			<!-- Head -->

			<circle
				cx="75"
				cy="40"
				r="25"
				fill={selectedPart === "Head" ? "blue" : "lightgray"}
				style="cursor:pointer;"
			/>
			<!-- Torso -->
			<rect
				x="50"
				y="65"
				width="50"
				height="100"
				fill={selectedPart === "Torso" ? "blue" : "lightgray"}
				style="cursor:pointer;"
			/>
			<!-- Left Arm -->
			<rect
				x="20"
				y="70"
				width="30"
				height="80"
				fill={selectedPart === "Left Arm" ? "blue" : "lightgray"}
				style="cursor:pointer;"
			/>
			<!-- Right Arm -->
			<rect
				x="100"
				y="70"
				width="30"
				height="80"
				fill={selectedPart === "Right Arm" ? "blue" : "lightgray"}
				style="cursor:pointer;"
			/>
			<!-- Lower Body -->
			<rect
				x="50"
				y="165"
				width="50"
				height="80"
				fill={selectedPart === "Abdomen" ? "blue" : "lightgray"}
				style="cursor:pointer;"
			/>
			<!-- Left Leg -->
			<rect
				x="50"
				y="245"
				width="20"
				height="80"
				fill={selectedPart === "Left Leg" ? "blue" : "lightgray"}
				style="cursor:pointer;"
			/>
			<!-- Right Leg -->
			<rect
				x="80"
				y="245"
				width="20"
				height="80"
				fill={selectedPart === "Right Leg" ? "blue" : "lightgray"}
				style="cursor:pointer;"
			/>
		</svg>
	</div>
</main>

<style>
</style>
