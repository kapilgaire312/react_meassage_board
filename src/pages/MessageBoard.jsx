import CommentLists from "../components/MessageBoard/CommentLists"
import { CommentsContext, UserContext } from "../components/MessageBoard/contexts"
import Header from "../components/MessageBoard/header"
import WriteComment from "../components/MessageBoard/WriteComment"
import { useState } from 'react'


function MessageBoard() {
  const [comments, setComments] = useState([])
  const [usernames, setUsernames] = useState(['Kap', 'Rap', 'Jhap'])


  return (
    <>
      <Header />
      <CommentsContext.Provider value={{ comments, setComments }}>
        <UserContext.Provider value={{ usernames, setUsernames }}>

          <CommentLists />
          <WriteComment />

        </UserContext.Provider>
      </CommentsContext.Provider>

    </>
  )
}

export default MessageBoard