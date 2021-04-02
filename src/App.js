/* 
Admin -> username : fzhussain
         password : faraz

*/

import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height='100vh'
            projectID='55c0e014-6ae8-4208-92d9-bd28fa4dc092'
            userName={ localStorage.getItem('username') }
            userSecret={ localStorage.getItem('password') }
            renderIsTyping={(people) => {}}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;