
function App() {
  return (
    <div className="cont">
      <div className="header">
        <h1 className="h1Header">TODO</h1>
        <button className="btnHeader">
          <img src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649292585/ToDo/icon-moon_cxgtoo.svg" />
        </button>
      </div>
      <div className="">
        <input className="newTask" placeholder="Create a new ToDo..." />
      </div>
      <div className="contTask">
        <div className="task">
          <input className="inputTask" type="radio" />
          <p className="pTask">Complete online Javascript course</p>
        </div>
        <div className="task">
          <input className="inputTask" type="radio" />
          <p className="pTask">Complete online Javascript course</p>
        </div>
        <div className="task">
          <input className="inputTask" type="radio" />
          <p className="pTask">Complete online Javascript course</p>
        </div>
        <div className="task">
          <input className="inputTask" type="radio" />
          <p className="pTask">Complete online Javascript course</p>
        </div>
        <div className="task">
          <input className="inputTask" type="radio" />
          <p className="pTask">Complete online Javascript course</p>
        </div>
        <div className="task">
          <input className="inputTask" type="radio" />
          <p className="pTask">Complete online Javascript course</p>
        </div>
        <div className="resume">
          <p ># items left</p>
          <div>
            <button className="btnFilter">All</button>
            <button className="btnFilter">Active</button>
            <button className="btnFilter">Completed</button>
          </div>
          <button className="btnClear">Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
