import { useRef } from "react";

function UseRefHtml() {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  };

  const inputRefNext = useRef(null);
  const focusInputNext = () => {
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor = 'blue';
  };
  const focusReset = () => {
    inputRef.current.style.backgroundColor = 'white';
    inputRefNext.current.style.backgroundColor = 'white';
  };
  return (
    <div>
      <h1>Learn React</h1>
      <input ref={inputRef} type="text" placeholder="Focus me" />
      <button onClick={focusInput}>Focus and Highlight</button>

      <input ref={inputRefNext} type="text" placeholder="Focus me" />
      <button onClick={focusInputNext}>Focus and Highlight</button>

      <button onClick={focusReset}>Reset</button>
    </div>
  );
}

export default UseRefHtml;
