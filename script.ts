const profileInfo: HTMLBodyElement | null = document.querySelector('.profileInfo')

const dreamjournals = async () => {
    if (profileInfo) {
    profileInfo.innerHTML = ''
    const response = await fetch("./list.json")
    const data = await response.json()
    console.log(data)

    const lookUpDreamDiv = document.createElement('div')
    lookUpDreamDiv.setAttribute('id', 'lookUpDreamDiv')
    const lookUpDreamInput = document.createElement('input')
    lookUpDreamInput.setAttribute('id', 'lookUpDreamInput')
    const lookUpDreamButton = document.createElement('button')
    lookUpDreamButton.setAttribute('id', 'lookUpDreamButton')
    const lookUpDreamSubmit = document.createElement('button')
    lookUpDreamSubmit.setAttribute('id', 'lookUpDreamSubmit')

    lookUpDreamButton.innerText = 'title'
    lookUpDreamSubmit.innerText = 'Search'

    lookUpDreamDiv.append(lookUpDreamInput, lookUpDreamButton, lookUpDreamSubmit)
    profileInfo.append(lookUpDreamDiv)




    // profileInfo.style.display = 'none'
    console.log('hello')}
}