import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const bookings = useLoaderData();
  const {price,img,title,_id} = bookings
  const { user } = useContext(AuthContext);

  const handleBooking = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        date,
        email,
        title,
        img,
        order_id :_id
    }

    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            toast.success('Successfully order added!')
        }
        console.log(data)
    })
  }

  return (
    <div className="bg-base-200 rounded-lg my-10">
      <form onSubmit={handleBooking} className="card-body max-w-5xl mx-auto my-10">
        <div className="grid gap-5 md:grid-cols-2 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={'$ ' + price}
              placeholder="Price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Order description"
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full rounded-lg p-4"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] text-white normal-case">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
