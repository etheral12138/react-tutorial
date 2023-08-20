import React, {useState} from "react";
import {Button, Col, Input, Layout, Modal, Row, Space, theme} from "antd";
import {LineOutlined} from "@ant-design/icons";

const {Header} = Layout;
const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([])
    const [input, setInput] = useState('')
    const [newTodo, setNewTodo] = useState('');
    const [visible, setVisible] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const handleAdd = (input: string) => {
        setTodos([...todos, input])
    }
    const handleEdit = () => {
        setVisible(true)
    }
    const handleConfirm = (index: number, newValue: string) => {
        const newTodos = [...todos];
        newTodos[index] = newValue;
        setTodos(newTodos);
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const handleDelete = (index: number) => {
        setTodos(todos.filter((_, index2) => index2 !== index))
    }
    return (
        <>
            <Layout className={'w-screen h-screen p-0 m-0'}>
                <Header className={'flex items-center p-2'}>
                    <img className={'mr-5'} src={"./react.svg"} alt=""/>
                    <span className={'text-white font-bold text-3xl'}>TodoList</span>
                </Header>
                <Row
                    align={"middle"}
                    justify={"space-around"}
                >
                    <Col span={12}>
                        <Space>
                            <Input placeholder={'请输入待办事项'} type="text" value={input}
                                   onChange={(e) => setInput(e.target.value)}/>
                            <Button onClick={() => handleAdd(input)}>增加</Button>
                        </Space>
                    </Col>
                    <Col span={12}>
                        {todos.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <LineOutlined rev={undefined}/>
                                        {item}
                                        <Modal
                                            open={visible}
                                            footer={null}
                                            onCancel={() => handleCancel()}
                                        >
                                            <Space>
                                                <Input
                                                    type="text"
                                                    value={newTodo}
                                                    onChange={(e) => setNewTodo(e.target.value)}
                                                />
                                                <Button onClick={() => handleConfirm(index, newTodo)}>确认</Button>
                                            </Space>
                                        </Modal>
                                        <Space>
                                            <Button onClick={() => handleEdit()}>编辑</Button>
                                                    <Button onClick={() => handleDelete(index)}>删除</Button>
                                        </Space>
                                    </div>
                                )
                            }
                        )
                        }
                    </Col>
                </Row>
            </Layout>
        </>
    )
}
export default TodoList
