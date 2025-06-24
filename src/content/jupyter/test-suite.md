# Test suite 

## Procedure

1. convert from FASTA to python dictionary {'label': '>NX_XXXX', 'XXXXXXXXX'}.gz
1. *.labelmap.gz
1. Map seqHash to labels as [ {'seqHash': 'iiiiiiiii', 'label': 'NX_xxxxx'}, .... ]
1. *.labelseqHash.gz
1. Hash into [{'labelHash':'iiiiiiii', 'seqHash':'iiiiiiii'}, ....]
1. *.countdup.gz
1. Extract unique sequences as [ {'seqHash' : countDups}, .... ] and
1. [ { 'seqHash' : [ '>NX_XXXXX', '>NX_XXXX', ... ] }, ..... ]

## Input

1. https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/001/405/GCF_000001405.40_GRCh38.p14/

## Ouptut

1. *.labelmap.gz
1. *.labelseqhash.gz
1. *.countDup.gz
1. *.labelmap.labels.gz

## Algorithm
1. read gz files
1. select labelmap and labelseqhas: read first ant last, count len
1. check seqHash must be the same.

## Interesting notes
1. https://stackoverflow.com/questions/74325131/how-to-read-io-textiowrapper-multiple-times
    1. Imagine your f object is nothing but a cursor. Once the cursor has ended readinig the file, you have to retake it to the beginning.
    1. You can do this using the method seek with arguments (0, 0).
```py
# test both ends from C:\Users\creeperpandatrex\Documents\1000genomes\DATA\38.p14.rna 
# GCF_000001405.40_GRCh38.p14_rna.fna.gz.labelmap
# GLOBALS
import sys
import json
import gzip
from hashlib import sha256
import os
from dotenv import load_dotenv

inputPath = 'C:\\Users\\creeperpandatrex\\Documents\\1000genomes\\DATA\\38.p14.rna\\'
labelmap = 'GCF_000001405.40_GRCh38.p14_rna.fna.gz.labelmap.gz'
labelseqhash = 'GCF_000001405.40_GRCh38.p14_rna.fna.gz.labelseqhash.gz'


firstLastMap = extractFirstLast(gzip.open(inputPath + labelmap, 'rt')) # <class '_io.TextIOWrapper'>
firstLastHashes = extractFirstLast(gzip.open(inputPath + labelseqhash, 'rt')) # <class '_io.TextIOWrapper'>


print(firstLastMap)
print(firstLastHashes)
```
### another cell
```py
import json
def extractFirstLast(my):
    with my as file:
        print(type(file))
        tmp = file.read()
        print(type(tmp))
        print(len(tmp))
        print(len(json.loads(tmp)))
        myinput = json.loads(tmp)
    firstLast = []
    firstLast.append(myinput[0])
    firstLast.append(myinput[1])
    firstLast.append(myinput[-2])
    firstLast.append(myinput[-1])
    return firstLast
    
```

## labelmap to json: first two, last two records and len

class '_io.TextIOWrapper'>
class 'str'>
36807286
185121
class '_io.TextIOWrapper'>
class 'str'>
29989602
185121

## label labelhash
1. [{'label': '>NM_000014.6 Homo sapiens alpha-2-macroglobulin (A2M), transcript variant 1, mRNA', 
1. '```labelHash```': '1a2af39c48aadc26d49ed5fb60e7d78bdf35c2b7088c23eaba1a633a75b1e8d6'}, 
1. {'label': '>NM_000015.3 Homo sapiens N-acetyltransferase 2 (NAT2), mRNA', 
1. '`labelHash`': 'ac84c06c0242b7b31874696926796c55a028681b8a224711fa3e6a64a864302c'}, 
1. {'label': '>XR_953308.2 PREDICTED: Homo sapiens uncharacterized LOC105370752 (LOC105370752), transcript variant X5, ncRNA', 
1. '`labelHash`': '44c8c543875e58b62a98c8f24186bf3c90107ab0d9154ed01ee77a0d82fabac1'}, 
1. {'label': '>XR_953308.2 PREDICTED: Homo sapiens uncharacterized LOC105370752 (LOC105370752), transcript variant X5, ncRNA',
1. '`labelHash`': '44c8c543875e58b62a98c8f24186bf3c90107ab0d9154ed01ee77a0d82fabac1'}]

## labelhash seqhash
1. [{'```labelHash```': '1a2af39c48aadc26d49ed5fb60e7d78bdf35c2b7088c23eaba1a633a75b1e8d6', 
1. 'seqHash': '8cf4161a299b2d4b3efa87687f85b1f1468445dff5c9ff927018e6c9f2b58c2a'}, 
1. {'`labelHash`': 'ac84c06c0242b7b31874696926796c55a028681b8a224711fa3e6a64a864302c', 
1. 'seqHash': '76d2c9bc19bd552c3c11e09754a081881b17f1efeb320abb48637f362b430062'}, 
1. {'`labelHash`': '44c8c543875e58b62a98c8f24186bf3c90107ab0d9154ed01ee77a0d82fabac1', 
1. 'seqHash': '6f092438197c11aa7b0bec38191848bf05d0fe09a441382ec5335c054a67ea93'}, 
1. {'`labelHash`': '44c8c543875e58b62a98c8f24186bf3c90107ab0d9154ed01ee77a0d82fabac1', 
1. 'seqHash': '6f092438197c11aa7b0bec38191848bf05d0fe09a441382ec5335c054a67ea93'}]


