import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
  const [recipes, setRecipes] = useState({})
  const {id} = useParams()
  console.log(id);
  console.log(recipes);

  useEffect(()=>{
    if(sessionStorage.getItem("allRecipes")){
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
      setRecipes(allRecipes.find(recipe=>recipe.id==id))
    }
  },[])

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className="container shadow-lg mt-5 p-4 rounded bg-light">
        <div className="row">
          {/* Recipe Image Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded shadow"
              src={recipes?.image}
              alt="Delicious Recipe"
              style={{ maxHeight: '400px' }}
            />
          </div>
  
          {/* Recipe Details Section */}
          <div className="col-md-6">
            <h2 className="text-center text-primary mb-4">{recipes?.name}</h2>
            <p className="text-secondary">{recipes?.instructions}</p>
            <p className="text-secondary">
              Preperation Time: {recipes?.prepTimeMinutes} mins<br/>
              Coocking Time: {recipes?.cookTimeMinutes} mins
            </p>
            <h5 className="text-success mt-3">Ingredients:</h5>
            <p className="text-secondary">{recipes?.ingredients}</p>
            <p className="text-secondary">Ratings: {recipes?.rating} <i className='fa-solid fa-star text-warning'/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;