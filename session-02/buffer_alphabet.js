const buffer = Buffer.alloc(26)

for (let i=0; i<26; i++) {
  buffer[i]=i+97;
}

console.log(buffer.toString('utf8'))