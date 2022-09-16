import { Chat,defaultTheme } from '@flyerhq/react-native-chat-ui'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function MessageScreen(props) {
    const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = Math.floor(Math.random() * 16)
          const v = c === 'x' ? r : (r % 4) + 8
          return v.toString(16)
        })
    }
    const [messages, setMessages] = useState([])
    const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c',}  
    const user2 = { id: '06c33e8b-e835-4736-80f4-63f44b66666d',firstName:'Sagnik',lastName:'Saha',imageUrl:'https://bestgoodcaptions.com/wp-content/uploads/2019/12/Profile-Picture-Quotes.jpg'}  
    
    const addMessage = (message) => {
        const anotherMessage = {
          author:user2,
          createdAt: Date.now(),
          id: uuidv4(),
          text:'This is message from user 2',
          type: 'text',
          
          
        }
        setMessages([anotherMessage,message,...messages])
      }
    
      const handleSendPress = (message) => {
        const textMessage = {
          author: user,
          createdAt: Date.now(),
          id: uuidv4(),
          text: message.text,
          type: 'text',
          
        }
        
        addMessage(textMessage)
        
      }
    return (
        
            <Chat
            messages={messages}
            onSendPress={handleSendPress}
            user={user}
            showUserNames
            showUserAvatars
            theme={{
              ...defaultTheme,
              colors: { ...defaultTheme.colors,userAvatarNameColors:['black']},
            }}
            />
      
    );
}

export default MessageScreen;