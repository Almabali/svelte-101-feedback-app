<script lang="ts">
    import { fade, scale } from 'svelte/transition'
    import type { IFeedback } from "../models/feedbacks";
    import FeedbackItem from "./FeedbackItem.svelte";

    export let feedbacks: Array<IFeedback> = [];
</script>

{#each feedbacks as feedback (feedback.id)}
    <div in:scale out:fade>
        <FeedbackItem {feedback} on:delete-feedback />
    </div>
{/each}
