import React, { useState } from "react";
import classes from './form.module.css'
const initialuserinput = {
    'current-savings': 10000,
    'yearly-contribution': 12000,
    'expected-return': 7,
    duration: 10,
};
const userInput = (props) => {
    const [userinput, setUserinput] = useState(initialuserinput)

    const submithandler = (event) => {
        event.preventDefault();

        props.onCalculate(userinput)

    };
    const resethandler = () => {
        setUserinput(initialuserinput);
    };
    const inputChangeHandler = (input, value) => {
        setUserinput((previnput) => {
            return {
                ...previnput,
                [input]: value,
            }
        })

    };

    return (
        <form onSubmit={submithandler} className={classes.form}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler("current-savings", event.target.value)
                        }
                        value={userinput["current-savings"]}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler("yearly-contribution", event.target.value)
                        }
                        value={userinput["yearly-contribution"]}
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler("expected-return", event.target.value)
                        }
                        value={userinput["expected-return"]}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler("duration", event.target.value)
                        }
                        value={userinput["duration"]}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button onClick={resethandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
};
export default userInput;
