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
  ];

  const [selected, setSelected] = useState(options[0].text);

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  function onSubmitHandler(event: any) {
    event.preventDefault();
    if (selected === "bubble") {
      const sorteDdata: any = bubbleSort();

      props.onSubmission(sorteDdata);
      //   console.log(sorteDdata);
    } else if (selected === "selection") {
      const sorteDdata: any = selectionSort();
      props.onSubmission(sorteDdata);
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
