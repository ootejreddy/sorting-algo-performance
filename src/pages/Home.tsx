import { useState } from "react";
import bubbleSort from "../sortingAlgorithms/bubbleSort";
import selectionSort from "../sortingAlgorithms/selectionSort";
import { mergeSort } from "../sortingAlgorithms/mergeSort";
import insertionSort from "../sortingAlgorithms/insertionSort";
import { Button, Card, Container, Form, Navbar } from "react-bootstrap";
import quickSort from "../sortingAlgorithms/quickSort";
import quickSortThreeMedians from "../sortingAlgorithms/quickSortThreeMedians";
import heapSort from "../sortingAlgorithms/heapSort";

export function Home(props: any) {
  const options = [
    { value: "", text: "choose an option" },
    { value: "bubble", text: "Bubble Sort" },
    { value: "selection", text: "Selection Sort" },
    { value: "insertion", text: "Insertion Sort" },
    { value: "merge", text: "Merge Sort" },
    { value: "quick", text: "Quick Sort" },
    { value: "quickSortThreeMedians", text: "Quick Sort using three medians" },
    { value: "heap", text: "Heap Sort" },
    { value: "sortAll", text: "Sort all Algorithms" },
  ];

  const [selected, setSelected] = useState(options[0].text);

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  function onSubmitHandler(event: any) {
    event.preventDefault();
    console.log(`The selected is ${selected}`);

    if (selected === "bubble") {
      const sorteDdata: any = bubbleSort();
      props.onSubmission([{ Algorithm: "bubble", sortedData: sorteDdata }]);
      //   console.log(sorteDdata);
    } else if (selected === "selection") {
      const sorteDdata: any = selectionSort();
      props.onSubmission([{ Algorithm: "selected", sortedData: sorteDdata }]);
    } else if (selected === "merge") {
      const sorteDdata: any = mergeSort();
      props.onSubmission([{ Algorithm: "merge", sortedData: sorteDdata }]);
    } else if (selected === "insertion") {
      const sorteDdata: any = insertionSort();
      props.onSubmission([{ Algorithm: "insertion", sortedData: sorteDdata }]);
    } else if (selected === "quick") {
      const sorteDdata: any = quickSort();
      props.onSubmission([{ Algorithm: "quickSort", sortedData: sorteDdata }]);
    } else if (selected === "quickSortThreeMedians") {
      const sorteDdata: any = quickSortThreeMedians();
      props.onSubmission([
        { Algorithm: "quickSortThreeMedians", sortedData: sorteDdata },
      ]);
    } else if (selected === "heap") {
      const sorteDdata: any = heapSort();
      props.onSubmission([
        { Algorithm: "quickSortThreeMedians", sortedData: sorteDdata },
      ]);
    } else if (selected === "sortAll") {
      let RESULT: any = [];
      const bubbleSortData: any = bubbleSort();
      RESULT.push({ Algorithm: "bubbleSort", sortedData: bubbleSortData });
      const selectionSortData: any = selectionSort();
      RESULT.push({
        Algorithm: "selectionSort",
        sortedData: selectionSortData,
      });
      const mergeSortData: any = mergeSort();
      RESULT.push({ Algorithm: "mergeSort", sortedData: mergeSortData });

      const insertionSortData: any = insertionSort();
      RESULT.push({
        Algorithm: "insertionSort",
        sortedData: insertionSortData,
      });
      const quickSortData: any = quickSort();
      RESULT.push({
        Algorithm: "quickSort",
        sortedData: quickSortData,
      });
      const quickSortThreeMedianData: any = quickSortThreeMedians();
      RESULT.push({
        Algorithm: "quickSortThreeMedian",
        sortedData: quickSortThreeMedianData,
      });
      const heapSortData: any = quickSortThreeMedians();
      RESULT.push({
        Algorithm: "heapSort",
        sortedData: heapSortData,
      });
      props.onSubmission(RESULT);
    }

    setSelected(options[0].text);
  }
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container style={{ textAlign: "center" }}>
          <Navbar.Brand href="#">
            Sorting Algorthims performance chart
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br></br>
      <div className="d-flex align-items-center justify-content-center h-100">
        <Card style={{ padding: "30px", backgroundColor: "#E0FFFF" }}>
          <Form action="" onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Label>Select an Algorithm</Form.Label>
              <Form.Control
                as="select"
                value={selected}
                onChange={handleChange}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <div
              className="d-flex align-items-center justify-content-center h-100"
              style={{ padding: "20px" }}
            >
              <Button variant="primary" type="submit" style={{ width: "8rem" }}>
                Sort
              </Button>
            </div>
          </Form>
          {/* </Card.Body> */}
        </Card>
      </div>
    </>
  );
}
