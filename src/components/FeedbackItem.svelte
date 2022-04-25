<script lang="ts">
    import type { IFeedback } from "../models/feedbacks";
    import Card from "./ui/Card.svelte";

    export let feedback: IFeedback;
</script>

<Card>
    <div class="num-display">
        {feedback.rating}
    </div>
    <div class="close">X</div>
    <p class="text-display">{feedback.text}</p>
</Card>

<style>
    .num-display {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50px;
      height: 50px;
      background: #ff6a95;
      color: #fff;
      border: 1px #eee solid;
      border-radius: 50%;
      padding: 10px;
      text-align: center;
      font-size: 19px;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      background: none;
      border: none;
    }
  </style>