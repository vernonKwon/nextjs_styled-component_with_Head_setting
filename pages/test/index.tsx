import React, { FC } from 'react'
import styled from 'styled-components'

const View = styled.div`
    background: yellow;
    width: 100%;
    height: 50%;
`
const Index: FC = () => {
    return <div>
        <View>
            안녕. 이건 두번째 페이지야
        </View>
    </div>
}

export default Index