import { writable } from "svelte/store";

export const FeedbackStore = writable(
    [
        {
            id: 1,
            rating: 10,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ullam nesciunt
        fugit eligendi! Necessitatibus debitis saepe nam qui voluptas! Corporis distinctio,
        ratione ipsam ipsa eaque nostrum accusantium fuga sunt enim.`
        }, {
            id: 2,
            rating: 5,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ullam nesciunt
        fugit eligendi! Necessitatibus debitis saepe nam qui voluptas! Corporis distinctio,
        ratione ipsam ipsa eaque nostrum accusantium fuga sunt enim.`
        }, {
            id: 3,
            rating: 0,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ullam nesciunt
        fugit eligendi! Necessitatibus debitis saepe nam qui voluptas! Corporis distinctio,
        ratione ipsam ipsa eaque nostrum accusantium fuga sunt enim.`
        },
    ]
    
)