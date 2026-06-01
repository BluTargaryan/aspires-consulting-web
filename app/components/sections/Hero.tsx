import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import Button from '@/app/components/atoms/Button'

const Hero = () => {
  return (
   <section className="w-full py-25 flex flex-col gap-5">
<h1>Find the Right Expert. <br/>Get the Right Advice.</h1>

<div className="flex flex-col gap-4">
<p>Aspires connects you with vetted professionals across every field, so you can access credible expertise, make informed decisions, and move forward with confidence.</p>

<div className="flex gap-2">
<Button text="Get Started" onClick={() => {}} icon={<MdArrowRight />} className="bg-primary text-background hover:bg-hover " />
</div>
</div>
   </section>
  )
}

export default Hero