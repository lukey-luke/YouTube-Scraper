function draw_winnername_logo(username) {}
function get_sub_counts() {
    return $.get('/api/get_sub_counts')
}


$(document).ready(function() {
    get_sub_counts().then(function(data) {
        create_chart(data["tseries"], data["pewdiepie"]);
        return data["pewdiepie"] > data["tseries"];

    }).then(function(isPewdiepieWinner) {
        let imgUrl = '';
        if (isPewdiepieWinner) {
            imgUrl = '/static/pewdiepie.png';
        }
        else {
            imgUrl = '/static/tseries.png';
        }

        let imgElement = `<img class="animated-logo" src="${imgUrl}"/>`;
        console.log('doingit');
        $('#winner_logo').html(imgElement);
    });
});
