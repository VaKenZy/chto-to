import { useEffect, useState } from 'react'
import UserName from './UserCard'
import UserCard from './UserCard'
import './App.css'
function App() {


  return (
    <div>
      <h1> Список пользователей: </h1>
      <UserCard  
      name="Татьяна"
      age={22}
      city="Warszawa"
      />


      <UserCard
      name="Иван"
      age={24}
      city="Moscow"
      />
    </div>
  )

}



export default App 