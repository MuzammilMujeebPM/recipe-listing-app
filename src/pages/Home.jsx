import React, { useEffect, useState } from 'react'
import {Card, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe, searchRecipe } from '../store/slice/recipeSlice'
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const {allRecipes,loading,errorMsg} = useSelector(state=>state.recipeReducer)
  useEffect(()=>{
    dispatch(fetchRecipe())
  },[])

  const [currentPage,setCurrentPage] = useState(1)
  const recipesPerPage = 12
  const totalPages = Math.ceil(allRecipes?.length/recipesPerPage)
  const currentPageLastIndux = currentPage * recipesPerPage
  const currentPageFirstIndux = currentPageLastIndux - recipesPerPage
  const visibleRecipes = allRecipes?.slice(currentPageFirstIndux,currentPageLastIndux)

  const nextpage = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const previouspage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage-1)
    }
  }

  return (

    <>
     <nav className='bg-dark text-white p-2 mb-5 d-flex justify-content-center'>
      <h1>-Recipiee-</h1>
     </nav>

     <div style={{minHeight:'100vh'}} className=''>
      {/* <h1 className='text-center my-5'>Recipe Book</h1> */}
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search dishes"
          onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))}
          />
        <span className="input-group-text" ><i className="fa-solid fa-magnifying-glass"></i></span>
      </div>

      {
        loading ?
        <div style={{minHeight:"60vh"}} className="d-flex flex-column justify-content-center align-items-center">
          <img width={'200px'} src="https://cdn.pixabay.com/animation/2024/10/06/08/31/08-31-41-587_512.gif" alt="no img" />
          <span>Loading...</span>
        </div>
        :
        <div className="container mt-5 ">
          <Row lg={4} md={3} sm={2} xs={1} >
              {
                allRecipes?.length>0 ?
                visibleRecipes.map(recipe=>(
                  <Col key={recipe?.id}>
                    <Card className='mb-5' style={{ width: '18rem',height:'27rem'}}>
                      <Card.Img variant="top" src={recipe?.image} />
                      <Card.Body>
                        <Card.Title>{recipe?.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{recipe?.cuisine}</Card.Subtitle>
                        <Link to={`/${recipe?.id}/view`} className='btn btn-outline-dark border-0'>View More...</Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
                :
                <h2 className='text-secondary text-center'>No Recipes Found</h2>
              }
          </Row>
        </div>
      }

      <div className="text-center mb-5">
        <span onClick={previouspage}><i className="fa-solid fa-backward me-3"></i></span>
        <span>{currentPage} of {totalPages} </span>
        <span onClick={nextpage}><i className="fa-solid fa-forward ms-3" style={{ color: "black" }}></i></span>
      </div>

    </div>
    </>
    
   
  )
}

export default Home