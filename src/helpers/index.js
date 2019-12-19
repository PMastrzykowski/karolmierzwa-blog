export const formatDate = (date) => {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    switch (month) {
        case 1:
            month = 'Styczeń';
            break;
        case 2:
            month = 'Luty';
            break;
        case 3:
            month = 'Marzec';
            break;
        case 4:
            month = 'Kwiecień';
            break;
        case 5:
            month = 'Maj';
            break;
        case 6:
            month = 'Czerwiec';
            break;
        case 7:
            month = 'Lipiec';
            break;
        case 8:
            month = 'Sierpień';
            break;
        case 9:
            month = 'Wrzesień';
            break;
        case 10:
            month = 'Październik';
            break;
        case 11:
            month = 'Listopad';
            break;
        case 12:
            month = 'Grudzień';
            break;
        default:
            break;
    }

    return dt + ' ' + month + ' ' + year;
}
