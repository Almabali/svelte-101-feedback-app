<script lang="ts">
	import FeedbackList from "./components/FeedbackList.svelte";
	import { IFeedback, INIT_FEEDBACKS } from "./models/feedbacks";

	let feedbacks: Array<IFeedback> = INIT_FEEDBACKS;
</script>

<main>
	<FeedbackList {feedbacks}></FeedbackList>
</main>

<style>
</style>
