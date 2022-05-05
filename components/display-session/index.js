const DisplaySession = ({session}) => {
    if (!session) return <div></div>
    return <div>
            {Object.keys(session).map(k => <div key={k}>{k}
                <pre>{JSON.stringify(session[k])}</pre>
            </div>)}
        </div>
    }

export default DisplaySession;