
function proessed(subject) {
  var director = subject.directors
  var dir = ''
  for (var index in director) {
    dir = dir + director[index].name + '/'
  }
  if (dir != '') {
    var dir = dir.substring(0, dir.length - 1);
  }
   
  var writer = subject.writers
  var writerstr = ''
  for (var index in writer) {
    writerstr = writerstr + writer[index].name + '/'
  }
  if (writerstr != '') {
    var writerstr = writerstr.substring(0, writerstr.length - 1);
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

  var tags = subject.tags
  var tagsstr = ''
  for (var index in tags) {
    tagsstr = tagsstr + tags[index] + '/'
  }
  if (tagsstr != '') {
    var tagsstr = tagsstr.substring(0, tagsstr.length - 1);
  }

  var movietype = subject.genres;
  var time = subject.year
  var country=subject.countries
  subject.text = '别名:  ' + akastr + '\n' + '演员:  ' + acr + '\n' + '类型:  ' + movietype + '\n' + '上映时间:  ' + time+'\n'+'蕴意: '+tagsstr+'\n'+'国家: '+country
}
module.exports = {
  proessed: proessed
}