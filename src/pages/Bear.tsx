import {useBearStore} from "../store/bear";
import {Button, Space} from "antd";

const Bear = () => {
    const bears = useBearStore(state => state.bears)
    const increasePopulation = useBearStore(state => state.increasePopulation)
    const removeAllBears = useBearStore(state => state.removeAllBears)
    return (
        <>
            <h1>{bears}</h1>
            <Space align={"center"}>
                <Button onClick={increasePopulation}>increasePopulation</Button>
            </Space>
            <Space align={"center"}>
                <Button onClick={removeAllBears}>removeAllBears</Button>
            </Space>
        </>
    )
}
export default Bear
