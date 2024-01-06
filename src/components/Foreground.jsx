import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in hic rem distinctio!!!!',
          fileSize: '.9MB',
          close: false,
          tag: {
            isOpen: true,
            tagTitle: 'Download now',
            tagColor: 'green',
          },
        },
        {
          description: 'Another description for the second object. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          fileSize: '.8MB',
          close: true,
          tag: {
            isOpen: true,
            tagTitle: 'Upload',
            tagColor: 'blue',
          },
        },
        {
          description: 'A third description goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          fileSize: '1MB',
          close: false,
          tag: {
            isOpen: false,
            tagTitle: 'Download now',
            tagColor: 'green',
          },
        },
        {
          description: 'Adding more text for the fourth object description. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          fileSize: '1.2MB',
          close: true,
          tag: {
            isOpen: true,
            tagTitle: 'Upload',
            tagColor: 'blue',
          },
        },
        {
          description: 'The fifth description for your array of objects. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          fileSize: '1.5MB',
          close: false,
          tag: {
            isOpen: true,
            tagTitle: 'Download now',
            tagColor: 'green',
          },
        },
      ];
      
      // You can now use this updated 'data' array in your application.
      

    return (
        <div ref={ref} className="fixed z-30 w-full h-full flex gap-10 flex-wrap p-5">
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground