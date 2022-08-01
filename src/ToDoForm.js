import {useState} from "react";


export function ToDoForm({addTask}) {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (<form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                value={userInput}
                onKeyDown={handleKeyPress}
                placeholder='Введите значение...'
            />
            <button>Сохранить</button>
        </form>)
}