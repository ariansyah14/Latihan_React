import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import styled, {css} from 'styled-components';

const WrapperCard = styled(Card)`
    ${({isGenap}) => {
        console.log(isGenap);
        return isGenap
            ? css `
                background-color: blue;
            `
            : css `
                background-color: white;
            `;
    }
    }  
`;

const Galeri = () => {
    const dataArray = [1,2,3,4,5,6];

    const isGenap = (val) => {
        return val % 2 === 0;
    }

    return(
    <Row>
        {
        dataArray.map((item, key) => {
            return (
                <>
                <Col span={8}>
                    <WrapperCard isGenap={isGenap(key)}
                    //style={{backgroundColor: isGenap(key) ? "blue" : "whiten"}}
                    >
                        <h1>Test</h1>
                    </WrapperCard>
                </Col>
                </>
            );
        })
    }
    </Row>
    )
    
};

export default Galeri
