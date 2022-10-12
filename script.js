let score = 0;
let page = 1;

quizzes.forEach((quiz) => {
  $("#quizzes").append(`
            <div class="question ${quiz.id == page ? "" : "hide"}" id="q-${
    quiz.id
  }">
                <p>${quiz.question}</p>
            </div>
        `);

  quiz.options.forEach((q) => {
    $(`#q-${quiz.id}`).append(
      `
        <div class="show-q-${quiz.id}">
            <button class="${q.isAnswer ? "answer" : "not-answer"} option-${
        quiz.id
      }">${q.text}</button>
            <span>${q.desc}</span>
        </div>
    `
    );
  });

  $(`.option-${quiz.id}`).on("click", (event) => {
    $(`.show-q-${quiz.id}`).each((i, e) => {
      $(e).addClass("reveal");
    });

    $(".reveal button").attr("disabled", true);

    if ($(event.target).hasClass("answer")) {
      score += 1;
      $("#score").text(score);
    }
  });
});

$("#next-btn").on("click", (event) => {
  const questions = $(".question");
  questions.removeClass("hide");
  page++;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].id !== `q-${page}`) {
      $(`#q-${i + 1}`).addClass("hide");
    }
  }

  if (page == quizzes.length) {
    $(event.target).addClass("hide");
  }

  if (page > 1) {
    $("#prev-btn").removeClass("hide");
  }
});

$("#prev-btn").on("click", (event) => {
  const questions = $(".question");
  questions.removeClass("hide");
  page--;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].id !== `q-${page}`) {
      $(`#q-${i + 1}`).addClass("hide");
    }
  }

  if (page == 1) {
    $(event.target).addClass("hide");
  }

  if (page < questions.length) {
    $("#next-btn").removeClass("hide");
  }
});
