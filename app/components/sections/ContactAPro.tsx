import React from 'react'

const steps = [
  {
    heading: 'Verify Your Professional',
    content: 'Before committing to anything, take the time to review your chosen professional. Each profile includes links to their LinkedIn and relevant credentials for your review. If you need further assurance, reach out via WhatsApp or email to confirm their identity and availability before proceeding.',
  },
  {
    heading: 'Pay the Consultation Fee',
    content: 'Once you are satisfied, complete your consultation payment using the details provided on the professional\'s profile. Consultation fees are set by each professional and are visible before you commit. After payment, send your proof of payment directly to the professional to confirm your booking.',
  },
  {
    heading: 'Receive Your Meeting Link',
    content: 'After your payment is confirmed, the professional will send you a meeting link at the scheduled time. All you need to do is show up, ask your questions, and get the expert advice you came for.',
  },
]

const ContactAPro = () => {
  return (
    <section className="w-full py-20 flex flex-col gap-12 items-center" id="contact">
      <h1>Contact a pro</h1>

      <ul className="flex flex-col gap-10">
        {steps.map(({ heading, content }, i) => (
          <li key={i} className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-3">
              <span className="w-6 h-6 bg-text text-background rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <h2 className="text-center">{heading}</h2>
            </div>
            <p className="text-center">{content}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactAPro