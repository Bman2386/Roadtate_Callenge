import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Order(props){
 
    const items2 = {
        '301': "Peanut sauce",
        '302': "Oyster sauce",
        '303': "Vegetable spring rolls",
        '304': "Steamed rice",
    }
    const items1 = {
        '201': "Cashew chicken",
        '202': "Sweet and sour pork",
        '203': "Stir fried Tofu",
        '204': "Vegetable fried rice",
        '205': "Pad Thai",
        '206': "Massaman beef"
    }
    

    return (
        <div className='App'>
            <p className='Success'>Your order is on the way!</p>
            <Link to='/' className='submit'>Back</Link>
        </div>
    )
}

export default Order;