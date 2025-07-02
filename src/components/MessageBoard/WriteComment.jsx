import SelectUser from "./SelectUser"
import { CommentsContext } from "./contexts"
import { useContext, useState } from "react"


function WriteComment() {
  const { comments, setComments } = useContext(CommentsContext)
  const [currentComment, setCurrentComment] = useState('');
  const [selectedUser, setSelectedUser] = useState('kap');

  function addComment(e, user, comment) {
    e.preventDefault();
    if (comment.trim() === '') return
    console.log(comment)
    setComments([...comments, { user, comment }])
    setCurrentComment('')

  }

  return (
    <div className='flex justify-center'>
      <div className="flex gap-3">
        <SelectUser userSelected={selectedUser} changeUser={setSelectedUser} />
        <form onSubmit={(e) => { addComment(e, selectedUser, currentComment) }}>
          <input className="border-2 border-black" placeholder="Comment Something" value={currentComment} onChange={(e) => { setCurrentComment(e.target.value) }}></input>
          <button className="border-2 mx-2 bg-yellow-200 hover:opacity-80">Comment</button>


        </form>
      </div>

    </div>

  )

}

export default WriteComment