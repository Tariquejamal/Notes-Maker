import { useState } from "react";

import './style.css'
import Color from "../../9.colorPicker/src/Color";

function MyComponent(){

    const [foods, setFoods] = useState(['Apple','Orange','Banana']);

    function handleAddFood(){

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(f => ([...f,newFood]));
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index));
    }


    return(
        <>
        <div>
            <h2 >Bullet point maker</h2>
            <h3><span style={{color:'darkgreen'}}>To add</span>  <span>Enter text into input box</span></h3>
            <h3><span style={{color:'red'}}>To Remove</span>  <span>Just click on text</span></h3>
            
            
                <div className="ulbox">
                    <ul>
                        {foods.map((food,index) => <li key={index} onClick={ () => handleRemoveFood(index)}>
                            {food}
                            </li>)}
                    </ul>
                </div>
                <div className="inpbox">
                    <input  type="text" id="foodInput" placeholder="Enter food name" />
                    <button id="addPoint" onClick={handleAddFood}>Add point</button>
                </div>
        </div>
        </>
    );
}

export default MyComponent;