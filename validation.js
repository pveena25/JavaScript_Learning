//const data = require('./team')
const foreignPlayer = require('./getforeigner')
const wicketKeeper = require('./getWC')

//console.log(foreignPlayer.foreigner());
//console.log(wicketKeeper.keeper());

let playerValidation = () =>{
    console.assert(
        foreignPlayer.foreigner() <= 4,
        `Foreign players requirement is not fulfilled, current size of foreign players in team are: ${foreignPlayer.foreigner()}`
    );
    console.assert(
        wicketKeeper.keeper() == 1,
        `Wicketkeeper requirement is not fulfilled, current size of wicket keepers in team are: ${wicketKeeper.keeper()}`
    );

}
 playerValidation();
