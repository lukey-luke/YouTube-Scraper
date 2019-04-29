function draw_winnername_logo(username) {}
function draw_chart(pewdiepie_subs, tseries_subs) {
    //code
}
function get_sub_counts() {
    return $.get('/api/get_sub_counts')
}


$(document).ready(function() {
    get_sub_counts().then(function(data) {
        // draw_chart(data["pewdiepie"], data["tseries"]);
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
        // $.get(imgUrl, (resp) => {
        //     $('#winner_logo').html();
        // });
    });
});
