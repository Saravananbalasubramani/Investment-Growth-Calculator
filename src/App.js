import logo from './assets/investment-calculator-logo.png';
import Header from './components/header/header'
import UserInput from './components/form/form';
import TableValue from './components/table/table';
import React,{useState} from 'react';
function App() {

  const [results,setUserinput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserinput(userInput)
  };
  const yearlyData = [];

  if(results){

  let currentSavings = results["current-savings"];
  const yearlyContribution = results["yearly-contribution"];
  const expectedReturn = results["expected-return"];
  const duration = results["duration"];

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }
}

  return (
    <div>
      <Header/>

      <UserInput onCalculate={calculateHandler}/>
      {!results && <p style={{textAlign:'center'}}>No Investment Calculated Yet.</p>}
      {results && <TableValue data={yearlyData} initialinvestment={results['current-savings']}/>}
    </div>
  );
}

export default App;
