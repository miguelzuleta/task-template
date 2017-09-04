import React from 'react'
import ReactDOM from 'react-dom'

function func1(...args){
 
	args.forEach((element, index) => {
		console.log(`${index + 1} → ${element / 7}`)
		console.log(element)
	})

}
func1(3, 511, 6, 2, 21)

ReactDOM.render(
  <h1>magic!!!</h1>,
  document.getElementById('root')
)
