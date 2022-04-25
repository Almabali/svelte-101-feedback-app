<script lang="ts">
	import FeedbackForm from "./components/FeedbackForm.svelte";

	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import type { IFeedback } from "./models/feedbacks";

	let feedbacks = [];

	const addFeedback = (e: CustomEvent) => {
		const newFeedback: IFeedback = e.detail;
		feedbacks = [...feedbacks, newFeedback];
	};
</script>

<main class="container">
	<FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats />
	<FeedbackList />
</main>

<style>
</style>
