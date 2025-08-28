import "./index.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] =useState([])

  function handleSubmit(e) {
    e.preventDefault()

      setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ])
     setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ])
  }

  console.log(todos)

  return (
    <>
         <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value type="text" id="item"/>
    </div>
      <botton className="btn">add</botton>
         </form> 
  <h1 className="header">Todo List</h1>.
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        item 1
      </label>
      <botton className="btn btn-danger">Delete</botton>
    </li>
    <li>
      <label>
    <input type="checkbox"/>
    item 2
      </label>
      <botton className="btn btn-danger">Delete</botton>
    </li>
  </ul>
  
</>
  )  
}