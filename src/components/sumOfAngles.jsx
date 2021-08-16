export default function sumOfAngleTraingle() {
  function calcSum(inpt) {
    // console.log(inpt);
    let sumOfAngle =
      Number(inpt[0].value) + Number(inpt[1].value) + Number(inpt[2].value);
    return sumOfAngle;
  }

  function checkTraingle(sumOfAngle) {
    if (sumOfAngle === 180) {
      return true;
    } else {
      return false;
    }
  }
  // btn.addEventListener("click", calcClick())

  function handleOnSubmit(e) {
    e.preventDefault();
    const outputEl = document.getElementById("output");
    let inpt = document.querySelectorAll(".input1");
    let sumOfAngle = calcSum(inpt);
    if (checkTraingle(sumOfAngle)) {
      outputEl.innerText = "Above Angles forms Tringle";
    } else {
      outputEl.innerText = "Above Angles does not forms Tringle";
    }
  }

  return (
    <div className="w-screen h-page flex flex-col justify-center items-center">
      <h1 className="text-2xl my-2">Sum Of Angles</h1>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex flex-col max-w-md mx-auto"
      >
        <input
          type="number"
          required
          className="input1 border-2 border-gray-800 rounded my-2 text-center py-1"
          placeholder={"angle-1"}
        />
        <input
          type="number"
          required
          className="input1 border-2 border-gray-800 rounded my-2 text-center py-1"
          placeholder={"angle-2"}
        />
        <input
          type="number"
          required
          className="input1 border-2 border-gray-800 rounded my-2 text-center py-1"
          placeholder={"angle-3"}
        />
        <button
          id="btn"
          type="submit"
          className="bg-indigo-500 text-yellow-50 py-2 px-3 rounded shadow mx-auto w-24 mt-3 hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
      <div id="output" className="mt-2"></div>
    </div>
  );
}
