import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import nextId from 'react-id-generator'
import { addTodo } from '../../../redux/modules/todos.js'
import { getValue } from '@testing-library/user-event/dist/utils/index.js'

const Form = () => {
  const dispatch = useDispatch()
  //dispatch선언이 안돼서 임포트를 못해줬음
  const id = nextId()

  const [todo, setTodo] = useState({
    id: 0,
    title: '',
    body: '',
    isDone: false,
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value, id: id }) //id값 연결
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (todo.title.trim() === '' || todo.body.trim() === '') return
    // if (todo.title === '' || todo.body === '') return
    setTodo({
      id: id,
      title: '',
      body: '',
      isDone: false,
    })
  }

  const onAddHandler = () => {
    console.log('id->', id.slice(2))
    dispatch(addTodo(todo))
  }

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput type="text" name="title" value={todo.title} onChange={onChangeHandler} />
        <StFormLabel>내용</StFormLabel>
        <StAddInput type="text" name="body" value={todo.body} onChange={onChangeHandler} />
      </StInputGroup>
      <StAddButton onClick={onAddHandler}>추가하기</StAddButton>
    </StAddForm>
  )
}

export default Form

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`
