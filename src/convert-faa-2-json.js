#! /usr/bin/env node
// 6.17.2023
// input: "*...pep.all" OR "*...38.p2-protein.faa"
// output: "...label-seq.out.json" AND "...out.label.seq.flat"

const { writeFile } = require('fs');
const { readFile } = require('fs').promises;

const DIRNAME = '../DATA/';
let fileName = 'GCF_000001405.28_GRCh38.p2_protein.faa';
let fullPath = DIRNAME + fileName;

function log(m) { }
// function log(m) {console.log(m)}

function init(fileName) {
    const readContentFile =  async fileName => {
        try {
            const myPromise = await readFile(fileName, {encoding: 'utf8'});
            return myPromise;
        } catch (error) {
            console.log(error);
        }
    }
    readContentFile(fullPath).then (item => {

        const fastaArray = [];
        let splitLines = item.split('\n');
        let myObj = {};
        let prevObj = {};

        
        let counterLgt = 0;
        let counterNoLgt = 0;
        let my = splitLines.map((line, i) => {
            if (line.charAt(0) === '>'){
                counterLgt++;
                prevObj = { ...myObj }
                myObj = { label: undefined, seq: '' }; // **** TO FIX seq == undefinedMAGNMM
                myObj.label = line;

                if (prevObj.label !== undefined){ // *** to fix first line when prevObj is undefined
                    fastaArray.push(prevObj);
                    return prevObj;
                }
            } else { // line.charAt(0) is not '>'
                myObj.seq += line;
                if (i === splitLines.length - 2){ // ****** because the last line is empty line
                    log("****** last line looping");
                    log(myObj);
                    fastaArray.push(myObj);
                    return myObj; // last object before the end of file
                }
                counterNoLgt++
            }
        })
        console.log(`my.length ${my.length}`);
        log(my);

        let final = my.filter(item => item !== undefined); // *** 
                //  ****** each '>' return myObj{label: seq}; lines with no '>' added undefined
                // ***** filter using undefined to get same data as in fastaArray
                // ****  if using map no need to create an extra array, and then run a filter to get
                //  final data with object {label: 'name', seq:'XXXXXXXXX'} 98121

        console.log(final.length);
        log(counterLgt); log(counterNoLgt)
        writeFile(fullPath + 'label-seq.json', JSON.stringify(fastaArray), (error) => {
            if (error) console.log(error);
            else console.log('success');
        });
        writeFile(fullPath + 'label-seq.fasta', item, error => {
            if (error) console.log(error)
            else console.log('success');
        });
        writeFile(fullPath + 'label-seq.map.json', JSON.stringify(final), error => {
            if (error) console.log(error)
            else console.log('map json success!')
        })

    })
}
init(fileName);

/**
 * ALGORITHM
 * 1. Read file content
 * 2. promise.then proccess content which is string
 * 3. split by newline
 * 4. declare current obj and prev obj
 * 5. use splitLines array dot map 
 * 5a. if charAt(0) is '>' assign to previous what is in currentobj
 * 5b reinitialize currentobj label to undefined and seq to ""
 * 5c assign currentobj.label the current line (which starts with '>')
 * 5d push previousobj to fasta array of objects {label:XXXX, seq: XXXXXX}
 * 5e if charAt(0) is not '>' then
 * 5f concatenate current line to current seq
 * 5g continue until second to the last line (because there is one extra line added)
 * 5f if second to last line: logout " last line looping", push currentobj
 * 5i write json obj and flat obj: json obj is in one line, flat obj is in 954907 lines
 */