export default function InputLabel({ title, onInput, inputValue }) {
  return (
    <p>
      <label>{title}</label>
      <input type="number" value={inputValue} onChange={onInput} />
    </p>
  );
}
