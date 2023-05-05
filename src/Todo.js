import React, { useEffect, useState } from 'react'

function Todo() {

    const [item, setItem] = useState('')
    const [allValues, setValues] = useState([])
    useEffect(() => {

    }, [allValues])

    function addItem() {
        if (item != '') {
            setValues((allValues) => {
                const updates = [...allValues, item];
                console.log(updatedall);
                return updatedall;
            })
            setItem('')

        }
    }
    function removeItem(i) {
        const updatedList = allValues.filter((elem, id) => {
            return i != id;
        })
        setValues(updatedList)
    }
    function removeAll() {
        setValues([]);
    }
    return (
        <>
            <div className='container'>
                <div className='header'>TODOLIST</div>
                <input type='text' placeholder='Add Item' value={item} onChange={(e) => {
                    setItem
                        (e.target.value)
                }} />
                <button onClick={addItem}>Add</button>

                <p className='List-heading'>Here is your list :{")"}</p>
                {allValues != [] && allValues.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div className='listData'>{data}</div>
                                <div className='btn-position'>
                                    <button onClick={() => removeItem(i)}>remove(-)</button>
                                </div>

                            </p>
                        </>
                    )
                })}
                {allValues.length >= 1 && <>
                    <button onClick={removeAll}>Remove All</button>
                </>}
            </div>
        </>
    )
}

export default Todo   
