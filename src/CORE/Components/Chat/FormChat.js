import { useState } from "react";

export const FormChat = ({ onSubmitChatNow }) => {

    const [useMessage, setMessage] = useState("");

    return <>
        <div className="container_chatbox">


            <form onSubmit={(e) => onSubmitChatNow(e, useMessage, setMessage)}>
                <div className="field has-addons input_chatbox_container">
                    <div className="control control_input">
                        <input className="input" type="text" placeholder="Enter text"
                            value={useMessage} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="control control_btn">
                        <button type="submit" className="button is-info">
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>;
}