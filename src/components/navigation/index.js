import React, { Component, Fragment } from 'react'
import Header from './header'
import logo from '../../theme/assets/images/logo-pride.svg'

Header.displayName = 'Header'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <Fragment>
        <Header
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
                    left: [
                      { title: 'Parade Day' },
                      'Stages',
                      'Parade groups',
                      'Map',
                      'Top tips',
                    ],
                    right: [{ title: 'Pride’s Got Talent' }, '2018 Winners'],

                    bottom: [{ title: 'Pride Festival' }, "What's on"],
                  },
                },
              },
              {
                text: 'Support us',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: [
                      { title: 'As an individual' },
                      'Volunteer',
                      'Donate',
                      'Buy merchandise',
                    ],
                    right: [
                      { title: 'As a business' },
                      'Sponsor us',
                      'Work with us',
                    ],
                    bottom: [{ title: 'As an MP' }, 'Sign the pledge'],
                  },
                },
              },
              {
                text: 'Take part',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',

                  items: {
                    left: [
                      'Perform',
                      'Have a stall',
                      'Host an event',
                      'Take part in the part in the parade',
                    ],
                  },
                },
              },
              {
                text: 'Plan',
                submenu: {
                  paragraph:
                    'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
                  items: {
                    left: [
                      'Places to eat & drink',
                      'Travel & accomodation',
                      'Accessibility',
                      'Our app',
                    ],
                  },
                },
              },
              {
                text: 'help',
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

Navigation.defaultProps = {
  children: null,
  items: {},
}

export default Navigation
