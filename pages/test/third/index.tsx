import React, { FC } from 'react'
import styled from 'styled-components'

const Text = styled.p`
    font-size: 30pt;
    color : skyblue;
    font-family: 'Festive', cursive;
`
const Text2 = styled.p`
    font-size: 30pt;
    color : skyblue;
    font-family: 'Nanum Pen Script', cursive;
`

const Index: FC = () => {
    return <div>
        <Text>
            hello world. this is third page.
        </Text>

        <Text2>
            안녕. 이건 한국어 글씨체야
        </Text2>
    </div>
}

export default Index