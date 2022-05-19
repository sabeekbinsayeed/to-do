import React, { useState } from 'react';

const Checklist = ({ d, handleDelete }) => {
    const [style, setStyle] = useState(false)

    function handle(e) {
        var checked = e.target.checked;
        console.log(checked)
        if (checked) {
            setStyle(true)
            console.log('true')
        }
        else {
            setStyle(false);
            console.log('kaj kore')
        }

    }
    const handleIt = event => {
        console.log('dhuke ki bhai')
        const check = event.target.checked;
        console.log(check)
    }
    return (
        <div>




            <input
                name='check'
                onChange={handle}
                type="checkbox"

                // name="terms"
                id="terms"
            />
            {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
            <label htmlFor="terms">

                {
                    style ? <del>{d.data1}</del> : <>{d.data1}</>
                }
            </label>


            <button onChange={handleIt} onClick={() => handleDelete(d._id)} style={{ marginLeft: '30px' }}>Delete me</button>
        </div>
    );
};

export default Checklist;