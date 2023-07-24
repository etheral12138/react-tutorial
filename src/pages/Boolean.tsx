import React, { useState } from 'react';
import { useInterval } from 'ahooks';
import {Button, Card} from "antd";

const Boolean=() => {
    const [count, setCount] = useState(0);
    const [interval, setInterval] = useState<number | undefined>(1000);

    const clear = useInterval(() => {
        setCount(count + 1);
    }, interval);

    return (
        <div>

            <Card title="useInterval" className={'w-full'}  >
                <p> count: {count} </p>
                <p style={{ marginTop: 16 }}> interval: {interval} </p>
            </Card>
            <Button
                onClick={() => setInterval((t) => (!!t ? t + 1000 : 1000))}
                style={{ marginRight: 8 }}
            >
                interval + 1000
            </Button>
            <Button
                style={{ marginRight: 8 }}
                onClick={() => {
                    setInterval(1000);
                }}
            >
                reset interval
            </Button>
            <Button onClick={clear}>clear</Button>
        </div>
    );
};
export default Boolean
