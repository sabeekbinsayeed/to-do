import React from 'react';

const Checklist = ({ d, handleDelete }) => {



    return (
        <div>




            <input type="checkbox" name="terms" id="terms" eating something />
            {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
            <label htmlFor="terms">{d.data1}</label>


            <button onClick={() => handleDelete(d._id)} style={{ marginLeft: '30px' }}>Delete me</button>
        </div>
    );
};

export default Checklist;