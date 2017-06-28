function func1(...args){
 
	args.forEach((element, index) => {
		console.log(`${index + 1} → ${element / 7}`)
		console.log(element)
	})

}
func1(3, 5, 6, 2, 2)
