import {useState} from 'react';
import axios from 'axios';


const LoginForm = () => {
    //functional component
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': '55c0e014-6ae8-4208-92d9-bd28fa4dc092', 'User-Name': username, 'User-Secret': password };
        try {
            // username | password -> chat-engine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers:authObject });
            // that works out -> logged in

            // if successfull then store the credentials in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            window.location.reload();
            
        } catch (error) {
            // error
            setError('Invaild Credentials!');
        }
        // username | password -> chat-engine -> give messages
        // if that works out -> logged in
        // else -> error ->try with new credentials
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required/>
                    <div align='center' >
                        <button type='submit' className='button'>
                            <span>Start Chit-Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'> { error } </h2>                 
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
/* 
Note:
1. e is the key-pressed input and e.target.value contains the value of the input and we store that in 
username variable in username state.

*/