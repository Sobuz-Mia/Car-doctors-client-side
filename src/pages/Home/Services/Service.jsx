import { AiOutlineArrowRight } from 'react-icons/ai';
const Service = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="p-5">
        <img src={img} alt="Shoes" className="w-full rounded-lg" />
      </div>
      <div className="p-5">
        <h2 className="card-title mb-3 font-bold">{title}</h2>
        <p className='text-[#FF3811]'>Price: ${price}</p>
        <div className="card-actions justify-end">
          <AiOutlineArrowRight className='text-[#FF3811] text-xl'/>
        </div>
      </div>
    </div>
  );
};

export default Service;
