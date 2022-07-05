import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Pro(props) {
    return (
        <CircularProgressbar
            value={props.value}
            text={`${props.value}%`}
            strokeWidth={10}
            styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                    // Path color
                    stroke: "#FF7700",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                    // Trail color
                    stroke: 'white',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                // Customize the text
                text: {
                    // Text color
                    fill: 'white',
                    // Text size
                    fontSize: '16px',
                    fontWeight: '700',
                },
                // Customize background - only used when the `background` prop is true
                background: {
                    fill: 'white',
                },
            }}
        />
    )
}

export default Pro