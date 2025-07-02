function Comment({ user, comment }) {
  return (
    <div className="bg-gray-500 rounded my-2 mx-1 px-2 max-w-64 break-all">
      <p className="text-xs opacity-80">{user}</p>
      <p className="px-2 ">{comment}</p>
    </div>

  )
}
export default Comment