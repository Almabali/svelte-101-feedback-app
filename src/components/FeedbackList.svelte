<script lang="ts">
    import type { IFeedback } from "../models/feedbacks";
    import FeedbackItem from "./FeedbackItem.svelte";

    export let feedbacks: Array<IFeedback> = [];
</script>

{#each feedbacks as feedback (feedback.id)}
    <FeedbackItem {feedback} on:delete-feedback />
{/each}
