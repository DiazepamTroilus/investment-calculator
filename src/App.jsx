import Header from './components/Header';
import InputLabel from './components/InputLabel';
import TableResult from './components/TableResult';
import { formatter, calculateInvestmentResults } from './util/investment';
import { useState } from 'react';
const data = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};
function App() {
  const [iniData, setIniData] = useState(data);
  function inputHandler(event) {
    setIniData(ini => {
      const eve1 = { ...ini };
      eve1.initialInvestment = +event.target.value;

      return eve1;
    });
  }
  function input2Handler(event) {
    setIniData(ini => {
      const eve1 = { ...ini };
      eve1.annualInvestment = +event.target.value;

      return eve1;
    });
  }
  function input3Handler(event) {
    setIniData(ini => {
      const eve1 = { ...ini };
      eve1.expectedReturn = +event.target.value;

      return eve1;
    });
  }
  function input4Handler(event) {
    setIniData(ini => {
      const eve1 = { ...ini };
      eve1.duration = +event.target.value;

      return eve1;
    });
  }
  console.log(calculateInvestmentResults(iniData));

  return (
    <>
      <Header></Header>
      <section id="user-input">
        <div className="input-group">
          <InputLabel
            title={'Initial Investment'}
            onInput={inputHandler}
          ></InputLabel>
          <InputLabel
            title={'Annual Investment'}
            onInput={input2Handler}
          ></InputLabel>
          <InputLabel
            title={'EXPECTED RETURN'}
            onInput={input3Handler}
          ></InputLabel>
          <InputLabel title={'DURATION'} onInput={input4Handler} />
        </div>
      </section>
      <TableResult data={calculateInvestmentResults(iniData)}></TableResult>
    </>
  );
}

export default App;
