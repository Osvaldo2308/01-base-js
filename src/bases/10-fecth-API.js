const apiKey = 'yqJFeVW5wX1Ux5qiO0ATM9wEOvpjDkLt'
//https://api.giphy.com/v1/gifs/random?api_key=yqJFeVW5wX1Ux5qiO0ATM9wEOvpjDkLt


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp =>resp.json() )
    .then(( { data })=>
    { 
    //console.log(data)
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
})

