const getCode = (container?: any, bgColor = 'gray'): number => {
  if(!container) return -1
  const res: number = Math.floor(Math.random() * (9999 - 1001) + 1001);
  let str:string = "";
  const degList: number[] = [];
  const colorList: string[] = [];
  for (let index = 0; index < 4; index++) {
    const res: number = Math.floor(Math.random() * 50);
    if (res % 2 === 0) {
      degList.push(0 - res);
    } else {
      degList.push(res);
    }
  }
  for (let index = 0; index < 4; index++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colorList.push(`rgb(${r},${g},${b})`);
  }

  for (let idx = 0; idx < res.toString().length; idx++) {
    str += `
      <span style='transform:rotate(${degList[idx]}deg);
          display:inline-block;
          font-size:29px;
          padding:0 4px;
          user-select:none;
        font-weight:${degList[idx] > 0 ? "bold" : ""};
        color:${colorList[idx]}

      '>${res.toString()[idx]}</span>
      `;
  }
  container.style.backgroundColor = bgColor
  container.style.filter = 'blur(0.2px)'
  container.innerHTML = str;
  return res;
};

export { getCode }