import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

const Wheel = () => {
    const [isSpinning, setIsSpinning] = useState(false);

    const [{ rotate }, setRotate] = useSpring(() => ({ rotate: 0 }));

    const bind = useDrag(({ movement: [mx], down }) => {
        if (down) {
            const rotation = mx / 10;
            setRotate({ rotate: rotation });
        }
    });

    const startSpin = () => {
        setRotate({ rotate: 60, reset: true, from: { rotate: 0 }, onRest: () => setIsSpinning(false) });

        setIsSpinning(true);
    };

    return (
        <div className="wheel-container">
            <animated.div
                {...bind()}
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'lightgray',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: '`rotate(0deg)'
                }}
            >
                Wheel Content
            </animated.div>
            <button onClick={isSpinning ? null : startSpin} disabled={isSpinning}>
                {isSpinning ? 'Spinning...' : 'Start Spin'}
            </button>
        </div>
    );
};

export default Wheel;
