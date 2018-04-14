const transStates = ['entering', 'entered', 'exiting', 'exited', 'unmounted'];
const transState = {
    entering: transStates[0],
    entered: transStates[1],
    exiting: transStates[2],
    exited: transStates[3],
    unmounted: transStates[4],
};

const turnDirs = ['forward', 'backward'];
const turnDir = {
    f: turnDirs[0],
    b: turnDirs[1],
};

export {
    transState,
    transStates,
    turnDir,
    turnDirs,
};