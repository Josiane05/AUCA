import "./index.css"

export default function App() {
  return (
    <div>
         <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"/>
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
    </ul>
  <label>
    <input type="checkbox"/>
    item 2
  </label>
  <botton className="btn btn-danger">Delete</botton>
</div>
  )  
}