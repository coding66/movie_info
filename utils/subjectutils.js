function proesseds(subjects){
  var that = this;
  for (var i = 0; i < subjects.length; i++) {
    var sub = subjects[i];
    that.proessed(sub);
  }
}
function proessed(subject){
  var director = subject.directors
  var acr = subject.casts
  var dir = ''
  for (var index in director) {
    dir = dir + director[index].name + '/'
  }
  if (dir != '') {
    var dir = dir.substring(0, dir.length - 1);
  }

  var aka = subject.aka
  var akastr = ''
  for (var index in aka) {
    akastr = akastr + aka[index] + '/'
  }
  if (akastr != '') {
    var akastr = akastr.substring(0, akastr.length - 1);
  }
  var acrs = subject.casts
  var acr = ''
  for (var index in acrs) {
    acr = acr + acrs[index].name + '/'
  }
  if (acr != '') {
    var acrr = acr.substring(0, acr.length - 1);
  }
  var movietype=subject.genres;
  var time=subject.year
  subject.text = '导演: ' + dir + '\n' + '演员: ' + acr + '\n' + '类型: ' + movietype + '\n' + '上映时间: ' + time;
}
module.exports={
  proessed:proessed,
  proesseds:proesseds
}