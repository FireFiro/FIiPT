$(document).ready(function() {
    curentItems = 0
    result = ``
    coll = ``
    modal = ``
    entrant.forEach(p => {
        addCard(p)
        result += `\n${coll}\n`
    })
    result = `<div class="row row-cols-2 justify-content-sm-center pt-sm-5 pt-xl-0">${result}</div>`
    $("#cards").append(result)
    $("#modal").append(modal)

    function addCard(entrants) {
        // Generate Card
        start = `<div class="card bg-dark text-white hover-click" data-bs-toggle="modal" data-bs-target="#${entrants.modal.id}">`
        end = `</div>`
        image = `<img src="${entrants.image}" class="card-img">`
        cardinfo = `<div class="card-img-overlay d-flex align-items-center justify-content-around">\n<p class="card-text text-center">${entrants.fio}</p>\n</div>`
        coll = `<div class="col-sm-10 pb-sm-3 col-lg-4 pb-3">\n${start}\n${image}\n${cardinfo}\n${end}\n</div>`
        curentItems++

        // Generate Modal
        modal += `\n<div class="modal fade" id="${entrants.modal.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Информация</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${entrants.modal.text}
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

{/* <div class="modal fade" id="testID1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> */}