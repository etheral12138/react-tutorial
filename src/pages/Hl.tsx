import Highlighter from "react-highlight-words";

export default () => {
    const text = "种植牙，种牙，植牙"
    return (
        <div>
            <Highlighter
                highlightStyle={{backgroundColor: "#ffc069", padding: 0}}
                searchWords={["种植牙"]}
                autoEscape={true}
                textToHighlight={text}
            />
        </div>
    )
}
