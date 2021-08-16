import React from "react";

function traingleQuiz() {
  function calcScore(formEle) {
    let score = 0;
    let index = 0;

    const formResults = new FormData(formEle);
    // console.log(formResults);

    for (let entry in formResults.values()) {
      console.log(entry);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const outputEl = document.getElementById("output");
    const formEle = document.getElementById("formele");

    calcScore(formEle);

    const correctAnswers = ["180", "Yes"];
  }
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl my-2">Area of Triangle</h1>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        id="formele"
        className="flex flex-col max-w-sm mx-auto"
      >
        <div className="border rounded shadow py-2 hover:shadow-lg mx-2 max-w-screen md:px-4 md:py-4">
          <p className="text-center py-2 px-2">
            Question : What is sum of the angles of a triangle?
          </p>

          <div className="flex flex-wrap md:flex-nowrap justify-center items-center ">
            <label htmlFor="" className="px-2 w-screen text-center md:w-full">
              <input
                type="radio"
                className="input1 mx-1"
                placeholder={"Base(in cm)"}
                name="ques1"
                value={"100"}
              />
              100
            </label>
            <label htmlFor="" className="px-2 w-screen text-center md:w-full">
              <input
                type="radio"
                className="input1 mx-1"
                placeholder={"Base(in cm)"}
                name="ques1"
                value={"90"}
              />
              90
            </label>
            <label htmlFor="" className="px-2 w-screen text-center md:w-full">
              <input
                type="radio"
                className="input1 mx-1"
                placeholder={"Base(in cm)"}
                name="ques1"
                value={"180"}
              />
              180
            </label>
          </div>
        </div>

        <div className="border rounded shadow py-2 md:px-4 md:py-4 hover:shadow-lg mt-2 mx-2 max-w-screen">
          <p className="text-center py-2 px-2">
            Question : the sum of any two sides of a triangle is always greater
            than the third side?
          </p>

          <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
            <label htmlFor="" className="px-2 w-screen text-center md:w-full">
              <input
                type="radio"
                className="input1 mx-1"
                placeholder={"Base(in cm)"}
                name="ques2"
                value={"Yes"}
              />
              Yes
            </label>
            <label htmlFor="" className="px-2 w-screen text-center md:w-full">
              <input
                type="radio"
                className="input1 mx-1"
                placeholder={"Base(in cm)"}
                name="ques2"
                value={"No"}
              />
              No
            </label>
            <label htmlFor="" className="px-2 w-screen text-center md:w-full">
              <input
                type="radio"
                className="input1 mx-1"
                placeholder={"Base(in cm)"}
                name="ques2"
                value={"Maybe"}
              />
              Maybe
            </label>
          </div>
        </div>

        <button
          id="btn"
          type="submit"
          className="bg-indigo-500 text-yellow-50 py-2 px-3 rounded shadow mx-auto w-24 mt-3 hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
      <div id="output" className="mt-2 max-w-sm text-center"></div>
    </div>
  );
}

export default traingleQuiz;
