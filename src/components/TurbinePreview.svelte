<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import Step from "../enum/Step";
  import CompletionBar from "./utils/CompletionBar.svelte";

  export let turbine = {
    id: 0,
    turbineName: "",
    turbineNumber: "",
    description: "",
    odlNumber: 0,
    power: "KILOWATT",
    operation: [],
    creationDate: "",
    turbineState: "",
    completedSteps: 0,
    startingDateOOCC: "",
    permittingDate: "",
    priorNotification: "",
    mailSent: false,
  };

  $: reachedStep = turbine.creationDate.includes("2022")
    ? Step[turbine.completedSteps + 2]
    : Step[turbine.completedSteps + 1];

  $: reachedStepDate =
    reachedStep === Step[3]
      ? turbine.priorNotification
      : reachedStep === Step[4]
      ? turbine.permittingDate
      : null;

  // Expiring date is permittingDate + 90 days formatted in dd-MM-yyyy
  $: expiringDate = turbine.permittingDate
    ? new Date(
        new Date(turbine.permittingDate).getTime() + 90 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("it-IT")
    : null;

  $: isOverdue =
    expiringDate &&
    new Date(turbine.permittingDate).getTime() + 90 * 24 * 60 * 60 * 1000 <
      new Date().getTime();

  $: mainOperation = turbine.operation[0]
    ? turbine.operation[0].length > 16
      ? turbine.operation[0].substring(0, 14) + "..."
      : turbine.operation[0]
    : "";

  const dispatch = createEventDispatcher();

  const handleDetailsOpening = () => {
    dispatch("showDetails", turbine.id);
  };

  let tooltipOperation = false;
</script>

<div class="snap-start pt-1">
  <div
    in:slide={{ duration: 1000 }}
    class="bg-gray-800 px-4 my-2 mx-2 md:mx-0 rounded-sm shadow-md hover:ring-2 ring-blue-500 transition duration-300 ease-in-out transform h-auto md:h-68 xl:h-56 pb-5 content-start"
  >
    <div class="grid grid-cols-1 text-white font-mono gap-3">
      <h1 class="font-bold text-4xl mt-3 col-span-1 md:col-span-2">
        {turbine.turbineName}
        {#if turbine.turbineNumber}
          <span class="hidden md:inline-block"> - {turbine.turbineNumber}</span>
        {/if}
      </h1>

      <div class="col-span-1 md:col-span-2">
        <CompletionBar
          completedSteps={turbine.completedSteps}
          creationDate={turbine.creationDate}
        />
      </div>
      <div class="col-span-1" />

      <!-- {#if reachedStepDate !== null && reachedStepDate !== undefined}
        <span class="flex md:justify-end md:mr-5">{reachedStepDate}</span>
      {:else} -->
      <div class="hidden md:flex" />
      <!-- {/if} -->

      <div class="flex gap-2 md:-mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-map-pin"
          ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle
            cx="12"
            cy="10"
            r="3"
          /></svg
        >
        <span>{turbine.description}</span>
      </div>

      {#if turbine.odlNumber !== undefined && turbine.odlNumber !== 0}
        <p class="flex md:justify-end">
          ODL:&nbsp;<span class="text-blue-400">{turbine.odlNumber}</span>
        </p>
      {:else}
        <div class="hidden md:flex col-span-2" />
      {/if}

      <div
        class="flex gap-2"
        on:mouseover={() => (tooltipOperation = true)}
        on:focus={() => (tooltipOperation = true)}
        on:mouseleave={() => (tooltipOperation = false)}
        on:focusout={() => (tooltipOperation = false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-clipboard"
          ><path
            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg
        >
        {#if tooltipOperation}
          <div
            on:mouseover={() => (tooltipOperation = true)}
            on:focus={() => (tooltipOperation = true)}
            on:mouseleave={() => (tooltipOperation = false)}
            on:focusout={() => (tooltipOperation = false)}
            class="absolute z-10 bg-gray-400 text-white rounded-sm shadow-md p-2 left-10 cursor-default"
          >
            <p>{turbine.operation[0]}</p>
          </div>
        {/if}

        <span class="flex select-none">{mainOperation} </span>
      </div>

      <span class="flex md:justify-end font-bold">{turbine.turbineState}</span>
      <span class="font-mono hidden xl:flex">Scadenza cantiere: </span>
      <span class="font-mono flex xl:hidden"
        >Scadenza:&ThinSpace;<span class="font-bold"
          >{expiringDate || "N/A"}</span
        ></span
      >
      {#if expiringDate}
        <div class="hidden xl:flex font-mono font-bold text-end justify-end">
          <span class={isOverdue ? "text-red-500" : ""}>{expiringDate}</span>
        </div>
      {:else}
        <span class="hidden xl:flex font-mono font-bold text-end justify-end"
          >Non disponibile</span
        >
      {/if}
    </div>

    <div class="absolute top-0 right-0 mr-2 mt-2">
      <div class="flex flex-col md:flex-row gap-2 md:gap-0">
        <button
          class="py-2 px-2 hover:bg-gray-400 rounded-full group"
          on:click|preventDefault={handleDetailsOpening}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book-open"
            ><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path
              d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
            /></svg
          >
        </button>
      </div>
    </div>
  </div>
</div>
