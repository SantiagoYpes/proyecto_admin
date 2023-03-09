const users = [
  {
    id: 123,
    name: "Santiago",
    lastname: "Yepes",
    image: "https://robohash.org/user1",
  },
  {
    id: 122,
    name: "Samuel",
    lastname: "Yepes",
    image: "https://robohash.org/user2",
  },
  {
    id: 121,
    name: "Ana",
    lastname: "Zuleta",
    image: "https://robohash.org/user3",
  },
];

export const Users = () => {
  return (
    <>
      {users.map((user,index) => {
        return (
            <>  
                <div key={index}>
                    <h1>{user.id}</h1>
                    <h1>{user.name}</h1>
                    <h1>{user.lastname}</h1>
                    <img src={user.image}/>
                </div>
            </>
        )
      })}
    </>
  );
};
