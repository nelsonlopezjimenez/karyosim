# 1000 genomes ftp

1. found in [https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/](https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/)
1. Also https://www.internationalgenome.org/data/
1. https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/
1. Amazon S3 : s3://1000genomes
1. [https://www.internationalgenome.org/](https://www.internationalgenome.org/)

### from 
1.[https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/phase3/data/](https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/phase3/data/)
1. https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/phase3/data/HG00096/sequence_read/
1. ```
Parent Directory                                           -   
SRR062634.filt.fastq.gz               2010-08-28 04:15   24M  
SRR062634_1.filt.fastq.gz             2010-08-28 04:15  1.8G  
SRR062634_2.filt.fastq.gz             2010-08-28 04:15  1.8G  
SRR062635.filt.fastq.gz               2010-08-28 12:32  9.6M  
SRR062635_1.filt.fastq.gz             2010-08-28 12:32  1.8G  
SRR062635_2.filt.fastq.gz             2010-08-28 12:32  1.8G  
SRR062641.filt.fastq.gz               2010-08-31 08:13  8.9M  
SRR062641_1.filt.fastq.gz             2010-08-31 08:13  1.9G  
SRR062641_2.filt.fastq.gz             2010-08-31 08:13  1.8G  
SRR077487.filt.fastq.gz               2011-01-07 08:28   14M  
SRR077487_1.filt.fastq.gz             2011-01-07 08:28  1.8G  
SRR077487_2.filt.fastq.gz             2011-01-07 08:28  1.9G  
SRR081241.filt.fastq.gz               2011-01-24 06:33   14M  
SRR081241_1.filt.fastq.gz             2011-01-24 06:33  1.8G  
SRR081241_2.filt.fastq.gz             2011-01-24 06:33  1.9G  
```
1. https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/phase3/data/HG00699/sequence_read/
1. Parent Directory    
```                                       -   
ERR020268.filt.fastq.gz               2010-10-25 02:17   47M  
ERR020268_1.filt.fastq.gz             2010-10-25 02:17  6.8G  
ERR020268_2.filt.fastq.gz             2010-10-25 02:17  6.9G  
ERR031925.filt.fastq.gz               2011-04-08 03:34   21M  
ERR031925_1.filt.fastq.gz             2011-04-08 03:34  4.5G  
ERR031925_2.filt.fastq.gz             2011-04-08 03:34  4.7G  
```
1. [https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/phase3/data/HG04209/sequence_read/]https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/phase3/data/HG04209/sequence_read/
 
```
Parent Directory                                           -   
ERR250908.filt.fastq.gz               2013-04-07 10:22   39M  
ERR250908_1.filt.fastq.gz             2013-04-07 10:22  2.3G  
ERR250908_2.filt.fastq.gz             2013-04-07 10:22  2.4G  
ERR250909.filt.fastq.gz               2013-04-05 15:15   41M  
ERR250909_1.filt.fastq.gz             2013-04-05 15:15  2.3G  
ERR250909_2.filt.fastq.gz             2013-04-05 15:15  2.3G  
ERR251511.filt.fastq.gz               2013-04-09 09:07  9.9M  
ERR251511_1.filt.fastq.gz             2013-04-09 09:07  5.9G  
ERR251511_2.filt.fastq.gz             2013-04-09 09:07  6.1G  
ERR251512.filt.fastq.gz               2013-04-09 08:58   14M  
ERR251512_1.filt.fastq.gz             2013-04-09 08:58  5.9G  
ERR251512_2.filt.fastq.gz             2013-04-09 08:58  6.0G  
```

1. https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/README.sequence_data

1. https://ftp.sra.ebi.ac.uk/vol1/run/ERR398/ERR3988761/ HG00405 cram crai files ; 14 GB, 1.3 MB
1. https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/1000G_2504_high_coverage/additional_698_related/data/ERR3988761/


## CRAM

CRAM is a more highly compressed alternative to the BAM and SAM DNA sequence alignment file formats.
1. [https://davetang.org/muse/2014/09/26/bam-to-cram/](https://davetang.org/muse/2014/09/26/bam-to-cram/)
1. [38p14 broad institute assembly 38](https://github.com/broadinstitute/gatk/blob/master/src/test/resources/large/Homo_sapiens_assembly38.fasta.gz)

## Defintion CRAM/CRAI
CRAM is a format designed  by the European Bioinformatics Institute. It uses reference based compression, meaning that only base calls that differ to a designated reference sequence need to be stored. 
See http://www.ebi.ac.uk/ena/software/cram-toolkit for the EBI’s documentation. Typically CRAM achieves 40-50% space saving over the alternative BAM format. The CRAM specification can be found at the http://samtools.github.io/hts-specs/ page along with related formats.

## SAM format

1. [https://ubpred.org/asm-file-format.html](https://ubpred.org/asm-file-format.html)


# high coverage ref to bam to cram to bam.cram etc

1. https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/1000G_2504_high_coverage/working/20201028_3202_raw_GT_with_annot/20201028_1000G_2020Oct26_NYGC_JointGenotyping_README.pdf
    1. 20201028_1000G_2020Oct26_NYGC_JointGenotyping_README.pdf                                          2021-12-09 08:39   82K  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.annotated.clinical.txt      2021-12-09 08:39  681K  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.annotated.coding.txt        2021-12-09 08:39   35M  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.annotated.coding_rare.txt   2021-12-09 08:40   34M  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.annotated.txt               2021-12-09 08:53  4.5G  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.annotated.vcf.gz            2021-12-09 09:05  1.7G  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.annotated.vcf.gz.tbi        2021-12-09 09:05  219K  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.vcf.gz                      2021-12-12 12:10  130G  
    1. 20201028_CCDG_14151_B01_GRM_WGS_2020-08-05_chr1.recalibrated_variants.vcf.gz.tbi   


## Reference genome

1. https://ftp-trace.ncbi.nlm.nih.gov/1000genomes/ftp/technical/reference/GRCh38_reference_genome/
1. https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/technical/reference/GRCh38_reference_genome/
1. content folder
    1. [TXT]	20150713_location_of_centromeres_and_other_regions.txt	2015-07-13 13:33	1.3K	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla-extra.fa	2015-03-09 17:03	7.9M	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.dict	2015-03-27 19:49	739K	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa	2015-03-09 17:03	3.0G	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa.alt	2015-03-09 17:03	476K	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa.amb	2015-03-09 17:03	20K	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa.ann	2015-03-09 17:03	438K	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa.bwt	2015-03-09 17:03	3.0G	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa.fai	2015-03-09 17:03	151K	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa.pac	2015-03-09 17:03	767M	 
    1. [   ]	GRCh38_full_analysis_set_plus_decoy_hla.fa.sa	2015-03-09 17:03	1.5G	 
    1. [   ]	README.20150309.GRCh38_full_analysis_set_plus_decoy_hla	2015-07-13 13:33	1.9K	 
    1. [DIR]	other_mapping_resources/	2016-12-08 16:12	-	 


## [Genome Reference Consortium](https://www.ncbi.nlm.nih.gov/grc)
### Monday, May 9, 2022
### GRCh38.p14 is now released!

1. [Genome 38.p14 is not released](https://genomeref.blogspot.com/2022/05/grch38p14-is-now-released.html)
GRCh38.p14 (GCA_000001405.29/GCF_000001405.40), the latest update to the human reference assembly, has been released! It adds 69 new patch scaffolds, 51 of which are FIX patches that update sequences on the GRCh38 reference chromosomes or alternate loci, while 18 are NOVEL patches, providing new alternate representations for complex genomic regions that are inadequately represented by a single sequence. Two previously released FIX patches were also updated. With this release, the reference assembly contains a total of 250 patch scaffolds (164 FIX, 90 NOVEL).

30 of the patches included in this release include genome updates made in support of the MANE project, a joint NCBI-EBI effort to produce a minimal set of matching RefSeq and Ensembl transcripts of protein coding genes, creating a matched pair of transcripts but retaining their respective identifiers. Read more about MANE effort in their recent Nature publication. The corresponding patch updates to the reference assembly involved changes addressing normal human variation as well as correcting errors in the underlying component sequences. 

Of the 53 FIX patches in GRCh38.p14, 23 of these correct errors in individual assembly component sequences, resulting in updates to 12 gene representations (Table 1). 20 are variation-related updates, 12 of which provide the coding allele for 13 polymorphic pseudogenes that are non-coding on the corresponding GRCh38 chromosomes (Table 2). Additionally, 2 provided sequence updates at chromosomal loci where it's unclear if the GRCh38 sequence is in error or a rare haplotype. Patch scaffolds in GRCh38.p14 close 6 gaps in the reference assembly, and extend sequence into one other gap. 4 of the closed gaps are located within chromosomes, while the remaining 2 patch scaffolds closed "pre-telomeric" gaps, extending the sequence of the chromosome into the telomeric repeats.


## Annotation release

[https://www.ncbi.nlm.nih.gov/refseq/annotation_euk/Homo_sapiens/GCF_000001405.40-RS_2023_10/](https://www.ncbi.nlm.nih.gov/refseq/annotation_euk/Homo_sapiens/GCF_000001405.40-RS_2023_10/)
   