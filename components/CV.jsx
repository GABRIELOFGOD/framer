import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const CV = () => {
     
  const ref = useRef(null)

  const inView = useInView(ref, { once: true })

  const mainControl = useAnimation()

  useEffect(() => {
    if(inView) {
      mainControl.start('visible')
    }
  }, [inView])
  
  return (
    <motion.div
    ref={ref}
      variants={{
        hidden: { opacity: 0.3, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControl}
      transition={{ duration: 0.5, delay: 1 }}
    className='p-4'>
        <div className='text-center'>
            <h2 className=' test leading-[5rem] text-5xl '>Register your <span className='text-secondary'>CV</span></h2>
            <p className='text-[22px] leading-8 py-5 text-textGray'>At Revlab, we provide end-to-end recruitment solutions, covering roles from entry-level to C-suite.</p>
        </div>
        <div className='py-3 form w-full'>
            <form onSubmit={e => e.preventDefault()}>
                <input className='w-full p-3 my-3 rounded-xl' type="text" placeholder='Name' />
                <input className='w-full p-3 my-3 rounded-xl' type="text" placeholder='Email' />
                <textarea className='w-full p-3 my-3 rounded-xl' name="" id="" cols="10" placeholder='Message' rows="10"></textarea>
              <button className='bg-secondary w-full rounded-xl h-fit my-auto text-[14px] font-bold py-5 text-primary px-8'>Send Message</button>
            </form>
        </div>
    </motion.div>
  )
}

export default CV