import React, { useState } from "react"
import { evaluate } from 'mathjs'
import './Calculator.css'

function Calculator() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [oper, setOper] = useState("");

    function Calculate(num1, num2, oper) {
        //console.log(num1 + oper + num2)

        if (oper.trim() === "+" || oper.trim() === "-" || oper.trim() === "*" || oper.trim() === "/") {
            try {
                return evaluate(num1 + oper + num2)
            } catch (error) {
                return 0
            }
        }
        else {
            return 0
        }
    }

    return (
        <div>
            <h1>Calculate with React!</h1>
            <form>
                <input type="text" value={value1} name="value1" onChange={e => setValue1(e.target.value)} />
                <input type="text" value={oper} name="oper" onChange={e => setOper(e.target.value)} />
                <input type="text" value={value2} name="value2" onChange={e => setValue2(e.target.value)} />
                <span>=</span>
                <h3>{Calculate(value1, value2, oper)}</h3>
            </form>
        </div>
    )
}

export default Calculator