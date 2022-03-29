$(document).ready(function() {
    predmet = ``
    schedule.forEach(s => {
        addTable(s)
        $("#table").append(result)
    })

    function addTable(schedules) {
        lesson = schedules.lesson
        lesson.forEach(l => {
            addPredmet(l)
        })
        result = `<table class="table table-hover" week="${schedules.week}" group="${schedules.group}">
        <thead>
          <tr>
            <td colspan="2">${schedules.group}</td>
            <td colspan="2">${schedules.week}</td>
          </tr>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Название</th>
            <th scope="col">Преподователь</th>
            <th scope="col">Кабинет</th>
          </tr>
        </thead>
        <tbody>
            ${predmet}
        </tbody>
      </table>`
    }

    function addPredmet(lessons) {
        curentItem = 0
        predmet = ``
        curentItem++
        predmet += `<tr>
        <th scope="row">${curentItem}</th>
        <td>${lessons.name}</td>
        <td>${lessons.teacher}</td>
        <td>${lessons.office}</td>
      </tr>`
    }

});


{/* <table class="table table-hover" week="" group="">
            <thead>
              <tr>
                <td colspan="4">Номер группы</td>
              </tr>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Название</th>
                <th scope="col">Преподователь</th>
                <th scope="col">Кабинет</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> */}