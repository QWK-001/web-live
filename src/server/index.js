export const getLiveRooms = (option) => {
    const apiURL = 'https://a1.easemob.com/appserver/liverooms';
    // let data = {
    //     cursor: option.cursor || '1',
    //     limit: parseInt(option.limit) || 10
    // }
    let liveRooms = fetch(apiURL, {
        method: 'GET',
        headers: new Headers(
            {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + 'YWMtbAfbdrIeEeqi3VPWuPdihU1-S6DcShHjkNXh_7qs2vUSn6gAgHoR6pe7OaLWzq6yAwMAAAFyzEv-hwBPGgCT2AXchwHoGr4c47vTK_PaY_SQmI0oQAKpezF5ZMtVHA'
            },
        )
    })
        .then(response => {
            return response.json().then(json => ({ json, response }));
        })
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        });
    liveRooms
        .then(res => {
            console.log("res>>>", res);
            option.callback && option.callback(res)
        })
    ["catch"](err => {
        console.error(err);
    });
}
