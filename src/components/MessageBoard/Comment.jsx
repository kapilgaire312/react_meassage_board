import { forwardRef } from 'react'

const Comment = forwardRef(({ user, comment }, ref) => {
  return (
    <div className="bg-gray-500 rounded my-2 mx-1 px-2 max-w-64 break-all" ref={ref}>
      <p className="text-xs opacity-80">{user}</p>
      <p className="px-2 ">{comment}</p>
    </div>
  );
});

export default Comment

//If control is needed by the parent → pass the ref down.
//If control remains local to the child → define the ref there.