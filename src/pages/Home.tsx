import { useState } from "react";
import bubbleSort from "../sortingAlgorithms/bubbleSort";
import selectionSort from "../sortingAlgorithms/selectionSort";
import { mergeSort } from "../sortingAlgorithms/mergeSort";
import insertionSort from "../sortingAlgorithms/insertionSort";
import {
  Button,
  Card,
  Container,
  Form,
  Navbar,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import quickSort from "../sortingAlgorithms/quickSort";
import quickSortThreeMedians from "../sortingAlgorithms/quickSortThreeMedians";
import heapSort from "../sortingAlgorithms/heapSort";
import SideNav from "./SideNav";

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
  const [inputSize, setInputSize] = useState(0);

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
  function handleInputSizeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputSize(parseInt(event.target.value));
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

      <SideNav></SideNav>
      <Navbar bg="light" expand="lg" style={{ width: "20rem" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Form onSubmit={onSubmitHandler} style={{ padding: "20px" }}>
                <Row>
                  <Col>
                    <Form.Select
                      value={selected}
                      onChange={handleChange}
                      style={{ marginBottom: "20px" }}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Input size"
                      value={inputSize}
                      onChange={handleInputSizeChange}
                      style={{ marginBottom: "20px" }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ width: "8rem" }}
                    >
                      Sort
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Container fluid>
        <Row>
          <Col className="p-3">
            <Form style={{ width: "8rem" }}>
              <Form.Group controlId="algorithmType">
                <Form.Label>Select Algorithm Type</Form.Label>
                <Form.Control as="select">
                  <option>Bubble Sort</option>ß<option>Selection Sort</option>
                  <option>Insertion Sort</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="rangeBar">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container> */}

      <div className="d-flex align-items-center justify-content-center h-100">
        {/* <Card style={{ padding: "30px", backgroundColor: "#E0FFFF" }}>
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
           </Card.Body> 
        </Card> */}
      </div>
    </>
  );
}
