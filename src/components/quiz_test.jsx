import { useState } from "react";

const answers = ["180", "isosceles", "equilateral", "25", "15"];

function TriangleQuiz() {
  const [playing, setPlaying] = useState(false);
  const [rightInput, setRightInput] = useState(true);
  const [displayButton, setDisplayButton] = useState(true);
  const [score, setScore] = useState(0);
  const [attemptedAnswers, setAttemptedAnswers] = useState(new Array(5));
  const [questionId, setQuestionId] = useState(new Array(5));

  const [state, setState] = useState({});

  function resetState(e) {
    setState({});
    setScore(0);
    setDisplayButton(true);
    setPlaying(false);
    setRightInput("");
    setAttemptedAnswers(new Array(5));
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((button) => {
      button.checked = false;
    });

    for (let i = 0; i < questionId.length; i++) {
      document.querySelector(
        `.question-menu:nth-child(${i + 1}`
      ).style.backgroundColor = "transparent";
    }

    setQuestionId(new Array(5));
  }

  function getSizeOfAnswers() {
    let size = 0;
    for (let key in state) {
      size++;
    }
    return size;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const size = getSizeOfAnswers();
    if (size !== answers.length) {
      setPlaying(true);
      setRightInput(false);
    } else {
      setPlaying(true);
      setRightInput(true);
      setDisplayButton(false);

      let score = 0;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i] === attemptedAnswers[i]) {
          score++;
          document.querySelector(
            `.question-menu:nth-child(${i + 1}`
          ).style.backgroundColor = "lightgreen";
        } else {
          document.querySelector(
            `.question-menu:nth-child(${i + 1}`
          ).style.backgroundColor = "#F08080";
        }
      }
      setScore(score);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    const index = Number.parseInt(e.target.className);
    const name = e.target.name;

    let items = [...attemptedAnswers];
    items[index - 1] = value;
    setAttemptedAnswers(items);

    let names = [...questionId];
    names[index - 1] = name;
    setQuestionId(names);

    let currState = state;
    currState[e.target.name] = value;
    setState(currState);
  }

  return (
    <section className="text-left text-xl mx-3 md:w-3/4 lg:w-1/3  md:mx-auto">
      <h2 className="text-center text-xl font-semibold my-2">
        Choose the correct answer for the questions below
      </h2>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <ol>
            {/* Question one */}
            <div className="question-menu p-3 mb-2 rounded-md">
              <li>
                <label className="question-label questionOne">
                  Sum of all angles of triangle is?
                </label>
              </li>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionOne"
                  id="questionOneYes"
                  className="1"
                  value="180"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionOneYes" className="question-option px-2">
                  180<sup>0</sup>
                </label>
              </div>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionOne"
                  id="questionOneNo"
                  value="120"
                  className="1"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionOneNo" className="question-option px-2">
                  120<sup>0</sup>
                </label>
              </div>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionOne"
                  id="questionOneNo"
                  value="150"
                  className="1"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionOneNo" className="question-option px-2">
                  150<sup>0</sup>
                </label>
              </div>
            </div>

            {/* Question Two */}
            <div className="question-menu p-3 mb-2 rounded-md">
              <li>
                <label className="question-label questionTwo">
                  A triangle has angles: 45<sup>0</sup>, 45<sup>0</sup> and 90
                  <sup>0</sup>. Choose the type of triangle.
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTwo"
                  id="questionTwoEq"
                  value="equilateral"
                  className="2"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTwoEq" className="question-option px-2">
                  Equilateral
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTwo"
                  id="questionTwoSc"
                  value="scalene"
                  className="2"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTwoSc" className="question-option px-2">
                  Scalene
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionTwo"
                  id="questionTwoIs"
                  value="isosceles"
                  className="2"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionTwoIs" className="question-option px-2">
                  Isosceles
                </label>
              </div>
            </div>

            {/* Question Three */}
            <div className="question-menu p-3 mb-2 rounded-md">
              <li>
                <label className="question-label questionThree">
                  A triangle has angles: 60<sup>0</sup>, 60<sup>0</sup> and 60
                  <sup>0</sup>. Choose the type of triangle.
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionThree"
                  id="questionThreeEq"
                  value="equilateral"
                  className="3"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionThreeEq" className="question-option px-2">
                  Equilateral
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionThree"
                  id="questionThreeSc"
                  value="scalene"
                  className="3"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionThreeSc" className="question-option px-2">
                  Scalene
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionThree"
                  id="questionThreeIs"
                  value="isosceles"
                  className="3"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionThreeIs" className="question-option px-2">
                  Isosceles
                </label>
              </div>
            </div>

            {/* Question Four */}
            <div className="question-menu p-3 mb-2 rounded-md">
              <li>
                <label className="question-label questionThree">
                  Find the area of triangle if its base is 10cm and height is
                  5cm.
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFour"
                  id="questionFourEq"
                  value="10"
                  className="4"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFourEq" className="question-option px-2">
                  10cm<sup>2</sup>
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFour"
                  id="questionFourAc"
                  value="25"
                  className="4"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFourAc" className="question-option px-2">
                  25cm<sup>2</sup>
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFour"
                  id="questionFourOb"
                  value="20"
                  className="4"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFourOb" className="question-option px-2">
                  20cm<sup>2</sup>
                </label>
              </div>
              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFour"
                  id="questionFourOb"
                  value="25m"
                  className="4"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFourOb" className="question-option px-2">
                  25m<sup>2</sup>
                </label>
              </div>
            </div>

            {/* Question Five */}
            <div className="question-menu p-3 rounded-md">
              <li>
                <label className="question-label questionFive">
                  A triangle has a perimeter of 45. What is the length of one
                  side?
                </label>
              </li>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFive"
                  id="questionFiveVal1"
                  value="9"
                  className="5"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFiveVal1" className="question-option px-2">
                  9
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFive"
                  id="questionFiveVal2"
                  value="15"
                  className="5"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFiveVal2" className="question-option px-2">
                  15
                </label>
              </div>

              <div className="option-wrapper">
                <input
                  type="radio"
                  name="questionFive"
                  id="questionFiveVal3"
                  value="3"
                  className="5"
                  onChange={(e) => handleChange(e)}
                />
                <label for="questionFiveVal3" className="question-option px-2">
                  3
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              {displayButton && (
                <input
                  type="submit"
                  className="btn-calculate text-center mx-auto mt-2 my-1 px-3 py-2 bg-indigo-600 rounded text-yellow-50 hover:bg-indigo-700"
                  value="Calculate Score"
                  onChange={(e) => handleChange(e)}
                />
              )}
              {!displayButton && (
                <input
                  type="reset"
                  className="btn-reset text-center mx-auto mt-2 my-1 px-3 py-2 bg-indigo-600 rounded text-yellow-50 hover:bg-indigo-700"
                  value="Take Quiz Again"
                  onClick={resetState}
                />
              )}
            </div>
          </ol>
        </form>
        {playing && !rightInput && (
          <div className="quiz-output error text-center">
            Please answer all the questions
          </div>
        )}
        {playing && rightInput && (
          <div className="quiz-output success text-center">
            SCORE: <span className="quiz-score">{score}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default TriangleQuiz;

// this code is inspired by https://github.com/bharati-21/play-with-triangles
