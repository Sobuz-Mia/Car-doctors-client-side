import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className='w-1/2 mr-5 relative'>
        <img
          src={person}
          className=" max-w-lg rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className=" max-w-sm absolute right-0 top-1/2 rounded-lg shadow-2xl border-8 border-white"
        />
        </div>
        <div className='w-1/3'>
            <h3 className='text-xl text-[#FF3811] font-bold mb-5'>About us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-5">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="pb-5">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] text-white normal-case px-4">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
