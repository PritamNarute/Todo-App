import { useState } from "react";

function NewTodoForm (props) {

    const [task, setTask] = useState('');
    const [duration, setDuration] = useState('');

    const submitTodo  = () => {
        if(task !== '' && duration !== '') {
            props.addNewTodo(task, duration);
            setTask('');
            setDuration('');
        }
    }

    // console.log("from newTodoForm");
    

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label"> Task </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required
                        onChange={e => setTask(e.target.value)}
                        value={task}
                    ></input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Duration </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        required
                        onChange={e => setDuration(e.target.value)}
                        value={duration}
                    ></input>
                </div>

                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}> Add </button>
            </form>
        </div>
    )
}

export default NewTodoForm;