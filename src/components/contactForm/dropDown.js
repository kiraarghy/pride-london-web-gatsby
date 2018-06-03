import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import chevronDown from '../../theme/assets/images/icon-chevron-down-white.svg'
import chevronUp from '../../theme/assets/images/icon-chevron-up-white.svg'

const StyledDropDown = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: ${props => (props.isOpen ? '2px solid #2CDA9D !important' : 'none')};
  border-radius: 4px;
  line-height: 17px;
  height: 58px;
  apperance: none;
  padding: 20px;
  padding-left: 10px;
  text-indent: 10px;
  text-align: left;
  color: ${theme.colors.white};
  overflow: hidden;
  appearance: none;
  background-image: url(${props =>
    props.isOpen ? `${chevronUp}` : `${chevronDown}`});
  background-repeat: no-repeat;
  background-position: 94%;
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:hover {
    cursor: pointer;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 10px 10px;
  margin: 0;
  border-top: 2px solid transparent;
  box-sizing: border-box;
  background-color: #242565;
  border-radius: 4px;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 10px;
  }
`
const ListItem = styled.li`
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  line-height: 1.43;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: ${theme.colors.eucalyptusGreen};
    cursor: pointer;
  }
`

class DropDown extends React.Component {
  state = {
    isOpen: false,
    selectedItem: '',
  }

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  setSelectedDropdownItem = e => {
    this.setState({
      selectedItem: e.target.innerText,
      isOpen: false,
    })
  }

  handleClickOutside = () => this.setState({ isOpen: false })

  render() {
    const { isOpen, selectedItem } = this.state

    return (
      <div>
        <StyledButton
          onClick={() => this.toggleDropdown()}
          isOpen={isOpen}
          aria-expanded={isOpen}
        >
          {selectedItem != '' ? selectedItem : 'What is your question about?'}
        </StyledButton>
        <StyledDropDown isOpen={isOpen}>
          <List>
            <ListItem id="0" onClick={e => this.setSelectedDropdownItem(e)}>
              Testing 01
            </ListItem>
            <ListItem id="1" onClick={e => this.setSelectedDropdownItem(e)}>
              Testing 02
            </ListItem>
            <ListItem id="2" onClick={e => this.setSelectedDropdownItem(e)}>
              Testing 03
            </ListItem>
          </List>
        </StyledDropDown>
      </div>
    )
  }
}

export default onClickOutside(DropDown)