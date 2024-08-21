const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  // Method to register a new answer
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    // Validate input
    if (
      typeof answer === "number" &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
    } else {
      console.log("Invalid input, please select a valid option.");
    }

    // Display results after registering a new answer
    this.displayResults("string");
    this.displayResults("array");
  },

  // Method to display results
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document.querySelector(".poll-button").addEventListener("click", function () {
  poll.registerNewAnswer();
});
poll.displayResults.call({ answers: [5, 2, 3] }, "array");
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "array");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
