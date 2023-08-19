import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';
import useMeasure from 'react-use-measure';
import { useGesture } from '@use-gesture/react';

const OFFSET = Math.random();

const map = function (value, in_min, in_max, out_min, out_max) {
    console.log(value);
    console.log((value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
    if (value === 0) {
        console.log('00000');
        return out_min;
    }
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};


const prizes = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5', 'Prize 6', 'Prize 7', 'Prize 8', 'Prize 9', 'Prize 10', 'Prize 11', 'Prize 12'];


function Wheel() {
    const parentRef = useRef(null); // Create a reference to the parent container
    const [parentWidth, setParentWidth] = useState(0); // Initialize parentWidth state
    const [cell, setCell] = useState(10); // Initialize parentWidth state

    useEffect(() => {
        if (parentRef.current) {
            setParentWidth(parentRef.current.clientWidth); // Get the parent container's width
        }
    }, []);

    const circleRadius = parentWidth * 0.5;
    const cx = circleRadius;
    const cy = circleRadius;
    const [power, setPower] = useState(0);
    const [acc, setAcc] = useState(0);
    const config = { mass: 100, tension: 200, friction: 300, precision: 0.00001 };
    const [props, set] = useSpring(() => ({ transform: 'rotate(0deg)', immediate: false }));

    const bind = useGesture({
        onWheel: ({ offset: [, y] }) => {
            set({ transform: `rotate(${map(y, -300, 300, 0, 700)}deg)`, immediate: false, config });
            setAcc(map(y, -300, 300, 0, 700));
        },
    });

    useEffect(() => {
        set({
            from: { transform: `rotate(${map(acc, 0, 100, 0, 700)}deg)` },
            transform: `rotate(${map(acc + power, 0, 100, 0, 700)}deg)`,
            immediate: false,
            config
        });
        setAcc(acc + power);
    }, [power, cell]);




    const renderItems = (numOfItems) => {
        let items: JSX.Element[] = [];
        for (let i = 0; i < numOfItems; i++) {
            let xLength = Math.cos(2 * Math.PI * (i / numOfItems + OFFSET)) * (circleRadius - 5);
            let yLength = Math.sin(2 * Math.PI * (i / numOfItems + OFFSET)) * (circleRadius - 5);
            let txLength = Math.cos(2 * Math.PI * ((i + 0.5) / numOfItems + OFFSET)) * (circleRadius / 2);
            let tyLength = Math.sin(2 * Math.PI * ((i + 0.5) / numOfItems + OFFSET)) * (circleRadius / 2);
            let xRate = 60;
            let yRate = 5;
            items.push(
                <Fragment key={i}>
                    <line
                        stroke='rgb(255,0,0)'
                        strokeWidth='1'
                        x1={cx + xLength}
                        y1={cy + yLength}
                        x2={cx}
                        y2={cy}
                    />
                    <text
                        x={cx + txLength + xRate}
                        y={cy + tyLength + yRate}
                        fontSize="20px"
                        transform={`rotate(${((i + 0.5) / numOfItems + OFFSET) * 360} 
                          ${cx + txLength},
                          ${cy + tyLength})`}
                    >{i}</text>
                </Fragment>
            );
        }
        return items;
    };

    const calculatePrize = (degrees) => {
        // Calculate the index of the prize based on the degrees
        const index = Math.floor((degrees + 30) % 360 / 30);
        return prizes[index];
    };

    return (
        <div ref={parentRef}> {/* Attach the ref to the parent container */}
            <div >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${parentWidth} ${parentWidth}`} {...bind()}
                    style={{ width: "90vw", height: "80vh" }}>
                    <g fill="white" stroke="green" strokeWidth="2">
                        <circle cx={circleRadius} cy={circleRadius} r={circleRadius * 0.98} />
                    </g>
                    <animated.g style={{
                        transform: props.transform,
                        transformOrigin: `${circleRadius}px ${circleRadius}px`
                    }} >
                        {renderItems(cell)}
                    </animated.g>
                    <g fill="#61DAFB">
                        <circle cx={circleRadius} cy={circleRadius} r="15" />
                    </g>
                    <g fill="black">
                        <circle cx={circleRadius} cy={circleRadius} r="5" />
                    </g>
                    <g fill="lime" stroke="purple" strokeWidth="2">
                        <polygon points={`${circleRadius},10 ${circleRadius - 20}, -30 ${circleRadius + 20},-30`} />
                    </g>
                </svg>
            </div>
            <InputCell onCellValueChange={setCell} />
            <PressButton setPower={setPower} />
        </div >
    );
}


const StyledInputCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    `;


const InputCell = ({ onCellValueChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        // Call the provided callback function to update the value in the parent component
        onCellValueChange(newValue);
        console.log(inputValue);
    };

    return (
        <StyledInputCell>
            <input placeholder='N.Cells'
                value={inputValue}
                onChange={handleInputChange}
                style={{ border: '1px solid black', height: '60%' }}
            />
        </StyledInputCell>
    );
};



const StyledButton = styled.button`
        width: 80%;
        height: 50px;
        background: hotpink;
    `;

const Container = styled.div`
        display: flex;
        justify-content: center;
    `;

const PressButton = ({ setPower }) => {
    const [pressed, setPressed] = useState(false);
    const [width, setWidth] = useState(0); // Initialize width state here

    const [props, set] = useSpring(() => ({
        from: { width: '0%', backgroundColor: 'hotpink' },
        width: pressed ? '100%' : '0%',
        backgroundColor: pressed ? 'red' : 'hotpink',
        immediate: pressed
    }));

    useEffect(() => {
        if (pressed)
            set({
                from: { width: '0%', backgroundColor: "green" },
                to: { width: '100%', backgroundColor: "red" }, immediate: false, config: { duration: 3000 }
            });
        else {
            setWidth(parseInt(props.width.get()));
            setPower(width * 5);
            console.log(`power: ${width * 4}`);
            set({ to: { width: '0%', backgroundColor: 'hotpink' }, immediate: true });
        }
    }, [pressed, setPower]);


    const interpolatedWidth = props.width.to(x => {
        // console.log(x);
        return x === '0%' ? "Press me!" : parseInt(x) + '%';
    });

    const handlePressButton = (pressed) => {
        setPressed(pressed);
    };

    return (
        <Container>
            <StyledButton
                className="power-button"
                onMouseDown={() => handlePressButton(true)}
                onMouseUp={() => handlePressButton(false)}
                onTouchStart={() => handlePressButton(true)}
                onTouchEnd={() => handlePressButton(false)}
            >
                <animated.div className="loading">{interpolatedWidth}</animated.div>
            </StyledButton>
        </Container >

    );
};

export default Wheel;
