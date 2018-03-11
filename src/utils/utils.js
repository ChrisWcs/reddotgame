export const generateRange = (bound) => {
    let mat = [];

    for(let i = 0; i < bound; i++) {
        mat[i] = [];
        for(let j = 0; j < bound; j++) {
            mat[i][j] = false;
        }
    }

    let pos = generateRandom(bound);

    mat[pos.x][pos.y] = true;

    return mat;
};

const generateRandom = (bound) => {
    return {
        x: Math.floor(Math.random() * bound),
        y: Math.floor(Math.random() * bound),
    };
};