import React from 'react'
import PersonnelCard from '../atoms/PersonnelCard'

const PersonnelList = () => {
  return (
    <ul className="flex flex-col gap-16 w-[270px]">
      <PersonnelCard
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80"
        name="Mr. Chidiebere Okeke"
        consultationFee="£ 50"
        bio="Sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque."
        paymentDetails={{ bank: 'REVOLUT', accountNo: '0000 0000 0000 0000' }}
        socials={[
          { label: 'LinkedIn', url: '#' },
          { label: 'LinkedIn', url: '#' },
          { label: 'LinkedIn', url: '#' },
        ]}
      />
    </ul>
  )
}

export default PersonnelList