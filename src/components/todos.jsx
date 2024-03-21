import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/action/todosAction';

const Todos = () => {
    const {error, isLoading, todos} = useSelector((state)=> state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
  return (
    <div>
        <h1>Data fetch react redux</h1>
        {isLoading && <h1>Data is Loading ...</h1>}
        {error && <h1>{error.message}</h1>}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-10'>
        {todos && todos?.map((todo)=>{
            const {id, name, username, email} = todo
            return <div className='bg-orange-400 text-white p-10 rounded-lg text-center'>
              <h1>{id}</h1>
              <h1>{name}</h1>
              <p>{username}</p>
              <p>{email}</p>
            </div>
        })}
        </div>
    </div>
  )
}

export default Todos