import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {!session && <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>}
      {session && <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Signout</button>
      </form>}
    </>
  );
}

// // import Logout from "@/component/logout";
// // import { auth } from "./api/auth/[...nextauth]/route";
// "use client";
// import { Reorder } from "framer-motion";
// import { useState } from "react";

// export default function Home() {
//   // const session= await auth();

//   // console.log(session);

//   // return <Logout />;
//   const [items, setItems] = useState([
//     {
//       name: "Adeel Solangi",
//       language: "Sindhi",
//       id: "V59OF92YF627HFY0",
//       bio: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
//       version: 6.1,
//     },
//     {
//       name: "Afzal Ghaffar",
//       language: "Sindhi",
//       id: "ENTOCR13RSCLZ6KU",
//       bio: "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
//       version: 1.88,
//     },
//     {
//       name: "Aamir Solangi",
//       language: "Sindhi",
//       id: "IAKPO3R4761JDRVG",
//       bio: "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
//       version: 7.27,
//     },
//     {
//       name: "Abla Dilmurat",
//       language: "Uyghur",
//       id: "5ZVOEPMJUI4MB4EN",
//       bio: "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
//       version: 2.53,
//     },
//     {
//       name: "Adil Eli",
//       language: "Uyghur",
//       id: "6VTI8X6LL0MMPJCC",
//       bio: "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
//       version: 6.49,
//     },
//   ]);
//   const [edit, setEdit] = useState(false);
//   const editHandler = () => {
//     setEdit(true);
//   };
//   const handleClick = () => {
//     console.log(items);
//     setEdit(false);
//   };

//   return (
//     <>
//       <button type="button" onClick={editHandler}>
//         Edit
//       </button>
//       <button type="button" onClick={handleClick}>
//         Save
//       </button>
//       <Reorder.Group axis="y" values={items} onReorder={setItems}>
//         {items.map((item) => (
//           <Reorder.Item key={item.id} value={item} dragListener={edit}>
//             {<h2 style={{ textAlign: "center" }}>{item.id}</h2>}
//           </Reorder.Item>
//         ))}
//       </Reorder.Group>
//     </>
//   );
// }
