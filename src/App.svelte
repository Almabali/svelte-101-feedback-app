<script lang="ts">
	import FeedbackForm from "./components/FeedbackForm.svelte";

	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import { IFeedback, INIT_FEEDBACKS } from "./models/feedbacks";

	let feedbacks: Array<IFeedback> = INIT_FEEDBACKS;

	$: count = feedbacks.length;
	$: average =
		feedbacks.reduce((avg: number, { rating }) => avg + rating, 0) /
		feedbacks.length;

	const deleteFeedback = (e: CustomEvent) => {
		const itemId: number = e.detail;
		feedbacks = feedbacks.filter((item: IFeedback) => item.id != itemId);
	};

	const addFeedback = (e: CustomEvent) => {
		const newFeedback: IFeedback = e.detail;
		feedbacks = [...feedbacks, newFeedback];
	};
</script>

<main class="container">
	<FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats {count} {average} />
	<FeedbackList {feedbacks} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
