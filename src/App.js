import {useState} from "react";

function App() {

    const [counters, setCounters] = useState([12, 27, 88])

    function addCounter() {
        counters.push(0)
        setCounters(counters => [...counters])
    }

    function changeCounter(index, value) {
        let temp = counters[index]
        temp = temp + value
        counters[index] = temp
        setCounters(counters => [...counters])
    }

    return (
        <div className="App">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <button className={"btn btn-success"} onClick={addCounter}>Add Counter</button>
                        {
                            counters.map((item, index) =>
                                <div key={index}>
                                    <button className="btn btn-info mt-1 mx-1" onClick={() => changeCounter(index, 1)}>+
                                    </button>
                                    {item}
                                    <button className="btn btn-danger mt-1 mx-1" onClick={() => changeCounter(index, -1)}>-
                                    </button>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
