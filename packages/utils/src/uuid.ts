const hexList: string[] = [];
for (let i = 0; i <= 15; i += 1) {
  hexList[i] = i.toString(16);
}

export function uuidV4(): string {
  let uuidResult = '';
  const uuidLength = 36;
  const dashPositionUuid = new Set([9, 14, 19, 24]);

  for (let i = 1; i <= uuidLength; i += 1) {
    if (dashPositionUuid.has(i)) {
      uuidResult += '-';
    } else if (i === 15) {
      uuidResult += 4;
    } else if (i === 20) {
      uuidResult += hexList[(Math.random() * 4) | 8];
    } else {
      uuidResult += hexList[Math.trunc(Math.random() * 16)];
    }
  }
  return uuidResult.replace(/-/g, '');
}

let unique = 0;

export function shortUuidV4(prefix = ''): string {
  const time = Date.now();
  const random = Math.floor(Math.random() * 1000000000);
  unique += 1;
  return `${prefix}_${random}${unique}${String(time)}`;
}
