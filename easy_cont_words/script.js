function cont_words(){
    words=0
    text_area = document.getElementById("input").value

    text_area = text_area.trim()
    words=text_area.split(/\s+/)

    document.getElementById("cont").innerHTML = `<h3>O texto contém ${words.length} palavras<h3>`
    
        
}


