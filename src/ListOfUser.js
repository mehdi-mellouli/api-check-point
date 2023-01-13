import React , {useEffect , useState} from 'react'
import axios from 'axios'
const ListOfUser = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setListOfUsers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])



  return (
    <div id='container'  >
      {listOfUsers.map(user => (
            <div id='cards' key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
  )
}

export default ListOfUser