import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: #25262c;
`

export const MainContainer = styled.div`
  width: 80%;
  height: 500px;
  background-color: #1b1c22;
  display: flex;
  padding: 20px;
`

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 50%;
`

export const Heading = styled.h1`
  color: #f8fafc;
`

export const Image = styled.img`
  width: 60%;
  margin-top: 30px;
`

export const CardContainer = styled.div`
  background-color: #334155;
  border-radius: 15px;
  border: 1px solid #f1f5f9;
  width: 50%;
`

export const ButtonContainer = styled.ul`
  border-bottom: 1px solid #f1f5f9;
  padding: 15px;
  display: flex;
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const TextArea = styled.textarea`
  height: 300px;
  width: 400px;
  padding: 20px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #f8fafc;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: ${props => (props.isBold === true ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic === true ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderLine === true ? 'underline' : 'normal'};
`

export const CustomButton = styled.button`
  margin: 10px;
  color: ${props => (props.applied === true ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
