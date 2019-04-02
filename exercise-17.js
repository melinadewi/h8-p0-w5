function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = String(angka).split('');
  var hasil = 1;
  for (var i=0; i<str.length; i++){
    hasil = hasil * Number(str[i]);
  }
  if (String(hasil).length===1){
    return hasil;
  }
  else{
    return kaliTerusRekursif(hasil);
  }
  
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6