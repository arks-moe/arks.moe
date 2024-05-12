<script lang="ts">
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";

  const data: Record<string, number>[] = [
    {
      GPID0: 625,
      GPID1: 200,
      GPID2: 125,
      GPID3: 50,
      GPID4: 125,
      GPID5: 250,
      GPID6: 200,
      GPID7: 125,
      GPID8: 200,
      GPID9: 200,
    },
    {
      GPID0: 200,
      GPID1: 125,
      GPID2: 50,
      GPID3: 125,
      GPID4: 200,
      GPID5: 125,
      GPID6: 50,
      GPID7: 200,
      GPID8: 125,
      GPID9: 315,
    },
    {
      GPID0: 125,
      GPID1: 50,
      GPID2: 250,
      GPID3: 200,
      GPID4: 315,
      GPID5: 200,
      GPID6: 125,
      GPID7: 50,
      GPID8: 250,
      GPID9: 125,
    },
    {
      GPID0: 250,
      GPID1: 625,
      GPID2: 125,
      GPID3: 50,
      GPID4: 250,
      GPID5: 50,
      GPID6: 200,
      GPID7: 125,
      GPID8: 50,
      GPID9: 200,
    },
    {
      GPID0: 50,
      GPID1: 200,
      GPID2: 200,
      GPID3: 125,
      GPID4: 50,
      GPID5: 125,
      GPID6: 50,
      GPID7: 250,
      GPID8: 315,
      GPID9: 125,
    },
    {
      GPID0: 200,
      GPID1: 125,
      GPID2: 50,
      GPID3: 250,
      GPID4: 200,
      GPID5: 315,
      GPID6: 250,
      GPID7: 50,
      GPID8: 125,
      GPID9: 250,
    },
    {
      GPID0: 125,
      GPID1: 50,
      GPID2: 625,
      GPID3: 125,
      GPID4: 125,
      GPID5: 250,
      GPID6: 125,
      GPID7: 200,
      GPID8: 200,
      GPID9: 50,
    },
    {
      GPID0: 50,
      GPID1: 250,
      GPID2: 125,
      GPID3: 200,
      GPID4: 200,
      GPID5: 50,
      GPID6: 50,
      GPID7: 315,
      GPID8: 50,
      GPID9: 200,
    },
    {
      GPID0: 250,
      GPID1: 50,
      GPID2: 200,
      GPID3: 50,
      GPID4: 125,
      GPID5: 200,
      GPID6: 315,
      GPID7: 125,
      GPID8: 250,
      GPID9: 50,
    },
    {
      GPID0: 125,
      GPID1: 200,
      GPID2: 50,
      GPID3: 625,
      GPID4: 50,
      GPID5: 125,
      GPID6: 125,
      GPID7: 200,
      GPID8: 125,
      GPID9: 125,
    },
    {
      GPID0: 200,
      GPID1: 125,
      GPID2: 50,
      GPID3: 125,
      GPID4: 250,
      GPID5: 250,
      GPID6: 315,
      GPID7: 250,
      GPID8: 200,
      GPID9: 200,
    },
    {
      GPID0: 50,
      GPID1: 50,
      GPID2: 250,
      GPID3: 200,
      GPID4: 50,
      GPID5: 50,
      GPID6: 250,
      GPID7: 315,
      GPID8: 50,
      GPID9: 50,
    },
    {
      GPID0: 315,
      GPID1: 250,
      GPID2: 125,
      GPID3: 50,
      GPID4: 625,
      GPID5: 125,
      GPID6: 50,
      GPID7: 50,
      GPID8: 200,
      GPID9: 250,
    },
    {
      GPID0: 125,
      GPID1: 50,
      GPID2: 200,
      GPID3: 200,
      GPID4: 125,
      GPID5: 315,
      GPID6: 125,
      GPID7: 200,
      GPID8: 125,
      GPID9: 125,
    },
    {
      GPID0: 250,
      GPID1: 200,
      GPID2: 200,
      GPID3: 315,
      GPID4: 200,
      GPID5: 50,
      GPID6: 250,
      GPID7: 125,
      GPID8: 315,
      GPID9: 200,
    },
    {
      GPID0: 50,
      GPID1: 125,
      GPID2: 50,
      GPID3: 250,
      GPID4: 50,
      GPID5: 625,
      GPID6: 50,
      GPID7: 50,
      GPID8: 250,
      GPID9: 50,
    },
    {
      GPID0: 200,
      GPID1: 50,
      GPID2: 250,
      GPID3: 125,
      GPID4: 315,
      GPID5: 125,
      GPID6: 200,
      GPID7: 250,
      GPID8: 50,
      GPID9: 125,
    },
    {
      GPID0: 125,
      GPID1: 125,
      GPID2: 125,
      GPID3: 200,
      GPID4: 125,
      GPID5: 200,
      GPID6: 125,
      GPID7: 50,
      GPID8: 200,
      GPID9: 315,
    },
    {
      GPID0: 200,
      GPID1: 250,
      GPID2: 50,
      GPID3: 50,
      GPID4: 50,
      GPID5: 50,
      GPID6: 625,
      GPID7: 200,
      GPID8: 50,
      GPID9: 50,
    },
    {
      GPID0: 50,
      GPID1: 50,
      GPID2: 200,
      GPID3: 315,
      GPID4: 250,
      GPID5: 200,
      GPID6: 50,
      GPID7: 125,
      GPID8: 200,
      GPID9: 125,
    },
    {
      GPID0: 315,
      GPID1: 200,
      GPID2: 125,
      GPID3: 250,
      GPID4: 50,
      GPID5: 125,
      GPID6: 200,
      GPID7: 50,
      GPID8: 125,
      GPID9: 250,
    },
    {
      GPID0: 250,
      GPID1: 125,
      GPID2: 50,
      GPID3: 125,
      GPID4: 200,
      GPID5: 200,
      GPID6: 125,
      GPID7: 625,
      GPID8: 250,
      GPID9: 50,
    },
    {
      GPID0: 125,
      GPID1: 50,
      GPID2: 315,
      GPID3: 50,
      GPID4: 125,
      GPID5: 50,
      GPID6: 200,
      GPID7: 250,
      GPID8: 125,
      GPID9: 125,
    },
    {
      GPID0: 50,
      GPID1: 315,
      GPID2: 250,
      GPID3: 200,
      GPID4: 50,
      GPID5: 250,
      GPID6: 50,
      GPID7: 125,
      GPID8: 50,
      GPID9: 200,
    },
    {
      GPID0: 200,
      GPID1: 200,
      GPID2: 200,
      GPID3: 50,
      GPID4: 250,
      GPID5: 125,
      GPID6: 200,
      GPID7: 50,
      GPID8: 625,
      GPID9: 50,
    },
    {
      GPID0: 50,
      GPID1: 315,
      GPID2: 125,
      GPID3: 125,
      GPID4: 50,
      GPID5: 200,
      GPID6: 50,
      GPID7: 200,
      GPID8: 50,
      GPID9: 50,
    },
    {
      GPID0: 50,
      GPID1: 250,
      GPID2: 315,
      GPID3: 250,
      GPID4: 125,
      GPID5: 50,
      GPID6: 125,
      GPID7: 50,
      GPID8: 125,
      GPID9: 250,
    },
    {
      GPID0: 125,
      GPID1: 125,
      GPID2: 50,
      GPID3: 50,
      GPID4: 200,
      GPID5: 50,
      GPID6: 250,
      GPID7: 125,
      GPID8: 50,
      GPID9: 625,
    },
  ];

  const firstDayDate = new Date("2023-06-07T12:00:00.000Z");
  const today = new Date();
  const diff = today.valueOf() - firstDayDate.valueOf();
  const floor = Math.floor(diff / 1000 / 60 / 60 / 24);
  const dayIndexInCycle = floor % 28;
  const dayInCycle = dayIndexInCycle + 1;
  const dayData = data[dayIndexInCycle];

  const bestOfDay = Object.keys(dayData).reduce((acc, key) => {
    if (dayData[key] > dayData[acc]) {
      return key;
    }
    return acc;
  }, "GPID0");

  const goldOrRainbow = dayData[bestOfDay] === 625 ? "Rainbow" : "Gold";

  onMount(() => {
    console.log(dayIndexInCycle);
    console.log(data[dayIndexInCycle]);
    console.log(bestOfDay);
  });

  const onCopyClick = () => {
    navigator.clipboard.writeText(bestOfDay);
    toast.remove();
    toast.success(`Copied "${bestOfDay}" to clipboard`);
  };
</script>

<Toaster />

<div class="text-center">
  <button
    on:click={onCopyClick}
    class="text-7xl mx-auto mb-2 font-extrabold hover:scale-105 active:scale-100 transition-transform bg-neutral text-neutral-content px-12 py-4 rounded-xl"
    >{bestOfDay}</button
  >
  <p class="mb-2">{dayData[bestOfDay]} Genesis Points ({goldOrRainbow})</p>
  <div class="font-light">
    <p>day in cycle: {dayInCycle}</p>
  </div>
</div>
