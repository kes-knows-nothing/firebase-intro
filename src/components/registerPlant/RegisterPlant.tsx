import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const RegisterPlants = () => {
  const [nickname, setNickname] = useState<string>("");
  const [startDay, setStartDay] = useState<string>("");
  const plantRegisterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "plants"), {
        Nickname: nickname,
        StartDay: startDay,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <h1>this is registeration office</h1>
      <form action="" onSubmit={plantRegisterHandler}>
        <input type="text" placeholder="plant nickname?" value={nickname} onChange={(e) => {setNickname(e.target.value)}} />
        <input type="text" placeholder="When you buy it?" value={startDay} onChange={(e) => {setStartDay(e.target.value)}}/>
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPlants;
