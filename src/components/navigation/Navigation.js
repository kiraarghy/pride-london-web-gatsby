import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import SubMenu from './submenu'
import logo from '../../theme/assets/images/logo-pride.svg'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  render() {
    console.log(this.state.isOpen)

    return (
      <Fragment>
        <Header
          {...this.props}
          mouseOver={this.mouseOver}
          mouseOut={this.mouseOut}
          isOpen={this.state.isOpen}
          items={{
            logo,
            listItems: [
              {
                text: 'Learn',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Attend',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Support us',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Take part',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                text: 'Plan',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                  items: {
                    left: ['About us', 'Meet the team', 'Our history'],
                    right: ['News', 'Our mission'],
                  },
                },
              },
              {
                item: 'help',
              },
            ],
            cta: 'donate',
          }}
        >
          {this.props.children}
        </Header>
      </Fragment>
    )
  }
}

export default Navigation
