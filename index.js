
function distanceFromHqInBlocks(blocks) {
    const HQ = 42;
    if (blocks > HQ){
            return blocks - HQ;
            }
    else return HQ - blocks;
        }

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup)*264;
    

}function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs(startingBlock - endingBlock)*264;
}

function calculatesFarePrice(start,destination) {
    const feet=distanceTravelledInFeet(start,destination);
    if(feet <= 400){
        return 0;
    } else if (feet > 400 && feet < 2000){
        return (feet - 400) * 0.02;
         
    } else if (feet >= 2000 && feet < 2500){
        return 25;
    } else {
        return "cannot travel that far";
    }
    }
