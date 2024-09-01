# Procedure overview

## 8.31.2024 (m.d.y)


### Processing faa

1. It was relatively easy: convert FASTA to 2 lines per protein by deleting new line chars from FASTA format
1. file, key/value: hash-label/hash-sequence
1. file, key/value: label/hash-label
1. count hash-sequence duplicates
1. file, key/['values-hash-label',]: hash-sequence/['hash-label1', 'hash-label2','etc'.....']
1. Some sequences highly repeated in GCG_versions, most sequence  unique

### Processing fna genomic data GRCh38.p14

1. https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/001/405/GCF_000001405.40_GRCh38.p14/GCF_000001405.40_GRCh38.p14_assembly_structure/Primary_Assembly/assembled_chromosomes/FASTA/
1. Example : >NC_000022.11 Homo sapiens chromosome 22, GRCh38.p14 Primary Assembly
1. creeperpandatrex@creepypandatrex MINGW64 ~/Documents/1000genomes/DATA/GCF000001405-38p14-assembly
1.  zgrep '>' chr22.fna.gz
    ```>NC_000022.11 Homo sapiens chromosome 22, GRCh38.p14 Primary Assembly
    $ zcat chr22.fna.gz | wc -l
    635232 lines
    Each line 80 characters```
1. 635232 x 80 = 50,818,560 characters
1. file compressed size: 10.4 MB
1. zgrep -P 'chromosome\t22' in 38.p14_feature_table to extract features for chromosome 22
1. Convert FASTA format to 2 lines format.
1. Get the features from feature_table file
```
$ zgrep -P 'chromosome\t22' GCF_000001405.40_GRCh38.p14_feature_table.txt.gz | awk -F'\t' '{print$1}' | sort --unique
CDS
C_region
J_segment
V_segment
gene
mRNA
misc_RNA
ncRNA
precursor_RNA
rRNA
tRNA

```

1. at some point do electronic PCR using primers on the 3' and 5' ends of the gene base on the feature_table on individual sequences


