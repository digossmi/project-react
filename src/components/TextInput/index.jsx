import "./styles.css"

export const TextInput = ({ actionFn, inputValue }) => (
  <input
    className="text-input"
    onChange={actionFn}
    value={inputValue}
    type="search"
    placeholder="Type your search"
  />
)
