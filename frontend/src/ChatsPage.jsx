import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='4198750c-b65c-4984-9883-c62a41a0f3bf'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}>
            </PrettyChatWindow>
        </div>
    )
}

export default ChatsPage