function calculateRgbSteps(rgb1, rgb2, steps) {
    let rdiff = (rgb1[0] - rgb2[0]) / steps;
    let gdiff = (rgb1[1] - rgb2[1]) / steps;
    let bdiff = (rgb1[2] - rgb2[2]) / steps;

    const arr = [];
    let i = 1;

    while (i < (steps + 1)) {
        let newRgb = [Math.round(rgb1[0] - rdiff * i), Math.round(rgb1[1] - gdiff * i), Math.round(rgb1[2] - bdiff * i)];
        arr.push(newRgb);
        i++;
    }

    return arr;
}

const ans = calculateRgbSteps([234, 128, 106], [238, 107, 45], 10);

console.log(ans);