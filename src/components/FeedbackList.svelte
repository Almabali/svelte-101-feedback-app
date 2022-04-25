<script lang="ts">
    import type { IFeedback } from "../models/feedbacks";

    export let feedbacks: Array<IFeedback> = [];
</script>

{#each feedbacks as fb (fb.id)}
    <h3>{fb.text}</h3>
    <br>
{/each}
