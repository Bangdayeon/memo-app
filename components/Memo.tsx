import {useState} from "react";

const Memo = () => {
    const [text, setText] = useState("");

    return (
        <div className="memo-container">
            <textarea
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="메모를 입력하세요..."
            className="memo-textarea"
            />
        </div>
    );
};

export default Memo;