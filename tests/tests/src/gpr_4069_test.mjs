// Generated by ReScript, PLEASE EDIT WITH CARE


function f(value) {
  if (value == null) {
    return;
  } else {
    return value;
  }
}

function fxx(v) {
  let match = v();
  switch (match) {
    case 1 :
      return /* 'a' */97;
    case 2 :
      return /* 'b' */98;
    case 3 :
      return /* 'c' */99;
    default:
      return /* 'd' */100;
  }
}

function fxxx2(v) {
  if (v()) {
    return 2;
  } else {
    return 1;
  }
}

function fxxx3(v) {
  if (v()) {
    return 2;
  } else {
    return 1;
  }
}

export {
  f,
  fxx,
  fxxx2,
  fxxx3,
}
/* No side effect */