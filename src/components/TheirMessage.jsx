const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByuser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className='message-row'>
            { isFirstMessageByuser && (
                <div className='message-avatar'
                     style={{ backgroundImage:`url(${message?.sender?.avatar})` }}
                />
            )}
            {
                message?.attachments?.length > 0 
                    //image
                    ? (
                        <img 
                            src={message.attachments[0].file}
                            alt='message-attachment'
                            className='message-image'
                            style={{ marginLeft:isFirstMessageByuser ? '4px' : '48px' }}            
                        />
                    ) : (
                        <div className='message'
                            style={{ 
                                float:'left',
                                backgroundColor:'#CABCDC',
                                marginLeft:isFirstMessageByuser ? '4px' : '48px'
                            }}
                        >
                            {message.text}
                        </div>
                    )
                
            }
        </div>
    );
}
export default TheirMessage;

/* 
Note:
1. `` : template string
2. ${} : dynamic logic
3. message?.sender?.avatar : if message exists then check if sender exists, if both the condition is true then set the avatar

*/