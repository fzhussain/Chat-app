// all the logic to write and send messages

import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        event.preventDefault();  //This is gonna make sure that there's no browser refresh on submission 

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
    }
    const handleChange = (event)=>{
        setValue(event.target.value);

        isTyping(props, chatId);

    }
    const handleUpload = (event) => {
        // event here is the image
        sendMessage(creds, chatId, { files: event.target.files, text:'' });  
        // for images or file -> event.target.files not event.target.value
    }
    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input 
                className='message-input'
                placeholder='Type a message...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className='image-button'>
                    <PictureOutlined className='picture-icon' />
                </span>
            </label>
            <input 
                type='file'
                multiple={false}
                id='upload-button'
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type='submit' className='send-button'>
                <SendOutlined className='send-icon' />
            </button>
        </form>
    );
}

export default MessageForm;