let HikeArray = [];

let HikeObject = function (pTrail, pWhere, pWhen, pTOD, pDistance, pNotes) {
    this.trailname = pTrail;
    this.where = pWhere;
    this.when = pWhen;
    this.timeofday = pTOD;
    this.distance = pDistance;
    this.note = pNotes;
}

HikeArray.push ( new HikeObject("Hike Mountain", "Washington", "2023-05-01", "Evening", "8 Miles", "This felt so much longer than it was.")  );
HikeArray.push ( new HikeObject("Hike Hill", "Colorado", "2020-08-22", "Morning", "12 Miles", "I don't recommend mornings for this one.")  );
HikeArray.push ( new HikeObject("Hike View", "Oregon", "2018-07-09", "Night", "3 Miles", "Easiest hike ever!")  );

let selectedTOD = "";

// code runs immediately
//================================================================

// runs  when dom is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
        HikeArray.push(new HikeObject(document.getElementById("trailInput").value, 
        document.getElementById("locationInput").value,
        document.getElementById("dateInput").value,
        selectedTOD,
        document.getElementById("distanceInput").value,
        document.getElementById("noteInput").value,
        // movieArray.length,  // set ID
        ));
        document.location.href = "index.html#listHikes";



        // HikeArray.push ( new HikeObject(document.getElementById("noteInput").value, selectedType,
        // document.getElementById("trailInput").value ) );
        // document.getElementById("locationInput").value = "";
        // document.getElementById("dateInput").value = "";
        // document.getElementById("noteInput").value = "";
        // document.getElementById("trailInput").value = "";

        createList();
    });

    $(document).bind("change", "#select-TOD", function (event, ui) {
        selectedTOD = $('#select-TOD').val();
    });

    $(document).on("pagebeforeshow", "#listHikes", function (event) {   // have to use jQuery 
        createList();
    });

});


//======================================
// function defintions
function createList() {
    // clear prior data
    var myul = document.getElementById("hikeListul");
    myul.innerHTML = "";

    HikeArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
          // added data-role="listview" to the ul in the html
        li.innerHTML = element.trailname + "    -    " + element.where + "    -    " + element.when + "    -    " + element.timeofday;
        myul.appendChild(li);
    });
};