import Comment from './Comment'
import { CommentsContext } from "./contexts"
import { useContext } from 'react'
function CommentLists() {
  const { comments } = useContext(CommentsContext)
  console.log(comments)
  return (
    <div className='flex justify-center my-6 '>
      <div className="bg-cyan-100 rounded text-left h-96 w-64 overflow-y-scroll no-scrollbar scroll-smooth
">
        {comments?.map((item, index) =>
          <Comment key={index} user={item.user} comment={item.comment} />
        )}

      </div>

    </div>

  )
}

export default CommentLists