var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);



function timeBlocks () {
    var i = 0,
        blocks = [],
        b = {};
    
    for (i; i < 48; i++) {
        b = block(i / 2);
        blocks.push({block: i + 1, military: b.mil, standard: b.std});
    }
    
    return blocks;
}

function block(t) {
    var m = t,
        meridian = t >= 12 ? "pm" : "am",
        s = !Math.floor(t) % 12 ? (t % 12) + 12 : t % 12;
    
    function convert (time) {
        var hrs = Math.floor(time),
            mins = (time - hrs) * 60;
            
        return {
            std: `${hrs}:${mins < 10 ? "0" + mins : mins} ${meridian}`,
            mil: `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}`
        };
    }
    
    return {
        std: convert(s).std,
       
// run this program! mil: convert(m).mil
    };
}

var b = timeBlocks();
console.log(b);
