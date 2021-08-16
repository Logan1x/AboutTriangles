import React from "react";

function triangleArea() {
  function calcArea(input) {
    let areaOfTringle =
      (1 / 2) * Number(input[0].value) * Number(input[1].value);
    return areaOfTringle;
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const outputEl = document.getElementById("output");
    let inpt = document.querySelectorAll(".input1");
    let areaOfTringle = calcArea(inpt);

    // console.log(areaOfTringle);
    outputEl.innerText =
      "The area of triangle from mentioned Base and Height is: " +
      areaOfTringle +
      "cm²";
  }
  return (
    <div className="w-screen h-page flex flex-col justify-center items-center">
      <h1 className="text-2xl my-2">Area of Triangle</h1>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex flex-col max-w-sm mx-auto"
      >
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
          <p className="px-2">1/2</p>
          <label htmlFor="" className="px-2 w-screen text-center md:w-full">
            *
          </label>
          <input
            type="number"
            required
            className="input1 border-2 border-gray-800 rounded my-2 text-center w-40"
            placeholder={"Base(in cm)"}
          />
          <label htmlFor="" className="px-2 w-screen text-center md:w-full">
            *
          </label>
          <input
            type="number"
            required
            className="input1 border-2 border-gray-800 rounded my-2 text-center w-40"
            placeholder={"Height(in cm)"}
          />
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

export default triangleArea;
