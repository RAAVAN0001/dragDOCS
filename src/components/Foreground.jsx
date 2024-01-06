import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
          description: 'Life is like a software update. You never know what new feature will mess up your day!',
          fileSize: '.9MB',
          close: false,
          tag: {
            isOpen: true,
            tagTitle: 'Download now',
            tagColor: 'green',
          },
        },
        {
          description: 'I asked the computer for a joke, and it replied, "You\'re the funniest thing I\'ve seen all day!"',
          fileSize: '.8MB',
          close: true,
          tag: {
            isOpen: true,
            tagTitle: 'Upload',
            tagColor: 'blue',
          },
        },
        {
          description: 'Why did the developer go broke? Because he used up all his cache!',
          fileSize: '1MB',
          close: false,
          tag: {
            isOpen: false,
            tagTitle: 'Download now',
            tagColor: 'green',
          },
        },
        {
          description: 'I told my computer I needed a break, and now it won’t stop sending me vacation ads.',
          fileSize: '1.2MB',
          close: true,
          tag: {
            isOpen: true,
            tagTitle: 'Upload',
            tagColor: 'blue',
          },
        },
        {
          description: 'Life is short, smile while you still have teeth!',
          fileSize: '1.5MB',
          close: false,
          tag: {
            isOpen: true,
            tagTitle: 'Download now',
            tagColor: 'green',
          },
        },
      ];
      
      // Feel free to use this updated 'data' array in your application.
      
      
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