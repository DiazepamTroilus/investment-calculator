import { formatter } from '../util/investment';

export default function TableResult({ data }) {
  let totalInt = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th> Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          totalInt += item.interest;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.interest + item.annualInvestment)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInt)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
