<!-- svelte-ignore a11y_no_static_element_interactions -->
 <!-- svelte-ignore a11y_click_events_have_key_events -->
 <svelte:options customElement="demo-form-new" />

 <script lang="ts">
   import "medblocks-ui";
   import "medblocks-ui/dist/styles";
 
   let form: any;
   let selectedPart = "";
 
   function selectPart(part: string) {
	 selectedPart = part;
   }
   export const mbValidate = () => {
	 return true;
   };
   export const mbSubmit = () => {
	 return form.export();
   };
 </script>
 
 <main>
   <div style="width: 80%; margin-left: auto; margin-right: auto;">
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
 
	 <mb-form bind:this={form} >
	 <mb-context path="mini-encounter-test-1/context/start_time"></mb-context>
	 <mb-context path="mini-encounter-test-1/context/setting"></mb-context>
	 <mb-input
	   path="mini-encounter-test-1/problem_diagnosis/problem_diagnosis_name"
	   label="Problem/Diagnosis name"
	 ></mb-input>
	 <mb-buttons
	   path="mini-encounter-test-1/problem_diagnosis/body_site"
	   label="Body site"
	   terminology="local_terms"
	   data={{ code: selectedPart, value: selectedPart, terminology: "local_terms" }}
	 >
	   <mb-option value="Head" label="Head"></mb-option>
	   <mb-option value="Torso" label="Torso"></mb-option>
	   <mb-option value="Left Arm" label="Left Arm"></mb-option>
	   <mb-option value="Right Arm" label="Right Arm"></mb-option>
	   <mb-option value="Abdomen" label="Abdomen"></mb-option>
	   <mb-option value="Left Leg" label="Left Leg"></mb-option>
	   <mb-option value="Right Leg" label="Right Leg"></mb-option>
	 </mb-buttons>
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
   </div>
 </main>
 
 <style>
 </style>
 