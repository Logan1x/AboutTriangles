export default function App() {
  const outputEl = document.getElementById("output");

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
    let inpt = document.querySelectorAll(".input1");
    let sumOfAngle = calcSum(inpt);
    if (checkTraingle(sumOfAngle)) {
      outputEl.innerText = "Above Angles forms Tringle";
    } else {
      outputEl.innerText = "Above Angles Does not forms Tringle";
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl my-2">Sum Of Angles</h1>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex flex-col max-w-md mx-auto"
      >
        <label htmlFor="">Input 1</label>
        <input
          type="number"
          required
          className="input1 border-2 border-gray-800 rounded my-2"
        />
        <label htmlFor="">Input 2</label>
        <input
          type="number"
          required
          className="input1 border-2 border-gray-800 rounded my-2"
        />
        <label htmlFor="">Input 3</label>
        <input
          type="number"
          required
          className="input1 border-2 border-gray-800 rounded my-2"
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
