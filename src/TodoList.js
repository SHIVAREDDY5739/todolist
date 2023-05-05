import React, {useEffect, useState} from 'react'


// to get the data form local storage

const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    }else {
        return [];
    }
}

function TodoList() {
    const [activity, setActivity]= useState("");
    const [listData, setlistData] = useState(getLocalItems());
    function addActivity(){
       // setlistData([...listData, activity])
        //console.log(listData)
        setlistData((listData)=>{
            const updatedList =[...listData, activity]
            console.log(updatedList)
            return updatedList
        })
    }
    function removeActivity(i){
           const updatedListData = listData.filter((elem, id)=>{
            return i!==id;
           })
           setlistData(updatedListData);
    }
    function removeAll(){
        setlistData([])
    }

    //add data to local storage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(listData))
    }, [listData]);

    return (
      <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className= 'List-heading'>Here is your List :{")"}</p>
        {listData!==[] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className='listData'>{data}</div>
                    <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>

                </p>
                </>
            )
        })}
        {listData.length>=1 &&
        <button onClick={removeAll}>Remove All</button>}
      </div>
      </>
    )
}

export default TodoList