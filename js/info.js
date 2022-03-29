$(document).ready(function() {
    curentItems = 0
    result = ``
    coll = ``
    modal = ``
    prepod.forEach(p => {
        addCard(p)
        result += `\n${coll}\n`
    })
    result = `<div class="row row-cols-xl-3 row-cols-md-1 justify-content-sm-center pt-sm-5 pt-xl-0">${result}</div>`
    $("#cards").append(result)
    $("#modal").append(modal)

    function addCard(prepods) {
        // Generate Card
        start = `<div class="card bg-dark text-white hover-click" data-bs-toggle="modal" data-bs-target="#${prepods.modal.id}">`
        end = `</div>`
        image = `<img src="${prepods.image}" class="card-img">`
        cardinfo = `<div class="card-img-overlay d-flex align-items-end">\n<p class="card-text">${prepods.fio}</p>\n</div>`
        coll = `<div class="col-sm-10 pb-sm-3 col-lg-4 pb-3">\n${start}\n${image}\n${cardinfo}\n${end}\n</div>`
        curentItems++

        // Generate Modal
        modal += `\n<div class="modal fade" id="${prepods.modal.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Информация</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${prepods.modal.text}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>`

        return coll, modal
    }

});