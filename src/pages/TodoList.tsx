import React, {useState} from "react";
import {Button, Input, Layout, Menu, MenuProps, Space, theme} from "antd";
const {Header, Sider, Footer, Content } = Layout;

// const TodoListItem = (props: TodoListItemProps) => {
//     return (
//         <div>
//             <li >{props.text}</li>
//             <Button onClick={()=>{
//             }}>删除</Button>
//         </div>
//     )
// }
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Icon from "antd/es/icon";
import {ViteSvg} from "./ViteSvg";
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);
const TodoList = () => {
    const [todo, setTodo] = useState<string[]>([])
    const [input, setInput] = useState('')
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
                    <Layout draggable  className={'w-screen h-screen p-0 m-0'}>
                        <Header  className={'flex items-center p-2'}>
                            <img className={'mr-5'} src={"./react.svg"} alt=""/>
                            <span className={'text-white font-bold text-3xl'}>TodoList</span>
                        </Header>
                        <Layout >
                            <Sider collapsible={true} width={200} style={{ background: colorBgContainer }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', borderRight: 0 }}
                                    items={items2}
                                />
                            </Sider>
                            <Layout>
                                    <Content className={'flex justify-center items-center'}>
                                        <Space>
                                            <Input placeholder={'请输入待办事项'} type="text" value={input}
                                                onChange={(e) => setInput(e.target.value)}/>
                                            <Button onClick={() => setTodo([...todo, input])}>增加</Button>
                                        </Space>
                                    </Content>
                                <Footer>
                                    {todo.map((item, index) =>{
                                            return(
                                                <div className={'flex justify-center content-center'} key={index}>
                                                    <li>
                                                        {item}
                                                    </li>
                                                    <Button onClick={()=>setTodo(todo.filter((item2,index2)=>index2!==index))}>删除</Button>
                                                </div>
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
