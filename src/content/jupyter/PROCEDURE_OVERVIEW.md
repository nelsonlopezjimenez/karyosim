# Procedure overview

## 9.2.2024 (m.d.y)

1. Sanity check
```sh
$ for i in *.primer; do echo '============ HEAD === ' $i '============'; zless $i | head; echo '------------------ HEAD ----'; echo '--------------- TAIL ---------'; zless $i | tail; echo '--------------- TAIL '; done > heads-tails
```
1. TEST-chr10: 
```
>('338591', 'CHCHD3P1', '8619806', '8620809')	1004
GCTCCTGCTCTGGGGGAAAAGAATCCAGGCCCCTCCACGC....ATTGGCAGCAATTTGAAGGGCGGCCAAAACCTAGATCAGG
```
1. insilico PCR at https://genome.ucsc.edu/cgi-bin/hgPcr?hgsid=2341707234_NoL7BXYigD5mZhzNggr6pXJO7LVR&org=Human&db=hg38&wp_target=genome&wp_f=GCTCCTGCTCTGGGGGAAAAGAATCCAGGCCCCTCCACGC&wp_r=ATTGGCAGCAATTTGAAGGGCGGCCAAAACCTAGATCAGG&Submit=Submit&wp_size=4000&wp_perfect=15&wp_good=15&wp_flipReverse=on&boolshad.wp_flipReverse=0&wp_append=on&boolshad.wp_append=0
1. OUTPUT:  	
    >chr10:8619818+8620821 1004bp GCTCCTGCTCTGGGGGAAAAGAATCCAGGCCCCTCCACGC CCTGATCTAGGTTTTGGCCGCCCTTCAAATTGCTGCCAAT
1. Reference to fix map and patches: 
    1. https://www.ncbi.nlm.nih.gov/grc/help/definitions/#ALTERNATE
    1. https://genome-blog.gi.ucsc.edu/blog/2019/02/22/patches/
    1. https://genome.ucsc.edu/FAQ/FAQdownloads#downloadAlt
1. ref: https://genome.ucsc.edu/cgi-bin/hgc?hgsid=2341717678_FPa0eEaqsWn07YckYuaXgoP5mUpH&g=htcGetDna2&table=hgnc&i=HGNC%3A44697&o=8619805&l=8619805&r=8620808&getDnaPos=chr10%3A8%2C619%2C806-8%2C620%2C808&hgSeq.cdsExon=1&hgSeq.padding5=0&hgSeq.padding3=0&hgSeq.casing=upper&boolshad.hgSeq.maskRepeats=0&hgSeq.repMasking=lower&boolshad.hgSeq.revComp=0&submit=Get+DNA
1. OUTPUT:
```
>hg38_hgnc range=chr10:8619806-8620808 5'pad=0 3'pad=0 strand=+ repeatMasking=none 
GGTCGTGGCCTTGCTCCTGCTCTGGGGGAAAAGAATCCAGGCCCCTCCAC...ATCCAACAGAATCATACCACATTTCCATTGGCAGCAATTTGAAGGGCGGCCAA
            ||||||||||||||||||||||||||||||||||||||                             |||||||||||||||||||||||||||
            GCTCCTGCTCTGGGGGAAAAGAATCCAGGCCCCTCCACGC....                 ......ATTGGCAGCAATTTGAAGGGCGGCCAAAACCTAGATCAGG
TEST-chr10
```
1. At NCBI : https://www.ncbi.nlm.nih.gov/gene/338591
1. Web page:
```
Location: 10p14
Annotation release	Status	Assembly	Chr	Location
RS_2024_08	current	GRCh38.p14 (GCF_000001405.40)	10	NC_000010.11 (8619806..8620809)
RS_2024_08	current	T2T-CHM13v2.0 (GCF_009914755.1)	10	NC_060934.1 (8621279..8622282)
105.20220307	previous assembly	GRCh37.p13 (GCF_000001405.25)	10	NC_000010.10 (8661769..8662772)
```
1. OUTPUT: https://www.ncbi.nlm.nih.gov/nuccore/NC_000010.11?report=fasta&from=8619806&to=8620809
```
>NC_000010.11:8619806-8620809 Homo sapiens chromosome 10, GRCh38.p14 Primary Assembly
GGTCGTGGCCTTGCTCCTGCTCTGGGGGAAAAGAATCCAGGCCCCTCCACGCGAGTGTGGGCACGGGGGA...GCAGCAATTTGAAGGGCGGCCAAA
            ||||||||||||||||||||||||||||||||||||||||                     ||||||||||||||||||||||||
            GCTCCTGCTCTGGGGGAAAAGAATCCAGGCCCCTCCACGC.................ATTGGCAGCAATTTGAAGGGCGGCCAAAACCTAGATCAGG
            TEST-chr10
```
1. Test-chr3
```
>('90102', 'PHLDB2', '111732496', '111976517')	244022
GCAGAGGCCAGAGAGAGCAGGAAAGGAAATGGAAAGGAAC....AGATACATTTATTGCTGGGGATTGCAAGGAGTGTGTTTAC
```
1. NCBI
```
>NC_000003.12:111732496-111976517 Homo sapiens chromosome 3, GRCh38.p14 Primary Assembly
GTGACCACAGTCTGCAGAGGCCAGAGAGAGCAGGAAAGGAAATGGAAAGGAACCTCACCTTCATGCTTGG...ATGAACCCTGAAAAACTCTGACATCATATTGTTGTCTGTTTACACAGATACATTTATTGCTGGGGATTGC..AA
             ||||||||||||||||||||||||||||||||||||||||                                                                 |||||||||||||||||||||||||//
             GCAGAGGCCAGAGAGAGCAGGAAAGGAAATGGAAAGGAAC.................................................................AGATACATTTATTGCTGGGGATTGCAAGGAGTGTGTTTAC
```
1. .


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
1. zgrep 'chromosome 22' => 4357 hits
1. zgrep 'chromosome 22' + 'gene' => 896 hits
1. file: [ID, symbol, start, end]
1. read [ID, symbol, start, end] as set to eliminate duplicates
1. with chrNN.fna.gz and [ID, symbol, start, end] as in <img src="./images/Screenshot 2024-06-22 064723.png"/>
1. hash the [id, symbol, start, end].
1. build the sequence between start-end and hash
1. save as [{},{},{key/val}, {idSymbolHash: builtSeqHash}, {}, {},...{}]
1. file labelmap: key/value, hash/[id, symbol, start, end]
1. file labelseqhash: key/value, idSymbolHash/seqHash
1. file save as compressed chrNN.fna.gz.labelmap and labelseqhash

1. at some point do electronic PCR using primers on the 3' and 5' ends of the gene base on the feature_table on individual sequences


