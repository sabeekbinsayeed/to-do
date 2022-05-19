import React, { useEffect, useState } from 'react';
import Checklist from '../Checklist/Checklist';

// import Checklist from '../Checklist/Checklist';
import './Todo.css'

const Todo = () => {

    const [task, setTask] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/task').then(res => res.json()).then(data => setTask(data))
    // }, [task])
    useEffect(() => {
        fetch('https://arcane-plateau-22519.herokuapp.com/task').then(res => res.json()).then(data => setTask(data))
    }, [task])

    const [data, setData] = useState([])
    const [data1, setData1] = useState('')


    const [data3, setData3] = useState([])
    const [data4, setData4] = useState('')

    const [info, setInfo] = useState([])

    let values



    const handleDelete = id => {
        const proceed = window.confirm('sure?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `https://arcane-plateau-22519.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = task.filter(u => u._id !== id);
                        setTask(remaining);
                    }
                })
        }
        else {
            console.log('else ')
        }
    }


    const addChecklist = () => {





        const newData = [...data, data1]
        const finalData = { data1 }




        console.log(newData)

        setData(newData)

        setData1('')


        const newData1 = [...data3, data4]
        const info = [{ newData, newData1 }]
        const infos = { newData, newData1 }
        // console.log(info)

        setInfo(info);
        console.log(info)
        setData3(newData1)
        setData4('')

        console.log('kisu ki hosce')
        fetch('https://arcane-plateau-22519.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(finalData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', finalData);
                alert(' Task added')


            })



    }



    const handleChange = e => {
        var checked = e.target.checked;
        console.log(checked)
    }

    const handleBlur = event => {
        values = event.target.value;
        const check = event.target.checked;
        console.log(check)

        setData1(values)
    }

    return (
        <div className='ms-20' >
            <h1 className='text-center text-primary mb-3 '>To do list</h1>
            <div className='d-flex justify-content-center align-items-center '>
                <div >
                    <input className='w-90 ' onChange={handleBlur} id='input' type="text" name="values"
                        value={data1} />

                    <br></br>

                    <button className='ms-4 btn btn-info mb-3 px-4 py-2' onClick={addChecklist}>add</button>



                    {
                        task.map(d => <Checklist handleDelete={handleDelete} d={d}></Checklist>)

                    }


                </div>
            </div>

        </div>
    );

}
export default Todo;