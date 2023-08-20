// import { useState } from 'react'
// import UserCard from "./UserCard";
// import {getUserDetail} from "./request";
// import {Card} from "antd";
//
// type props={
//     title:string,
//     isActive?:boolean,
//     children:any
//     onShow?: Function
// }
// function Panel() {
//     return (
//         <div>
//             <SubPanel title={'1'} >你好</SubPanel>
//             <SubPanel title={'2'}>好你</SubPanel>
//         </div>
//     )
// }
// const Title=({children}:any)=>{
//     return(
//         <h2>{children}</h2>
//     )
// }
// function SubPanel({title,children}:props) {
//     const [isActive,setIsActive]=useState(false)
//     ;
//     return (
//         <div>
//             <h2>{title}</h2>
//             {isActive?(
//                     <Title>{children}</Title>
//             ):(
//             <button onClick={()=>setIsActive(true)} className={"text-red-600"} >显示</button>
//             )}
//         </div>
//     );
// }
//
// // const user=getUserDetail('etheral12138')
// function App() {
//     // const panel=<Panel />
//     return (
//         <>
//             {[0,1,2,3].map(index=><UserCard  index={index} key={index} />)}
//         </>
//
//
// // <>
// //     {panel}
// //     {panel}
// // </>
//     );
// }
import React from 'react';
import TodoList from "./pages/TodoList";

const App: React.FC = () => (
        <TodoList />
);

// export default App;
export default App
