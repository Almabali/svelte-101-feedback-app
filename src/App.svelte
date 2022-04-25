<script lang="ts">
	import FeedbackForm from "./components/FeedbackForm.svelte";

	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import type { IFeedback } from "./models/feedbacks";

	let feedbacks = [];

	$: count = feedbacks.length;
	$: average =
		feedbacks.reduce((avg: number, { rating }) => avg + rating, 0) /
		feedbacks.length;

	const addFeedback = (e: CustomEvent) => {
		const newFeedback: IFeedback = e.detail;
		feedbacks = [...feedbacks, newFeedback];
	};
</script>

<main class="container">
	<FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats {count} {average} />
	<FeedbackList />
</main>

<style>
</style>
