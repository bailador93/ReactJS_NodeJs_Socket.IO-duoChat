
export const ListChat = ({ online, id, chat }) => {


    return <div className="container_listchat">

        <div className="content_listchat">

            <div className="online_container">
                ONLINE: {online}
            </div>

            {
                chat.map((e, i) => <div key={i} className="content_dialog">
                    <div class="card">
                        <header className="card-header">
                            <p style={{ padding: "1%" }}>
                                User: <b>{e.id}</b>
                            </p>
                        </header>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                {
                                    e.id === id ? <b>YOU: </b> : null
                                } {e.data}

                            </p>
                        </footer>
                    </div>
                </div>)
            }
        </div>
    </div>;
}