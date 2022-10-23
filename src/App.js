import './App.css';
import { useState } from 'react';

function App() {
  const [toDolist, setToDoList] = useState([])
  const [toDo, setToDo] = useState('')


  var a = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var dayName = weekdays[a.getDay()];

  let clearCompleted= ()=>{
    let result = 
      toDolist.reduce((result, eachToDoObj) => {
        if (!eachToDoObj.status) {
          result.push(eachToDoObj)
        }
        return result;
      }, [])

    
    setToDoList(result)
    
    
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
        <h6 style={{color:'grey'}}>(day is dynamic)</h6>
      </div>


      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { 

          if(toDo.trim().length !== 0){ // added this to solve empty value input in to dos

          setToDoList([...toDolist, { id: Date.now(), text: toDo, status: false }]);
          setToDo('') }/*did this to empty input field*/

          }
          
          
          } 
          className="fas fa-plus"></i>
      </div>

      {/* to dos list ---*/}

      <div className="todos">

        {
          

          toDolist.map((singleToDo) => {
            return (
              /* single to do tile ----*/
              <div className="todo">
                <div className="left">

                  {/* conditonal renderinf here.. look carefully */}

                {
                singleToDo.status?
                <input onClick={(e) => { // checking every todos here

                  setToDoList(toDolist.filter((eachToDoObj) => {
                    if (singleToDo.id === eachToDoObj.id) {
                      eachToDoObj.status = e.target.checked
                    }
                    return eachToDoObj;
                  }))

                }} type="checkbox" name="" id="" checked


                />


                :
                
                <input onClick={(e) => { // checking every todos here

                  setToDoList(toDolist.filter((eachToDoObj) => {
                    if (singleToDo.id === eachToDoObj.id) {
                      eachToDoObj.status = e.target.checked
                    }
                    return eachToDoObj;
                  }))

                }} type="checkbox" name="" id=""


                />
                }

                  {/* conditonal renderinf end here..=========*/}

              


                  {
                    (singleToDo.status) ? <del><p>{singleToDo.text}</p></del> : <p>{singleToDo.text}</p>
                  }



                </div>


                {/* delete icon */}

                {!singleToDo.status && (
                  <div className="right">
                    <i onClick={(e) => { // checking to match and creating a new array

                      setToDoList(toDolist.reduce((result, eachToDoObj) => {
                        if (singleToDo.id !== eachToDoObj.id) {
                          result.push(eachToDoObj)
                        }
                        return result;
                      }, []))

                    }}
                      className="fas fa-times"></i>
                  </div>

                )

                }


                {/* delete icon end */}



              </div>


              /* single to do tile end ====*/
            )
          })
        }
{/* 
        { // chekced test

          toDolist.map((singleToDo) => {
            if (singleToDo.status) {
              return (<><h1>{singleToDo.text}</h1></>)
            }
            return null;
          })
        } */}


      </div>
      {/* todolist end===== */}

        {toDolist.length!==0 && <button className='clrbtn' onClick={clearCompleted}>clear completed</button>}
      

    </div>
  );
}

export default App;
