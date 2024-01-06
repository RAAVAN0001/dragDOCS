import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

const Card = ({ data, reference }) => {
    return (
        <motion.div
            drag
            dragTransition={{ bounceDamping: 10, bounceStiffness: 100 }}
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={.2}
            className=' flex-shrink-0 relative w-60 h-72 rounded-[40px] px-8 py-10
         overflow-hidden bg-zinc-900/90 p-5 text-white border'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.discription}</p>
            <div className='footer absolute bottom-0 left-0  w-full '>
                <div className='flex items-center justify-between px-8 mb-3 py-3'>

                    <h5>{data.fileSize}</h5>
                    <span className=' w-7 bg-zinc-500 rounded-full items-center flex justify-center h-7'>
                        {data.close ? (<IoClose size={'.8em'} color='#000' />
                        ) : (<LuDownload size={'.8em'} color='#000' />)}

                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.close ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }



            </div>
        </motion.div>
    )
}

export default Card
