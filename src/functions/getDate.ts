function getDate(n: number) {
  const objdate = new Date(n);
  const date = objdate
    .toISOString()
    .replace(/^([^T]+)T(.+)$/, '$1')
    .replace(/^(\d+)-(\d+)-(\d+)$/, '$3.$2.$1');
  const time = `${objdate.getHours()}:${objdate.getMinutes()}:${objdate.getSeconds()}`;
  return `${date}\n${time}`;
}

export default getDate;
