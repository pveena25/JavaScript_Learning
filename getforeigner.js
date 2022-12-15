const data = require('./team.json')


exports.foreigner = function(){
    let foreignerCount = 0;
    for (const [key, value] of Object.entries(data.player))
        {
            if(value.country!="India"){
                foreignerCount++;
            }
        }
        return foreignerCount;
    };

    //console.log(foreigner);
