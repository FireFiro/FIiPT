$(document).ready(function() {
    maxitems = 3
    curentitems = 0
    createnewline = false
    prepod.forEach(p => {
        addCard(p)
    })

    function addCard(prepods) {
        if (createnewline) {
            console.log("newline")
        }
        if (curentitems !=3) {
            console.log(`addcard${curentitems}`)
            curentitems++
        } else {
            curentitems = 0
            createnewline = true
        }
        // start = `<div class="card bg-dark text-white hover-click" data-bs-toggle="modal" data-bs-target="#${prepods.modal.id}">`
        // image = `<img src="${prepods.image}" class="card-img">`
        // cardinfo = `<div class="card-img-overlay d-flex align-items-end">\n<p class="card-text">${prepods.fio}</p>\n</div>`

        // result = `${start}\n${image}\n${cardinfo}\n<div>`

        // $("#cards").append(result);
    }

});

/* <div class="card bg-dark text-white hover-click" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="https://cdn.discordapp.com/attachments/712187625720774687/957965555812433971/pexels-mikael-blomkvist-6476587.jpg" class="card-img" alt="...">
              <div class="card-img-overlay d-flex align-items-end">
                <p class="card-text">Препод1</p>
              </div>
            </div> */