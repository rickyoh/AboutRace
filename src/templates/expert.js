import React from "react"
import styled from 'styled-components'
import {
  Layout,
  Interview
} from '../components'

import { graphql } from 'gatsby'

import {
  white
} from '../colors'

const Container = styled.div`
  background-color: ${white};

  @media (max-width: 812px) { /* mobile */

  }
`

export default ({ data, location }) => <Layout location={location}>
  <Container>
    test
    {/* <Interview data={data} /> */}
  </Container>
</Layout>

export const expertQuery = graphql`
  query expertQuery($id: String) {
    nodeExpert(id: { eq: $id }) {
      ...FullExpertFragment
    }
  }
`
