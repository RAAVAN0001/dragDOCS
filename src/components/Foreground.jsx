import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in hic rem distinctio!!!!',
            fileSize: '.9MB',
            close: false,
            tag:
            {
                isOpen: true,
                tagTitle: 'Download now',
                tagColor: 'green',
            },

        },
        {
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in hic rem distinctio!!!!',
            fileSize: '.9MB',
            close: true,
            tag:
            {
                isOpen: true,
                tagTitle: 'Upload',
                tagColor: 'blue',
            },

        },
        {
            discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in hic rem distinctio!!!!',
            fileSize: '.9MB',
            close: false,
            tag:
            {
                isOpen: false,
                tagTitle: 'Download now',
                tagColor: 'green',
            },

        }
    ]

    return (
        <div ref={ref} className="fixed z-30 w-full h-full flex gap-10 flex-wrap p-5">
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground