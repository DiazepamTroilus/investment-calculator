export default function InputLabel({ title, onInput, inputValue }) {
  return (
    <>
      <label>
        {title}
        <input type="number" value={inputValue} onChange={onInput} />
      </label>
    </>
  );
}
