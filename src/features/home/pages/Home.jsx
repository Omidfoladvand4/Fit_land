
import styled from 'styled-components'
import Header from '../../shared/header/Header'
const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
function Home() {
  return (
    <HomeWrapper>
      <Header />
    </HomeWrapper>
  )
}

export default Home