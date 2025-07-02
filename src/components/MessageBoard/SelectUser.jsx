import { useState } from 'react'
import UserList from './UserList'

function SelectUser({ userSelected, changeUser }) {
  const [isUserListOpen, setIsUserListOpen] = useState(false)


  function openUserLists() {
    console.log('clicked')
    isUserListOpen ? setIsUserListOpen(false) : setIsUserListOpen(true)


  }

  return (
    <div>
      {<button className='border-2 ' onClick={openUserLists}>{userSelected}{isUserListOpen ? ' ⬆' : ' ⬇'}</button>}
      {isUserListOpen ? <UserList slectUser={changeUser} closeList={openUserLists} /> : null}


    </div>

  )
}
export default SelectUser