<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:options customElement="demo-form" />

<script lang="ts">
  import "medblocks-ui";
  import "medblocks-ui/dist/styles";

  interface IMbForm extends Element {
    insertContext: () => void;
    export: () => any;
  }

  let ref: IMbForm;
  let partVar: any;

  export const mbSubmit = () => {
    ref.insertContext();
    return ref.export();
  };

  export const mbInput = () => {};

  let selectedPart = "";

  function selectPart(part: string) {
    selectedPart = part;
    partVar.data = part;
  }
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
        on:click={() => selectPart("Head")}
        style="cursor:pointer;"
      />
      <!-- Torso -->
      <rect
        x="50"
        y="65"
        width="50"
        height="100"
        fill={selectedPart === "Torso" ? "blue" : "lightgray"}
        on:click={() => selectPart("Torso")}
        style="cursor:pointer;"
      />
      <!-- Left Arm -->
      <rect
        x="20"
        y="70"
        width="30"
        height="80"
        fill={selectedPart === "Left Arm" ? "blue" : "lightgray"}
        on:click={() => selectPart("Left Arm")}
        style="cursor:pointer;"
      />
      <!-- Right Arm -->
      <rect
        x="100"
        y="70"
        width="30"
        height="80"
        fill={selectedPart === "Right Arm" ? "blue" : "lightgray"}
        on:click={() => selectPart("Right Arm")}
        style="cursor:pointer;"
      />
      <!-- Lower Body -->
      <rect
        x="50"
        y="165"
        width="50"
        height="80"
        fill={selectedPart === "Abdomen" ? "blue" : "lightgray"}
        on:click={() => selectPart("Abdomen")}
        style="cursor:pointer;"
      />
      <!-- Left Leg -->
      <rect
        x="50"
        y="245"
        width="20"
        height="80"
        fill={selectedPart === "Left Leg" ? "blue" : "lightgray"}
        on:click={() => selectPart("Left Leg")}
        style="cursor:pointer;"
      />
      <!-- Right Leg -->
      <rect
        x="80"
        y="245"
        width="20"
        height="80"
        fill={selectedPart === "Right Leg" ? "blue" : "lightgray"}
        on:click={() => selectPart("Right Leg")}
        style="cursor:pointer;"
      />
    </svg>
  </div>

  <mb-form
    bind:this={ref}
    style="width: 80%; margin-left: auto; margin-right: auto; padding-top: 25px"
  >
    <mb-context path="mini-encounter-test-1/context/start_time"></mb-context>
    <mb-context path="mini-encounter-test-1/context/setting"></mb-context>
    <mb-input
      path="mini-encounter-test-1/problem_diagnosis/problem_diagnosis_name"
      label="Problem/Diagnosis name"
    ></mb-input>
    <mb-input
      bind:this={partVar}
      path="mini-encounter-test-1/problem_diagnosis/body_site"
      label="Body site"
    ></mb-input>
    <mb-context path="mini-encounter-test-1/problem_diagnosis/language"
    ></mb-context>
    <mb-context path="mini-encounter-test-1/problem_diagnosis/encoding"
    ></mb-context>
    <mb-context path="mini-encounter-test-1/problem_diagnosis/subject"
    ></mb-context>
    <mb-context path="mini-encounter-test-1/category"></mb-context>
    <mb-context path="mini-encounter-test-1/language"></mb-context>
    <mb-context path="mini-encounter-test-1/territory"></mb-context>
    <mb-context path="mini-encounter-test-1/composer"></mb-context>
  </mb-form>

</main>

<style>
</style>
