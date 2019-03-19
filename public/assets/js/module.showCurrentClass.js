class showCurrentClassState {
    /**
     *
     * @param {String} eIcon ID of the element with icon
     * @param {String} cName ID of the element with current class name
     * @param {String} bTime ID of the element with break times
     */
    constructor(eIcon, cName, bTime) {
        const currentHourMinutes = getCurrentDateTime()[3] + '' + getCurrentDateTime()[4];
        const classStateIcon = document.getElementById(eIcon);
        const classStateName = document.getElementById(cName);
        const classStateTime = document.getElementById(bTime);
        update();
        showTime();
        setInterval(function () {
            update();
        }, 60000);

        function update() {
            switch (true) {
                case (currentHourMinutes < '0700'):
                    // c_null
                    classStateIcon.innerHTML = '<i class="material-icons">free_breakfast</i>' + ' ' + '<i class="material-icons">fastfood</i>';
                    classStateName.textContent = 'Dobré ráno';
                    break;
                case (currentHourMinutes < '0745'):
                    // c0
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '0. hodina';
                    break;
                case (currentHourMinutes < '0750'):
                    // c0 - b5 => c1
                    classStateIcon.innerHTML = '<i class="material-icons">fastfood</i>';
                    classStateName.textContent = '5-minútová prestávka';
                    break;
                case (currentHourMinutes < '0835'):
                    // c1
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '1. hodina';

                    break;
                case (currentHourMinutes < '0840'):
                    // c1 - b5 => c2
                    classStateIcon.innerHTML = '<i class="material-icons">fastfood</i>';
                    classStateName.textContent = '5-minútová prestávka';
                    break;
                case (currentHourMinutes < '0925'):
                    // c2
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '2. hodina';
                    break;
                case (currentHourMinutes < '0935'):
                    // c2 - b10 => c3
                    classStateIcon.innerHTML = '<i class="material-icons">fastfood</i>';
                    classStateName.textContent = '10-minútová prestávka';
                    break;
                case (currentHourMinutes < '1020'):
                    // c3
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '3. hodina';
                    break;
                case (currentHourMinutes < '1030'):
                    // c3 - b10 => c4
                    classStateIcon.innerHTML = '<i class="material-icons">fastfood</i>';
                    classStateName.textContent = '10-minútová prestávka';
                    break;
                case (currentHourMinutes < '1115'):
                    // c4
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '4. hodina';
                    break;
                case (currentHourMinutes < '1120'):
                    // c4 - b5 => c5
                    classStateIcon.innerHTML = '<i class="material-icons">smoking_rooms</i>';
                    classStateName.textContent = '5-minútová prestávka';
                    break;
                case (currentHourMinutes < '1205'):
                    // c5
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '5. hodina';
                    break;
                case (currentHourMinutes < '1240'):
                    // c5 - b30 => c6
                    classStateIcon.innerHTML = '<i class="material-icons">local_dining</i>';
                    classStateName.textContent = '30-minútová prestávka';
                    break;
                case (currentHourMinutes < '1325'):
                    // c6
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '6. hodina';
                    break;
                case (currentHourMinutes < '1330'):
                    // c6 - b5 => c7
                    classStateIcon.innerHTML = '<i class="material-icons">fastfood</i>';
                    classStateName.textContent = '5-minútová prestávka';
                    break;
                case (currentHourMinutes < '1415'):
                    // c7
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '7. hodina';
                    break;
                case (currentHourMinutes < '1420'):
                    // c7 - b5 => c8
                    classStateIcon.innerHTML = '<i class="material-icons">fastfood</i>';
                    classStateName.textContent = '5-minútová prestávka';
                    break;
                case (currentHourMinutes < '1505'):
                    // c8
                    classStateIcon.innerHTML = '<i class="material-icons">school</i>';
                    classStateName.textContent = '8. hodina';
                    break;
                default:
                    // EOC
                    classStateIcon.innerHTML = '<i class="material-icons">done_all</i>';
                    classStateName.textContent = 'Koniec vyučovania';
                    classStateTime.textContent = '\\ (•◡•) /';
                    break;
            };
        }

        function showTime() {
            switch (true) {
                case (currentHourMinutes < '0700'):
                    // c_null
                    classStateTime.textContent = 'Vyučovanie začína o 7:00';
                    break;
                case (currentHourMinutes < '0745'):
                    // c0
                    classStateTime.textContent = 'Koniec 07:45';
                    break;
                case (currentHourMinutes < '0750'):
                    // c0 - b5 => c1
                    classStateTime.textContent = 'Koniec 07:50';
                    break;
                case (currentHourMinutes < '0835'):
                    // c1
                    classStateTime.textContent = 'Koniec 08:35';
                    break;
                case (currentHourMinutes < '0840'):
                    // c1 - b5 => c2
                    classStateTime.textContent = 'Koniec 08:40';
                    break;
                case (currentHourMinutes < '0925'):
                    // c2
                    classStateTime.textContent = 'Koniec 09:25';
                    break;
                case (currentHourMinutes < '0935'):
                    // c2 - b10 => c3
                    classStateTime.textContent = 'Koniec 09:35';
                    break;
                case (currentHourMinutes < '1020'):
                    // c3
                    classStateTime.textContent = 'Koniec 10:20';
                    break;
                case (currentHourMinutes < '1030'):
                    // c3 - b10 => c4
                    classStateTime.textContent = 'Koniec 10:30';
                    break;
                case (currentHourMinutes < '1115'):
                    // c4
                    classStateTime.textContent = 'Koniec 11:15';
                    break;
                case (currentHourMinutes < '1120'):
                    // c4 - b5 => c5
                    classStateTime.textContent = 'Koniec 11:20';
                    break;
                case (currentHourMinutes < '1205'):
                    // c5
                    classStateTime.textContent = 'Koniec 12:05';
                    break;
                case (currentHourMinutes < '1240'):
                    // c5 - b30 => c6
                    classStateTime.textContent = 'Koniec 12:40';
                    break;
                case (currentHourMinutes < '1325'):
                    // c6
                    classStateTime.textContent = 'Koniec 13:25';
                    break;
                case (currentHourMinutes < '1330'):
                    // c6 - b5 => c7
                    classStateTime.textContent = 'Koniec 13:30';
                    break;
                case (currentHourMinutes < '1415'):
                    // c7
                    classStateTime.textContent = 'Koniec 14:15';
                    break;
                case (currentHourMinutes < '1420'):
                    // c7 - b5 => c8
                    classStateTime.textContent = 'Koniec ';
                    break;
                case (currentHourMinutes < '1505'):
                    // c8
                    classStateTime.textContent = 'Koniec 15:05';
                    break;
                default:
                    break;
            };
        }
    }
}