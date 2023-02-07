import React from 'react'
import { useQuery,gql } from '@apollo/client';
import Messages from './components/Messages';
import "./App.css"

const get_data = gql`
{
  messages {
    items {
      id
      language 
      subject
      href
      view_href 
      search_snippet 
      post_time
      post_time_friendly 
      depth 
      read_only 
      edit_frozen 
      popularity 
      body
    }
  }
}
  
` ;

const App = () => {

  const {loading, error, data} = useQuery(get_data);
  console.log(data);

  if (loading) return <p className='load-para'>...Loading</p>  
  if (error) return <p className='err-msg'>{error.message}</p>
  return (
    <div className='App'>
       <h1 className="head">Fetching Data and Statehandling</h1>
       {data && data.messages.items.map(each => (
        <Messages key={each.id} each={each} />
       ))}
    </div> 
  )
}

export default App
