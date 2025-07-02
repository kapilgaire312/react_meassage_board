import { UserContext } from "./contexts"
import { useContext } from 'react'
function UserList({ slectUser, closeList }) {
  const { usernames } = useContext(UserContext)


  return (
    <div className="absolute">
      <ul>
        {usernames.map((item, index) => <li key={index} onClick={() => { slectUser(usernames[index]); closeList() }}>{item}</li>)}
      </ul>
    </div>
  )
}
export default UserList