function changeVocals (str) {
    //code di sini
    var change = '';
    for (var i=0; i<str.length; i++){
      if (str[i]==='A'||str[i]==='a'||str[i]==='E'||str[i]==='e'||str[i]==='I'||str[i]==='i'||str[i]==='O'||str[i]==='o'||str[i]==='U'||str[i]==='u'){
        change += String.fromCharCode(str.charCodeAt(i) + 1);
      }
      else{
        change += str[i];
      }
    }
    return reverseWord(change);
  }
  
  function reverseWord (str) {
    //code di sini
    var revstr = '';
    for (var i=str.length-1; i>=0;i--){
      revstr += str[i];
    }
    return setLowerUpperCase(revstr);
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var lowUp = '';
    for (var i=0; i<str.length; i++){
      if (str[i]===str[i].toUpperCase()){
        lowUp += str[i].toLowerCase();
      }
      else{
        lowUp += str[i].toUpperCase();
      }
    }
    return removeSpaces(lowUp);
  }
  
  function removeSpaces (str) {
    //code di sini
    var noSpace = '';
    for (var i=0; i<str.length; i++){
      if (str[i]!==' '){
        noSpace += str[i];
      }
    }
    return noSpace;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    else{
      return changeVocals(name);
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'