---
layout: post
title: Our work on a novel integration method (WON-PARAFAC) is published in Nature Communication
date: 2019-11-6 16:11:00-0400
inline: false
---

My last work during the postdoc time @ NKI published in <a href="https://www.nature.com/articles/s41467-019-13027-2">Nature Communication</a>, entitled:

> Genomic data integration by WON-PARAFAC identifies interpretable factors for predicting drug-sensitivity in vivo


The method uses a cube-representation of multiple genomics data (gene by sample by data types) and apply a variant of parallel-factor analysis (PARAFAC), named WON-PARAFAC. 

WONPARAFAC summarizes multiple genomics data of cell lines using interpretable factors. These factors are invariant over model systems and capable of reconstructing PDX genomics data; moreover, they allow for response prediction and translate predictive drug-response information from cell lines to PDXs.

<img src="https://ccb.nki.nl/wp-content/uploads/2019/09/Slide2.jpg" alt="Overview of the approach" width="100%"> 

You can find the source code in MATLAB at the <a href="https://ccb.nki.nl/software/won-parafac/">Wessel's group website</a> (NKI) and also at the <a href="https://github.com/NKI-CCB/won-parafac">Github repository</a>.

