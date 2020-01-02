---
layout: page
title: ChIP-seq data analysis 
description: pipelines and scripts for handling ChIP-seq data
img:
---


I have been involved in couple of projects heavily based on ChIP-seq data.
See publications:
<ol>
  <li> male breast cancer project - published in <a href="https://www.nature.com/articles/s41467-018-02856-2">Nature Communication</a></li>
  <li> prostate cancer project - published in <a href="https://www.nature.com/articles/s41467-018-07270-2">Nature Communication</a></li>
</ol>

I wrote a `snakemake` pipeline and python scripts for robust/reproducible processing and visualization of the data.



<h3> Snakemake pipeline </h3>

The pipeline is hosted on the <a href="https://github.com/anoyaro84/snakemake_ChIPseq">github repository</a>.

Roughly, the pipeline takes the following steps to produce the outcome:

<ul>
  <li> Downloading raw data (either bam/fastq files) from the specified locations (local, remote, or GEO) in DataList.csv </li>
  <li> Alignment with bwa-mem (in case of fastq files) </li>
  <li> Marking duplicate reads with picard </li>
  <li> Removing low-quality reads (retain reads with mapping quality > 20) </li>
  <li> Peak calling with MACS1.4/MACS2/DFilter (support more than one peak callers) </li>
  <li> Taking intersection between the peaks </li>
</ul>

See also README.md on the repository.


<h3> Python scripts for visualization </h3>

`pybedtools`(see also <a href="https://daler.github.io/pybedtools/">online documentation</a>) is a python wrapper of the <a href="https://bedtools.readthedocs.io/en/latest/">bedtools</a>.

 
