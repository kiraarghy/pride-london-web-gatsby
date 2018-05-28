import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container } from '../components/grid/'
import ImageBanner from '../components/imageBanner'
import SponsorBadge from '../templates/sponsors/SponsorBadge'
import theme from '../theme/theme'

const Body = styled.div`
  padding: 60px 0;
  border-bottom: 1px solid rgba(203, 203, 203, 0.5);
`

const SponsorsList = styled.div`
  padding: 60px 0;
`

const selectSponsors = data =>
  data.allContentfulSponsor.edges.map(({ node }) => ({
    name: node.sponsorName,
    url: node.sponsorUrl,
    logo: node.sponsorLogo && node.sponsorLogo.sizes.src,
    level: node.sponsorLevel,
  }))

const Sponsors = ({ data }) => (
  <Fragment>
    <ImageBanner
      titleText="Sponsor us"
      subtitleText="Help us to keep Pride free for everyone by becoming one of our sponsors"
      backgroundColor={theme.colors.yellow}
    />
    <Container>
      <Body>
        <h2>Be part of something</h2>
        <p>
          Scelerisque a parturient consectetur dui erat a ligula a a id
          imperdiet elit scelerisque ipsum cubilia ac a. Malesuada elementum a
          vestibulum fermentum sodales ullamcorper a vestibulum vulputate
          nascetur nec felis ullamcorper ut quis at a purus vestibulum eu
          parturient parturient condimentum vitae faucibus. Ultrices a mi quis
          ullamcorper ullamcorper vestibulum etiam a imperdiet egestas orci
          condimentum orci non arcu adipiscing mus a ac at facilisis quis.
        </p>
      </Body>
      <SponsorsList>
        <h1>Our main 2018 partners</h1>
        <p>
          A huge thank you to our main partners for their continued support.
        </p>
        <div>
          {data &&
            selectSponsors(data).map(sponsor => (
              <SponsorBadge key={sponsor.name} {...sponsor} />
            ))}
        </div>
      </SponsorsList>
    </Container>
  </Fragment>
)

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsor(filter: {}) {
      distinct
      edges {
        node {
          sponsorName
          sponsorUrl
          sponsorLogo {
            sizes(maxHeight: 84) {
              src
            }
          }
          sponsorLevel
        }
      }
    }
  }
`

export default Sponsors
