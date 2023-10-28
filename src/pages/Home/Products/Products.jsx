import product_1 from '../../../assets/images/products/6.png'
import product_2 from '../../../assets/images/products/3.png'
import product_3 from '../../../assets/images/products/1.png'
import product_4 from '../../../assets/images/products/2.png'
import product_5 from '../../../assets/images/products/4.png'
import product_6 from '../../../assets/images/products/5.png'
const Products = () => {
  return (
    <div className='text-center mb-5'>
      <div className="text-center space-y-4">
        <h4 className="text-xl text-[#FF3811] font-bold">Popular Products </h4>
        <h2 className="text-4xl font-bold">Browse Our Products</h2>
        <p className="text-base">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.{" "}
        </p>
      </div>
      {/* product-1 */}
      <div className='grid md:grid-cols-3 gap-5'>
        <div className="card bg-base-100 shadow-xl">
          <figure className="w-80 mt-10 rounded h-48 mx-auto bg-[#F3F3F3]">
            <img
              src={product_1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            </div>
            <h2 className='text-2xl font-bold'>Car Engine Plug</h2>
              <p className='text-xl text-[#FF3811] font-semibold'>$20.00</p>
            
          </div>
        </div>
        {/* product-2*/}
        <div className="card bg-base-100 shadow-xl">
          <figure className="w-80 mt-10 rounded h-48 mx-auto bg-[#F3F3F3]">
            <img
              src={product_2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            </div>
            <h2 className='text-2xl font-bold'>Car Air Filter</h2>
              <p className='text-xl text-[#FF3811] font-semibold'>$20.00</p>
            
          </div>
        </div>
        {/* product-3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="w-80 mt-10 rounded h-48 mx-auto bg-[#F3F3F3]">
            <img
              src={product_3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            </div>
            <h2 className='text-2xl font-bold'>Cools Led Light</h2>
              <p className='text-xl text-[#FF3811] font-semibold'>$20.00</p>
            
          </div>
        </div>
        {/* product-4 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="w-80 mt-10 rounded h-48 mx-auto bg-[#F3F3F3]">
            <img
              src={product_4}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            </div>
            <h2 className='text-2xl font-bold'>Cools Led Light</h2>
              <p className='text-xl text-[#FF3811] font-semibold'>$20.00</p>
            
          </div>
        </div>
        {/* product-5 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="w-80 mt-10 rounded h-48 mx-auto bg-[#F3F3F3]">
            <img
              src={product_5}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            </div>
            <h2 className='text-2xl font-bold'>Cools Led Light</h2>
              <p className='text-xl text-[#FF3811] font-semibold'>$20.00</p>
            
          </div>
        </div>
        {/* product-6 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="w-80 mt-10 rounded h-48 mx-auto bg-[#F3F3F3]">
            <img
              src={product_6}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            </div>
            </div>
            <h2 className='text-2xl font-bold'>Cools Led Light</h2>
              <p className='text-xl text-[#FF3811] font-semibold'>$20.00</p>
            
          </div>
        </div>
      </div>
      <button className='text-center mt-5 text-xl text-[#FF3811] btn-outline btn normal-case space-y-5'>More Products</button>
    </div>
  );
};

export default Products;
