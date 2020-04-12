import React, { useState } from 'react';

import styled from "styled-components";

export default function TodoInput({onSubmit}){

  const [newTodo, setNewTodo] = useState({});

  const handleFormChange = (e) => {
    setNewTodo({...newTodo, [e.target.name]:e.target.value});
  }

  return (
    <Wrapper>
      <Row>
        <Lable>시간</Lable>
        <Input 
          name="date" 
          type="number" 
          placeholder="날짜를 입력하세요 (ex.20200404)" 
          onChange={handleFormChange}
        />
      </Row>
      <Row>
        <Lable>TODO</Lable>
        <Textarea 
          name="content" 
          placeholder='할 일을 입력하세요' 
          onChange={handleFormChange}
        />
      </Row>
      <SunmitButton onClick={() => onSubmit({...newTodo})}>등록</SunmitButton>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 37rem;
  flex: 1
  border: 1px, solid, black;
  padding: 1rem 2rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const Lable = styled.p`
  font-size: 1.5rem;
  margin: 0px;
`;

const Input= styled.input`
  width: 80%;
  border: 1px, soild, rgb(97, 97, 97);
  padding: 0.5rem 0.8rem;
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 30vh;
  resize: none;
  border: 1px, solid, rgb(97, 97, 97);
  padding: 0.5rem 0.8rem;
`;

const SunmitButton = styled.button`
  color : white;
  background-color: rgb(97, 97, 97);
  font-size: 1.5rem;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
`;