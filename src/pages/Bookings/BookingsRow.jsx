
const BookingsRow = ({ booking,handleDelete,handleUpdateBooking }) => {
  const { customerName, date, email, img, title, _id ,status} = booking;



  return (
    <tr>
      <th>
        <button
          className="btn btn-circle btn-sm"
          onClick={() => handleDelete(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{email}</td>
      <th>{date}</th>
      <th>
        {
            status? <button  className="btn btn-ghost btn-xs btn-outline btn-success text-white normal-case">Confirmed</button> :
            <button onClick={()=>handleUpdateBooking(_id)} className="btn btn-ghost btn-xs bg-[#FF3811] text-white normal-case">Pending</button>}
      </th>
    </tr>
  );
};

export default BookingsRow;
