import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  render () {
    const Button = this.props.item.icon
    const {action} = this.props.item

    return (
      <ToolbarButtonWrapper>
        <Label>{this.props.item.label}</Label>
        <ToolbarButton onClick={() => action(this.props)}>
          <Button />
        </ToolbarButton>
      </ToolbarButtonWrapper>
    )
  }
}

const ToolbarButtonWrapper = styled.li`
  display: inline-block;
  margin: 0 !important;
  color: ${props => props.active ? '#f00' : '#000'};
  &:hover {
    color: ${props => props.active ? '#fcc' : '#ccc'};
    span {
      opacity: 1;
    }
  }
  &:active {
    color: #ccc;
  }
`

const ToolbarButton = styled.div`
  padding: 0;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background: transparent;
  margin-top: 0.4rem;
  margin-bottom: -1rem;
`

const Label = styled.span`
  display: block;
  position: fixed;
  overflow: hidden;
  font-size: 12px;
  margin-top: -3.3rem;
  text-transform: uppercase;
  opacity: 0;
  color: black !important;
  transition: opacity 0.5s ease-in-out;
  z-index: 100;
  padding: 0.2rem 0.5rem;
  border: 1px solid #F1F1F1;
  border-radius: 2px;
  background: white;
  box-shadow: 3px 3px 5px #BFBDBD;
`
