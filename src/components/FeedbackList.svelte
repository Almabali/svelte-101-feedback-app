<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { FeedbackStore } from "../stores";
    import FeedbackItem from "./FeedbackItem.svelte";
    // import { onDestroy } from "svelte";
    // import type { IFeedback } from "../models/feedbacks";
    // let feedbacks: Array<IFeedback> = [];

    // const unsubscribe = FeedbackStore.subscribe(
    //     (data: Array<IFeedback>) => (feedbacks = data)
    // );

    // onDestroy(() => unsubscribe());
</script>

{#each $FeedbackStore as feedback (feedback.id)}
    <div in:scale out:fade>
        <FeedbackItem {feedback}/>
    </div>
{/each}
