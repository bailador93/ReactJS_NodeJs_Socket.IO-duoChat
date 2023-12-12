import { useContext } from "react";
import { FormChat } from "./Chat/FormChat";
import { ListChat } from "./Chat/ListChat";
import { ConnectSocketIOContext } from "../Hooks/useConnectSocketIOContext";
import ModalEnterData  from "./UI/ModalEnterData";


export const Layout = () => {

    const { socket, useIsSocketConnected,
        useDataChatUserId,
        useListDataEvents,
        useIsOpenDialogToEnterUsername,
        useUsernameIsEmpty,
        setDataChatUserId,
        useUsersOnline,
        onSubmitChatNow, onConfirmUsername } = useContext(ConnectSocketIOContext);

    const onClickConnectSocket = () => {
        socket.connect();
    }

    const onClickDisconnectSocket = () => {
        socket.disconnect();
    }

    return <>
        <div>
            {
                useIsOpenDialogToEnterUsername ? <ModalEnterData msg={useUsernameIsEmpty} username={useDataChatUserId} setUsername={setDataChatUserId} confirmUsername={onConfirmUsername}/> : <>
                    <ListChat online={useUsersOnline} id={useDataChatUserId} chat={useListDataEvents} />
                    <FormChat  onSubmitChatNow={onSubmitChatNow} />
                </>
            }
        </div>

        {/*  connect={onClickConnectSocket} disconnect={onClickDisconnectSocket} */}
        {/* {`Server Socket is connected:  ${useIsSocketConnected ? "YES" : "NO"}`} */}

        {/* <StatusConnection isConnected={useIsSocketConnected} connect={connect} disconnect={disconnect} /> */}


    </>;
}