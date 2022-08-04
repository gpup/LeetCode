//Watched a youtube tutorial where he used a map to store values, and simple logic to subtract those cases

const romanToInt = function(s) {
    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let result = 0 
    s.split('').forEach((num, i) => {
        if(map[num] < map[s[i + 1]]) {
            return result -= map[num];
        }else
            return result += map[num];
    });
    return result;
};