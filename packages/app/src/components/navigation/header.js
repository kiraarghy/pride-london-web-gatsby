import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row } from '../grid'
import theme from '../../theme/theme'
import NavItems from './navItems'

const StyledContainer = styled(Container)`
  background-color: ${theme.colors.indigo};
  color: ${theme.colors.white};
  height: 100px;
`

NavItems.displayName = 'TestNav'

const Header = props => (
  <StyledContainer>
    <Row alignItems="center" justifyContent="center">
      <NavItems items={props.items}>{props.children}</NavItems>
    </Row>
  </StyledContainer>
)

Header.propTypes = {
  items: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Header.defaultProps = {
  children: null,
  items: {},
}

export default Header