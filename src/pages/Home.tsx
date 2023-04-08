import { log } from "console";
import { useState } from "react";
import bubbleSort from "../sortingAlgorithms/bubbleSort";
import selectionSort from "../sortingAlgorithms/selectionSort";

export function Home(props: any) {
  const options = [
    { value: "", text: "choose an option" },
    { value: "bubble", text: "Bubble Sort" },
    { value: "selection", text: "Selection Sort" },
    { value: "insertion", text: "Insertion Sort" },
    { value: "merge", text: "Merge Sort" },
    { value: "quick", text: "Quick Sort" },
    { value: "sortAll", text: "Sort all Algorithms" },
  ];

  const [selected, setSelected] = useState(options[0].text);

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  function onSubmitHandler(event: any) {
    event.preventDefault();
    if (selected === "bubble") {
      const sorteDdata: any = bubbleSort();
      props.onSubmission([{ Algorithm: "bubble", sortedData: sorteDdata }]);
      //   console.log(sorteDdata);
    } else if (selected === "selection") {
      const sorteDdata: any = selectionSort();
      props.onSubmission([{ Algorithm: "selected", sortedData: sorteDdata }]);
    } else if (selected === "sortAll") {
      let RESULT: any = [];
      const bubbleSortData: any = bubbleSort();
      RESULT.push({ Algorithm: "bubble", sortedData: bubbleSortData });
      const selectionSortData: any = selectionSort();
      RESULT.push({ Algorithm: "selection", sortedData: selectionSortData });
      props.onSubmission(RESULT);
    }

    setSelected(options[0].text);
  }
  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">
          select an algorithm:
          <select name="" id="" value={selected} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </label>
        <button type="submit"> sort </button>
      </form>
    </div>
  );
}
