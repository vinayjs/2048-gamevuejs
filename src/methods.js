const destructureArray = (arr) => {
    let x = [[], [], [], []];
    for (let i = 0; i < arr.length; i++) {
      if (i >= 0 && i <= 3) {
        x[0].push(arr[i]);
      } else if (i >= 4 && i <= 7) {
        x[1].push(arr[i]);
      } else if (i >= 8 && i <= 11) {
        x[2].push(arr[i]);
      } else x[3].push(arr[i]);
    }
    return x;
  }


  
  const destructureUpDown = (arr) => {
    let x = [[], [], [], []];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || i === 4 || i === 8 || i === 12) {
        x[0].push(arr[i]);
      } else if (i === 1 || i === 5 || i === 9 || i === 13) {
        x[1].push(arr[i]);
      } else if (i === 2 || i === 6 || i === 10 || i === 14) {
        x[2].push(arr[i]);
      } else x[3].push(arr[i]);
    }
    return x;
  }

  

  const shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }


  export {destructureArray, destructureUpDown, shuffle}