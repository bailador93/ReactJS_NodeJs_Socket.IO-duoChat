import { confirmable } from 'react-confirm';

import duochat from "../../../duo_chat.png";

const ModalEnterData = ({ msg, username, setUsername, confirmUsername }) => (

    <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
            <div className='img_duochat_modal'>
                <img width={150} src={duochat} />
            </div>
            <div className="card" style={{ background: "transparent" }}>

                <header className="card-header" style={{ justifyContent: "center" }}>
                    <p className='p_welcome_title'>Welcome to chat in Socket.io</p>
                </header>

                <div>
                    <form onSubmit={confirmUsername}>
                        <div className="field has-addons input_data_modal_container">
                            <div className="control control_input " >
                                <input className="input" type="text" placeholder="Enter username"
                                    value={username} onChange={(e) => setUsername(e.target.value)} />
                                {
                                    msg ? <p class="help is-danger">{msg}</p> : null
                                }

                            </div>

                            <div className="control control_btn">
                                <button type="submit" className="button is-info">
                                    <i className="fa-solid fa-share"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default confirmable(ModalEnterData);