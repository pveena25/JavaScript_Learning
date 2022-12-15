const data = require('./team.json')

exports.keeper = function(){
    let wc = 0;
    for (const [key, value] of Object.entries(data.player))
    {
        if(value.role == "Wicket-keeper"){
            wc++;
            break;
        }
    }
    return wc;
};

//console.log(wc);
