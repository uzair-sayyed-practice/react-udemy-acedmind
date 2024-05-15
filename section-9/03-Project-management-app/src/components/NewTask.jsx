import { useState, useRef } from "react";
import Modal from "./UI/Modal";

const NewTask = ({ onAdd }) => {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim().length === 0) {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-stone-500 my-4'>
          Please add task.
        </h2>
        <p className='text-stone-600 mb-4'>
          Oops ... look like you forgot to enter a task
        </p>
        {/* <p className='text-stone-600 mb-4'>
          Please make sure you provide a valid value for every input field.
        </p> */}
      </Modal>
      <div className='flex items-center gap-4'>
        <input
          type='text'
          onChange={handleChange}
          value={enteredTask}
          className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        />
        <button
          onClick={handleClick}
          className='text-stone-600 hover:text-stone-950'
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
