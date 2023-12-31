import React, {useEffect, useState} from 'react';
import {Card} from 'antd';
import {User} from "./User";
import {getUser} from "../api/request";

const { Meta } = Card;



const UserCard=  (props:any) => {
    const [user, setUser] = useState<User>({
        name: "",
        id: 0,
        photoUrls:[]
    })

    useEffect(() => {
        getUser().then(data=>{setUser(data)
        console.log(data)})
    }, [])
    return (<Card
            // style={{width: 300}}
            className={'flex flex-wrap items-center justify-center'}
            cover={
                <img
                    alt="example"
                    src={user.photoUrls[props.index]}
                />
            }
        >
            <Meta
                title={user.id}
                description="This is the description"
            />
        </Card>
    );
}
export default UserCard;
