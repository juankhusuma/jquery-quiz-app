const quizzes = [
    {
        id: "1",
        question: "lorem ipsum 1",
        options: [
            {
                text: "a",
                desc: "Sed ut perspiciatis unde omnis",
                isAnswer: true
            },
            {
                text: "b",
                desc: "eaque ipsa quae ab illo inventore ve",
                isAnswer: false
            },
            {
                text: "c",
                desc: "am aliquam quaerat voluptatem.",
                isAnswer: false
            },
            {
                text: "d",
                desc: "Neque porro quisquam est,",
                isAnswer: false
            },
        ]
    },
    {
        id: "2",
        question: "lorem ipsum 2",
        options: [
            {
                text: "a",
                desc: "A wonderful serenity has taken possession",
                isAnswer: false
            },
            {
                text: "b",
                desc: "like these sweet mornings of spring",
                isAnswer: true
            },
            {
                text: "c",
                desc: "whole heart. I am alone, and feel",
                isAnswer: false
            },
            {
                text: "d",
                desc: "impenetrable foliage of my trees",
                isAnswer: false
            },
        ]
    },
]

let score = 0

quizzes.forEach(
    (quiz) => {
        $("#quizzes").append(`
            <div class="question" id="q-${quiz.id}">
                <p>${quiz.question}</p>
            </div>
        `)

        quiz.options.forEach(
            (q) => {
                $(`#q-${quiz.id}`).append(
                    `
                        <div class="show-q-${quiz.id}">
                            <button class="${ q.isAnswer ? "answer" : "not-answer" } option-${quiz.id}">${q.text}</button>
                            <span>${q.desc}</span>
                        </div>
                    `
                )
            }
        )

        $(`.option-${quiz.id}`).on("click", (event) => {
            $(`.show-q-${quiz.id}`).each(
                (i, e) => {
                    $(e).addClass("reveal")
                }
            )

            if ($(event.target).hasClass("answer")) {
                score += 1;
                $("#score").text(score)
            }
        })
    }
)

