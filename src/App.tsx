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
import {Alert, Col, Row, Space, Spin} from 'antd';
// import Drag from "./pages/Drag";
import TodoList from "./pages/TodoList";
const App: React.FC = () => (
    <div>
        <TodoList />
    </div>
    // <Space direction="vertical" style={{ width: '100%' }}>
    //     <Space>
    //         {/*<Spin tip="Loading" size="small">*/}
    //         {/*    <div className="content" />*/}
    //
    //         {/*</Spin>*/}
    //         <Col>
    //             <Row>
    //                 <Spin tip="Loading" size="large">
    //                     <div className="content" />
    //                 </Spin>
    //             </Row>
    //             <Row>
    //                 <Spin tip="Loading">
    //                     <div className="content" />
    //                 </Spin>
    //             </Row>
    //         </Col>
    //     </Space>
    //
    //     <Spin tip="Loading...">
    //         <Alert
    //             message="Alert message title"
    //             description="Further details about the context of this alert."
    //             type="info"
    //         />
    //     </Spin>
    // </Space>
);

// export default App;
export default App
