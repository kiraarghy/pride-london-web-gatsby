import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import theme from '../../theme/theme.js'

const Container = styled(Box)`
  @media (min-width: ${theme.breakpoints[0]}) {
    min-width: 335px;
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    min-width: 668px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    min-width: 1100px;
  }

  @media (min-width: ${theme.breakpoints[3]}) {
    min-width: 1260px;
    max-width: ${theme.breakpoints[3]};
  }  
`
Container.defaultProps = {
  mx: 'auto',
}

const Row = props => (
  <Flex
    {...props}
    // Margin right/left. 0-4 represent index on the spacing scale. Numbers 5+ represents px value 
    mx={[
      1, // Margin between 0px and 1st breakpoint (375px). 1 = 5px on spacing scale 
      10, // Margin between 1st breakpoint(375px) and 2nd breakpoint (768px)
      40, // Margin between 2nd breakpoint(768px) and 3rd breakpoint (1280px)
      75 // Margin between 3rd breakpoint(1280px) and 4th breakpoint (1440px)
    ]}
    flexWrap="wrap"
  />
)

const Column = props => (
  <Box
    {...props}
    // Padding right/left. 0-4 represent index on the spacing scale. Numbers 5+ represents px value
    px={[
      1, // Padding between 0px and 1st breakpoint (375px). 1 = 5px on spacing scale
      2, // Padding between 1st breakpoint(375px) and 2nd breakpoint (768px). 2 = 10px on spacing scale
      2, // Padding between 2nd breakpoint(768px) and 3rd breakpoint (1280px). 2 = 10px on spacing scale
      3 // Padding between 3rd breakpoint(1280px) and 4th breakpoint (1440px). 3 = 15px on spacing scale
    ]}

    // Padding top/bottom. 0-4 represent index on the spacing scale. Numbers 5+ represents px value
    py={2} // Global padding. 2 = 10px on spacing scale
  />
)

module.exports = {
  Container,
  Row,
  Column
}