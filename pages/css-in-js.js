import styled from 'styled-components'

const Title=styled.h1`
    font-size:80px;
    color:${({theme})=>theme.colors.primary};
`
function CSSJS(){
    return <Title>Hello World</Title>
}

export default CSSJS