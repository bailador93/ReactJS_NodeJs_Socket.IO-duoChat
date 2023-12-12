
export const StatusConnection = ({ isConnected, connect, disconnect }) => {

    return <>
        <div>
            <div className="buttons">
                <button className={`button ${isConnected ? "is-danger" : "is-success"}`} onClick={isConnected ? disconnect : connect}>
                    {isConnected ? "Disconnect Socket" : "Connect Socket"}
                </button>
            </div>
        </div>
    </>;
}