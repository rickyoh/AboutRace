import React from 'react'
import styled, { css } from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import get from 'lodash/get'
export const white = '#FFFFFF';
export const experts = 'grey';
const Container = styled.div`
  width: 100%;

  background-color: ${experts};
  
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) { /* desktop */

  }

  @media (max-width: 812px) { /* mobile */
     
  }
`

const InnerContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  width: auto;
  height: auto !important;

  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;


margin:50px auto;
  max-width: 1200px;

`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const SideBar = styled(Column)`
  position: relative;

  display: none !important;

  padding-left:30px;

  display: flex;
  flex-direction: column;

  width: 336px;
  margin-right: 30px;

  @media (min-width: 1025px) { /* desktop */
    display: flex !important;
  }

  @media (max-width: 812px) { /* mobile */
    display: none;
  }
`
const ExpertImage = styled.div`
  height: 348px;
  min-width: 100%;

  border-radius:15px;
  background-size: cover !important;
  background-attachment: fixed;
  background: ${ props => props.background ? `url(${props.background}) center no-repeat` : null };

  @media (max-width: 812px) { /* mobile */
    width: 100vw;
    max-width: 100vw;
    margin-left: 0px;
  }
`

const ContentBar = styled(Column)`
  flex: 1;
  margin-top: -30px;

  z-index: 10;

  @media (min-width: 1025px) { /* desktop */
    
  }

  @media (max-width: 812px) { /* mobile */
    padding: 10px;
  }
`

const ContentBox = styled(Column)`
  position: relative;
  border-radius: 15px;
  background-color: ${white};
  padding:30px;
`

const Title = styled.div`
  font-family: 'ff-tisa-web-pro';
  font-size: 42px;
  line-height: 48px;
  margin-bottom:15px;
`
const SubTitle = styled.div`
  font-family: 'ff-tisa-web-pro';
  font-size: 22px;
  line-height: 100%;
  margin-bottom:10px;
  p{
    margin:0px;
  }
`
const Text = styled.div`
  font-family: 'ff-tisa-web-pro';
  font-size: 17px;
  line-height: 24px;
`

class Expert extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      tagName: null,
      tagCards: []
    };
  }

  render() {
    console.log(this.props)

    const {overlay} = this.props
    const nodeName = 'nodeExpert'

    const name = get(this, `props.data.${nodeName}.title`)
    const jobTitle = get(this, `props.data.${nodeName}.field_title.processed`)
    const overview = get(this, `props.data.${nodeName}.field_overview.processed`)
    const image = get(this, `props.data.${nodeName}.relationships.field_main_image.localFile.publicURL`)
      console.log(image)
    return (
      <Container>
        <InnerContainer>
          <SideBar>
            <ExpertImage background={image}/>
          </SideBar>
          <ContentBar>
            <ContentBox>
              <Title>{name}</Title>
              <SubTitle dangerouslySetInnerHTML={{ __html: jobTitle }}/>
              <Text dangerouslySetInnerHTML={{ __html: overview }}/>
            </ContentBox>
          </ContentBar>
        </InnerContainer>
      </Container>
    )
  }
}

export default Expert