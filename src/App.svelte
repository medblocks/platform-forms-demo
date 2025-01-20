<svelte:options customElement="demo-form" />

<script lang="ts">
  import "medblocks-ui";
  import "medblocks-ui/dist/styles";
</script>

<main>
  <mb-context path="mini-encounter-test-1/context/start_time"></mb-context>
  <mb-context path="mini-encounter-test-1/context/setting"></mb-context>
  <div
    style="display: flex; column-gap: 0.5rem;"
  >
    <p
      style="margin-top: auto; margin-bottom: auto; ">
      Diagnosis
    </p>
    <mb-input
      id="text_field"
      path="mini-encounter-test-1/problem_diagnosis/problem_diagnosis_name"
    ></mb-input>
  </div>

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
</main>

<style>
</style>
