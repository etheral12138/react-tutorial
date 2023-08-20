import React, {useState} from "react";
import {Button, Input, Layout, MenuProps, Modal, Space, theme} from "antd";

const {Header, Footer, Content} = Layout;

// const TodoListItem = (props: TodoListItemProps) => {
//     return (
//         <div>
//             <li >{props.text}</li>
//             <Button onClick={()=>{
//             }}>删除</Button>
//         </div>
//     )
// }
type MenuItem = Required<MenuProps>['items'][number];
const TodoList = () => {
    const [todo, setTodo] = useState<string[]>([])
    const [input, setInput] = useState('')
    const [newTodo, setNewTodo] = useState('');
    const [edit, setEdit] = useState(null)
    const [visible, setVisible] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const handleAdd = () => {
        setTodo([...todo, input])
    }
    const handleEdit = (index: any) => {
        setEdit(index)
        setVisible(true)
    }
    const handleConfirm = (index: number, newValue: string) => {
        const newTodos = [...todo];
        newTodos[index] = newValue;
        setTodo(newTodos);
        setEdit(null);
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const handleDelete = (index: number) => {
        setTodo(todo.filter((item2, index2) => index2 !== index))
    }
    return (
        <>
                    <Layout draggable  className={'w-screen h-screen p-0 m-0'}>
                        <Header  className={'flex items-center p-2'}>
                            <img className={'mr-5'} src={"./react.svg"} alt=""/>
                            <span className={'text-white font-bold text-3xl'}>TodoList</span>
                        </Header>
                        <Layout >
                            <Layout>
                                    <Content className={'flex justify-center items-center'}>
                                        <Space>
                                            <Input placeholder={'请输入待办事项'} type="text" value={input}
                                                onChange={(e) => setInput(e.target.value)}/>
                                            <Button onClick={() => handleAdd}>增加</Button>
                                        </Space>
                                    </Content>
                                <Footer>
                                    {todo.map((item, index) =>{
                                            return(
                                                <li className={'flex justify-center content-center'} key={index}>
                                                    {item}
                                                    {
                                                        edit === index && (
                                                            <Modal
                                                                open={visible}
                                                                footer={null}
                                                                onCancel={() => handleCancel}
                                                            >
                                                                <Input
                                                                    type="text"
                                                                    value={newTodo}
                                                                    onChange={(e) => setNewTodo(e.target.value)}
                                                                />
                                                                <Button
                                                                    onClick={() => handleConfirm(index, newTodo)}>确认</Button>
                                                            </Modal>
                                                        )
                                                    }
                                                    <Button onClick={() => handleEdit(index)}>编辑</Button>
                                                    <Button onClick={() => handleDelete(index)}>删除</Button>
                                                </li>
                                            )
                                        }
                                    )
                                    }
                                </Footer>
                            </Layout>
                        </Layout>
                    </Layout>
        </>
    )
}
export default TodoList
