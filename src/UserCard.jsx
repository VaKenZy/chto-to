// UserCard.js
function UserCard({name, age, city}) {
  return (
    <div>
        <h1>{name}</h1>
        <p1> Возраст: {age}</p1>
        <p1> Город: {city}</p1>
    </div>
  );
}

export default UserCard;