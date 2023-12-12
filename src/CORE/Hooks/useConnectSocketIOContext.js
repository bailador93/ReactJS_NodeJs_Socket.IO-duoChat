import { io } from 'socket.io-client';
import { createContext, useEffect, useState } from "react";

const socket = io("http://localhost:4000");

export const ConnectSocketIOContext = createContext();

export const ConnectSocketIOProvider = ({ children }) => {

    const [useIsSocketConnected, setIsSocketConnected] = useState(socket.connected);
    const [useListDataEvents, setListDataEvents] = useState([]);
    const [useDataChatUserId, setDataChatUserId] = useState("");
    const [useIsOpenDialogToEnterUsername, setIsOpenDialogToEnterUsername] = useState(true);
    const [useUsernameIsEmpty, setUsernameIsEmpty] = useState("");
    const [useUsersOnline, setUsersOnline] = useState(0);

    // connect our Socket.io
    useEffect(() => {


        if (!useIsOpenDialogToEnterUsername) {
            console.log(socket)

            // socket.emit('SERVER-userOnline', arr_online.length);

            // socket.emit("FRONTEND-userOnline");

            socket.on("FRONTEND-userOnline", (onlines) => {
                console.log(onlines);
            })

            const onSocketConnected = () => {
                setIsSocketConnected(true);
            }

            const onSocketDisconnected = () => {
                setIsSocketConnected(false);
            }

            socket.on('connect', onSocketConnected);
            socket.on("disconnect", onSocketDisconnected);

            return () => {
                socket.off('connect', onSocketConnected);
                socket.off('disconnect', onSocketDisconnected);
            };
        }

    }, [useIsOpenDialogToEnterUsername]);

    // Transfer data to server with Socket
    useEffect(() => {

        const receiveDataFromServer = (MESSAGE_FORM) => {
            // console.log(MESSAGE_FORM);
            alert("There is a message for you - Press accept to see it");

            setListDataEvents(e => [...e, MESSAGE_FORM])
        }

        socket.on('SOCKETIO-dataToServer', receiveDataFromServer);

        return () => {
            socket.off('SOCKETIO-dataToServer', receiveDataFromServer);
        };

    }, [socket]);

    const onConfirmUsername = (e) => {
        e.preventDefault();

        if (useDataChatUserId.trim() === "") {
            setUsernameIsEmpty("You need entered an username to access.");
            return;
        }

        socket.id = useDataChatUserId;

        setIsOpenDialogToEnterUsername(false);
        setUsernameIsEmpty("");
    }


    const onSubmitChatNow = (e, MESSAGE, CLEAN_MESSAGE) => {
        e.preventDefault();

        if (MESSAGE.trim() === "") {
            alert("Input empty. Please fill it.");
            return;
        }

        socket.emit("FRONTEND-onSubmitChatNow", { id: socket.id, data: MESSAGE });

        setListDataEvents(e => [...e, { id: socket.id, data: MESSAGE }])

        CLEAN_MESSAGE("");
    }

    return <ConnectSocketIOContext.Provider
        value={{
            socket, useIsSocketConnected, useDataChatUserId, useListDataEvents,
            useIsOpenDialogToEnterUsername, useUsernameIsEmpty, useUsersOnline, setDataChatUserId,
            onSubmitChatNow, onConfirmUsername
        }}>
        {children}
    </ConnectSocketIOContext.Provider>;
}