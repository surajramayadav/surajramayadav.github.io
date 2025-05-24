import React from 'react'


const work=[
  {
    id:1,
    company:"Magic Ed Tech",
    role:"Senior Software Engineer",
    duration:"Jan 2025 - Present",
    startDate:"2025-01-03",
    endDate:"Present",
    tech:"React Native"
  },
  {
    id:2,
    company:"Metafic",
    role:"Software Engineer",
    duration:"June 2022 - Nov 2024",
    startDate:"2022-06-08",
    endDate:"2024-11-30",
    tech:'Full-Stack'
  }
]

const calculateExperience = () => {
  const totalMonths = work.reduce((total, job) => {
    const start = new Date(job.startDate);
    const end = job.endDate === "Present" ? new Date() : new Date(job.endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                  (end.getMonth() - start.getMonth());
    return total + months;
  }, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return `${years} years ${months} months`;
};

export default function Work() {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-[8%] py-8 mt-10'>

      <div className='flex justify-end'>
        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl'>Work</h1>
      </div>
      <div className=' overflow-x-auto'>
        <div className='min-w-full inline-block align-middle'>
          <div className='overflow-hidden'>
            <table className='min-w-full divide-y divide-gray-200'>
              
              <tbody className='divide-y divide-gray-200'>
                {work.map((item) => (
                  <tr key={item.id} className='hover:bg-white hover:text-black transition-colors duration-200 border-t border-b border-gray-200'>
                    <td className='py-3 px-3 sm:px-6 text-1xl sm:text-2xl md:text-3xl whitespace-nowrap'>{item.duration}</td>
                    <td className='py-3 px-3 sm:px-6 text-1xl sm:text-2xl md:text-3xl whitespace-nowrap'>{item.company}</td>
                    <td className='py-3 px-3 sm:px-6 text-1xl sm:text-2xl md:text-3xl whitespace-nowrap'>{item.role} | {item.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl mt-8 text-[#A6A6A6]'>Work Experience <br /> <span className='text-white'>{calculateExperience()}</span></h1>
      </div>
    </div>
  )
}