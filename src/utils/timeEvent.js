/* eslint-disable @typescript-eslint/no-redeclare */
//时分秒转化为秒
export const timeEvent = (e) => {
  var time = e;
  var len = time.split(':');
  if (len.length === 3) {
    var hour = time.split(':')[0];
    var min = time.split(':')[1];
    var sec = time.split(':')[2];
    return Number(hour * 3600) + Number(min * 60) + Number(sec);
  }
  if (len.length === 2) {
    var min = time.split(':')[0];
    var sec = time.split(':')[1];
    return Number(min * 60) + Number(sec);
  }
  if (len.length === 1) {
    var sec = time.split(':')[0];
    return Number(sec);
  }
};
