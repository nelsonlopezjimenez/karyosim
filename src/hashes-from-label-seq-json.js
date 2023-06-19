#! /usr/bin/env node
/** hashes-from-label-seq-json rename of hash-generate-from-all-pep-json
 * last modified: 6.18.2023 
 * modified 03.17.2023 
 * READ: a json file generated from ensemble all pep fasta
 *  './Homo_sapiens.GRCh38.pep.all.json from Homo_sapiens.GRCh38.pep.all.txt
 *  PROCESS:  create a labelHash and seqHash
 *  SAVE: './Homo_sapiens.GRCh38.pep.all.2hash.json
 */

const { writeFile, read } = require('fs');
const { readFile } = require('fs').promises;
const crypto = require('crypto');


const DIRNAME = '../DATA/';
// GCF_000001405.28_GRCh38.p2_protein.faalabel-seq.json
let fileName = 'GCF_000001405.28_GRCh38.p2_protein.faalabel-seq.json';
let fullPath = DIRNAME + fileName;

init5(fullPath);

// function log(m) { }
function log(m) {console.log(m)}

function init5(fileName){
  const readContentFile = async fileName => {
    try {
      const json = JSON.parse(
        await readFile(fullPath, {encoding: 'utf8'})
      );
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  // log(readContentFileNew);
  // readContentFileNew(fullPath).then(jsObj => console.log(m.length)) //
  readContentFile(fullPath).then(jsObj => {
    let modifier = "NelsonDLopez";
    let hashMethod = 'sha1';
    let labelSeqHashLenFlat = '';
    let labelHash2labelFlat = ''; 

    log(jsObj.length);
    let newJsObj = jsObj.map( (item, i) => {
      let obj = {};
      obj.labelhash = crypto.createHash(hashMethod).update(modifier + item.label).digest('hex');
      obj.seqHash = crypto.createHash(hashMethod).update(modifier + item.seq).digest('hex');
      obj.seqLen = item.seq.length;
      labelSeqHashLenFlat += `${obj.seqHash}\t${obj.labelhash}\t${obj.seqLen}\n`;
      labelHash2labelFlat += `${obj.seqHash}\t${item.label}\t${item.seq.length}\n`
      return obj;

    })
    writeFile(fullPath + '.hashed.json', JSON.stringify(newJsObj), (error) => {
      if (error) console.log(error);
      else console.log('success sha1 json')
    })
    writeFile(fullPath + '.hash2label.flat', labelHash2labelFlat, error => {
      if (error) console.log(error + 'line80');
      else console.log('writen sequence hash to label FLAT')
    })
    writeFile(fullPath + '-seq-label-seqLength.flat', labelSeqHashLenFlat, error => {
      if (error) console.log(error + ' line84');
      else console.log('flat file withfullPath');
    })
  });
}


// ('../DATA/GCF_000001405.28_GRCh38.p2_protein.faalabel-seq.json');

/**
 * 6.19.2023
 * same algorithm but instead of new array used the returne array from map function
 * readFile refactored to parse immediately after reading.
 * flat files created the same
 * pending to add other properties.
 * written to files. Pending to delete extensions to shorten file names.
 * 12.12.2022
 * ALGORiTHM
 * 1) input a json with label/fasta aa pairs
 * 2) read with fs.promises
 * 3) dot then( process the string);
 * 4) PROCESS: 
 * 5) JSON.parse the string
 * 6) for loop each line
 * 7) Generate hashes of label, fasta_aa, seq length
 * 8) add to array of json, and two flat files: one with seqHash and full label
 * 9) second flat file with seqHash, labelHash, and length. 
 * 10) add other properties at a later time
 * 11) write to files and quit.
 * 
 */