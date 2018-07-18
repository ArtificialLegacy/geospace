var boundaries = [];

function terrain() {
    for (blocksPlaced = 0; blocksPlaced < width; blocksPlaced++) {
        noiseVal = ((noise(blocksPlaced*0.0007))*height/21);
        boundaries.push(new Boundary(blocksPlaced, noiseVal*27+600, 2, 1000, 0))
    }
}
