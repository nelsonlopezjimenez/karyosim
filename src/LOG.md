## Using Chartjs bubble: an array of objects with x, y, and r attributes.
1. Hashes generated from ensemble homo sapiens all proteines GRCh38 p2 I believe
1. Duplicates counted using seqHash as basis. Result in an object { 'label': number, 'label': number, etc}
1. seqHash extracted using awk '{print $1}' from the seqHash-labelHash-seqLength
1. Data used to generate pie chart as well as doughnut chart. 
1. When all data used: nothing is visible; when reduced the size, doughnut looks good, but not enough
1. Moved to bubble.
1. Overall, it looks good, but the radio of some seqHash overlap with too many sequences.
1. ISSUE: 
    1. obj.x is the chromosome, obj.y is the position, obj.r is the number of duplicates
    1. Parsing seqHash2label: awk to extract label, parse it using string.split('\n'), then for each line split(':');
    1. then using obj.x = line[2] and obj.y = line[3], but for some reason string methods charAt(), includes(), did not work.
    1. OBSERVATION: obj.x correspond to chromosome number, but many items have different notation, maybe it is temporary
    1. I could not select those. Also the X as well as y chromosome I could not parse.
1. MISTAKE: in creating the bubble data object I mixed the indices of the duplicate object with the original data, the duplicate object has less items than the original data, it need to be fixed
1. PLAN: Use duplicate object to extract the radio property, use the seqHash data to find and extract the label, in the case of one-to-many extract the labels into an array and use as a tooltip
1. Create a bubble chart with sorted by number of duplicates and separate from unique sequences


# STEPS with Ensemble Homo_sapiens.GRCh38.pep.all
1. Generate seqHash-labelHash-seqLength; hash2label; dup-counted(to be flat.json); 
1. Transfer to current folder
1. node readFileGenerateStatistic.js --fileName=Homo_sapiens....SEQHASH-unsorted.flat to generate ...dup-counted
1. node sort-by-numb-duplics.js with input ....dup-counted (now flat.json) generates sorted-by-duplics.flat and json.
1. node bubble-dup-counted.js as fileName = ...hash2label.flat, as rawDuplics sorted-by-duplics.json
    1. two input files: ....hash2labels to generate a map with seqHash/label pairs and the sorted duplics to start drawing for larger to lesser number of duplicates. 
    1. bubble data for the graph comes as obj.x = scattered chromosome number, for X is 23, for Y is 24, for undefined =25
    1. obj.r comes from number of duplics
1. For NCBI protein sequences, the coordinates are not in the label, search for them in other files. 
1. TODO: compare seqHash/label maps, theorethically they should be the same.

# STEPS with NCBI protein : 03.28.2023
1. Generate seqHash-labelHash-seqLenght; hash2label; 
    1. converEnsembtFastaProtToJSONobj.js 
    1. INPUT: "*...pep.all" 
    1. OUTPUT: "*.label-seq.out.json" and "*.out.label-seq.flat"
    1. hash-generate-from-all-pep-json.js
    1. INPUT: "*.label-seq.out.json"
    1. OUTPUT: "*.hashed.json", "*.hash2label.flat", "*-seqHash-labelHash-seqLength.flat"

1. Generate number of unsorted duplicates
    1.  awk '{print $1}' 
    1. INPUT: GCF_000001405.28_GRCh38.p2_protein.faa.label-seq.out.json-seqHash-labelHash-seqLength.flat 
    1. OUTPUT: > GCF_000001405.28_GRCh38.p2_protein.faa.SEQHASH-unsorted.flat

1. readFileGenerateStatistics.js
    1. INPUT:  node readFileGenerateStatistic.js --fileName=GCF_000001405.28_GRCh38.p2_protein.faa.SEQHASH-unsorted.flat 
    1. OUTPUT: "*.dup-counted"

1. sort-by-numb-duplics.js
    1. INPUT: GCF_000001405.28_GRCh38.p2_protein.faa.SEQHASH-unsorted.flat.dup-counted
    1. renamed GCF_000001405.28_GRCh38.p2_protein.faa.SEQHASH-unsorted.flat.json
    1. OUTPUT: sorted-by-duplics.flat and sorted-by-duplics.json
```
 {{},{},{seqHash:125}.......}
 ```

1. map-ncbi-feature-table-to-unique-np-number.js 
    1. INPUT: ".....38.p14_feature_table.txt"
    1. OUTPUT: refseq2features.map.json 
    1. 
```
{
    "":[], "XP_016857897.1":["CDS","with_protein","GCF_000001405.40","Primary Assembly","chromosome","1","NC_000001.11","685716","686654","-","XP_016857897.1","","XM_017002408.2","olfactory receptor 4F3/4F16/4F29 isoform X1","OR4F16","81399","","939","312",""], 
    "vvvv":[' ',' ',],
    "vvvv",[' ', ' '],
}
```
1. parse_feature_table.js
    1. INPUT: refseq2features.map.json and sorted-by-duplics.json
    1. OUTPUT: bubble.json and map.json
    1. parse_feautures_table.js similar to bubble-dup-counted.js ==> generate the data for bubble chart and the map {'seqHash' ==> 'NP_XXXX.X ncbi seqLabel no hashed'}

1. BAR CHART: render first 1000 in 100 batches
1. PENDING: render each chromosome by passing a number (1-25): (1-22-X-Y-unclassified) unclassified: pateches, new, etc
1. PLAN: download all *.38.p1-13.protein.faa
1. PLAN: download all ...._feature_table.txt
1. PLAN: compare *..._translated_cds.faa with protein.faa
1. PLAN: check out the sequences per chromosome at the ncbi web site.

# List of files
1. GCF_000001405.40_GRCh38.p14_feature_table.txt
1. GCF_000001405.40_GRCh38.p14_genomic.fna.gz
1. GCF_000001405.40_GRCh38.p14_genomic.gbff.gz
1. GCF_000001405.40_GRCh38.p14_protein.faa.gz
1. GCF_000001405.40_GRCh38.p14_protein.gpff.gz
1. GCF_000001405.40_GRCh38.p14_translated_cds.faa.gz
1. GCF_000001405.40-RS_2023_03_annotation_report.xml
1. httpsftp.ncbi.nlm.nih.1. govgenomesrefseqvertebrate_mammalianHomo_sapiensall_assemb1. ly_versionsGCF_000001405.40_GRCh38.p14.txt
1. GCA_000001405.29_GRCh38.p14_genomic.fna.gz
1. GCA_000001405.29_GRCh38.p14_genomic.gbff.gz
1. GCF_000001405.40_GRCh38.p14_cds_from_genomic.fna.gz
1. GCF_000001405.40_GRCh38.p14_feature_count.txt

# List of files /users/Public/LEAME/

1. converEnsembtFastaProtToJSONobj.js
1. gitable.js
1. hash-generate-from-all-pep-json.js
1. readFileGenerateStatistic.js
1. subtlecrypto-client-readFile-gener-hex.js

# List of js files /Users/Public/2023/LEAME/extracted_files  MOST RECENT AS TO 3.238.2023
1. readFileGenerateStatistic.js
1. converEnsembtFastaProtToJSONobj.js
1. hash-generate-from-all-pep-json.jsls