import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';
import "./styles.css"



const Messages = (props) => {
    const {each} = props 
    const {id,subject,body,depth,edit_frozen,href,language,popularity,post_time,post_time_friendly,read_only,search_snippet,view_href} = each 

   
    

  return (
    <div className='button-85'>
        <h1 className='id-head'>id : {id}</h1>
        <p className='subject'><span className="sp">Subject : </span>{subject}</p>
 
  <Dialog.Root>
    <Dialog.Trigger asChild>
    <button className='button-29' >View more</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
              <Dialog.Title><span className='special-word'>id : </span>{id}</Dialog.Title>
        <Dialog.Description><span className='special-word'>Subject : </span>{subject}</Dialog.Description>
        <Dialog.Description><span className='special-word'>depth : </span>{depth}</Dialog.Description>
        <Dialog.Description><span className='special-word'>edit_frozen : </span>{edit_frozen}</Dialog.Description>
        <Dialog.Description><span className='special-word'>href : </span>{href}</Dialog.Description>
        <Dialog.Description><span className='special-word'>language : </span>{language}</Dialog.Description>
        <Dialog.Description><span className='special-word'>popularity : </span>{popularity}</Dialog.Description>
        <Dialog.Description><span className='special-word'>post_time : </span>{post_time}</Dialog.Description>
        <Dialog.Description><span className='special-word'>post_time_friendly : </span>{post_time_friendly}</Dialog.Description>
        <Dialog.Description><span className='special-word'>read_only : </span>{read_only}</Dialog.Description>
        <Dialog.Description><span className='special-word'>search_snippet : </span>{search_snippet}</Dialog.Description>
        <Dialog.Description><span className='special-word'>view_href : </span>{view_href}</Dialog.Description>
        <Dialog.Description><span className='special-word'>Body : </span>{body}</Dialog.Description>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
    </div>
  )
}

export default Messages