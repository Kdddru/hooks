import React, { useEffect, useState } from 'react'




const useTitle = (init) =>{
  const [title, setTitle] = useState(init);
  const updateTitle = () =>{
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle,[title]);

  return setTitle;
}


export default function UseTitle() {

  const titleUpdater = useTitle('Loading...');

  setTimeout(()=> titleUpdater('home'),3000)

  return (
    <div>
        <h3>UseTitle</h3>
        <hr/>
    </div>
  )
}
