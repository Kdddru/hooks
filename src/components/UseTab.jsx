import React, { useState } from 'react'


const content = [
  {
		tab : 'section1',
		content : 'section1 is here'
	},
	{
		tab : 'section2',
		content : 'section2 is here'
	}
]

const useTabs = (init,allTabs)=>{
	const [currentIndex, setCurrentIndex] = useState(init);

	return{
		currentItem : allTabs[currentIndex],
		chageItem : setCurrentIndex 
	};
};


export default function UseTab() {
	const {currentItem, chageItem} = useTabs(0,content);


  return (
    <div>
			<h1>UseTab</h1>
			{content && content.map((section,i)=>(
				<button key={i} onClick={()=>chageItem(i)}>{section.content}</button>
			))}
			<div>{currentItem.content}</div>
		</div>
  )
}
