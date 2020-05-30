


getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/2.css")
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.textContent = request.response
            document.head.appendChild(style)
        }

    }
    request.send()
}
getJs.onclick = () => {
    const request = new XMLHttpRequest
    request.open("GET", "/3.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement("script")
            script.textContent = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest
    request.open("GET", "/4.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement("div")
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
getXml.onclick = () => {
    request = new XMLHttpRequest
    request.open('GET', "/5.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    }
    request.send()
}
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/6.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            addName.innerText = object.name
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            const result = array.map((item) => {
                const li = document.createElement('li')
                li.innerText = item.id
                xxx.appendChild(li)
            }
            )


        }
    }
    n += 1
    request.send()
}