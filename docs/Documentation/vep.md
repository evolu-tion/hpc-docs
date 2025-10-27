---
title: "Variant Effect Predictor (VEP) User Manual on HPC"
sidebar_label: "VEP (Variant Effect Predictor)"
sidebar_position: 14
toc_min_heading_level: 2
toc_max_heading_level: 5
---

VEP (Variant Effect Predictor) determines the effect of your variants (SNPs, insertions, deletions, CNVs, or structural variants) on genes, transcripts, and protein sequences, as well as regulatory regions.

## Reference Files

Set the following environment variables:

```bash
export VEP_CACHE_DIR=/common/db/human_ref/vep_data
export VEP_PLUGINS_DIR=/common/db/human_ref/vep_plugin
export VEP_PLUGINS_SRC=/common/db/human_ref/vep_plugin/src
```

## Example of Running VEP

Use the following script to run VEP in the HPC environment:

```bash
apptainer exec \
  -B $VEP_PLUGINS_SRC:/plugins -B /common -B /home/$USER \
  /common/sif/vcf2maf.sif vep \
  --cache --offline --format vcf --vcf --force_overwrite \
  --fork $(nproc) \
  --dir $VEP_CACHE_DIR \
  --input_file input/input.vcf \
  --output_file output/output.vcf
```

## Adding Plugins

### CADD Plugin

```bash
--plugin CADD,snv=$VEP_PLUGINS_DIR/cadd/v1.7/GRCh38/whole_genome_SNVs.tsv.gz,indels=$VEP_PLUGINS_DIR/cadd/v1.7/GRCh38/gnomad.genomes.r4.0.indel.tsv.gz
```

### REVEL Plugin

```bash
--plugin REVEL,file=$VEP_PLUGINS_DIR/revel/new_tabbed_revel_grch38.tsv.gz --assembly GRCh38
```

### dbNSFP Plugin

```bash
--plugin dbNSFP,$VEP_PLUGINS_DIR/dbNSFP5.0a/dbNSFP5.0.1a_grch38.gz,MetaSVM_pred,MetaLR_pred,MetaRNN_pred,M-CAP_pred,BayesDel_addAF_pred
```

### ClinPred Plugin

```bash
--plugin ClinPred,file=$VEP_PLUGINS_DIR/ClinPred/ClinPred_hg38_sorted_tabbed.tsv.gz
```

### GO Plugin

```bash
--plugin GO,file=$VEP_PLUGINS_DIR/go/GO.pm_homo_sapiens_113_GRCh38.gff.gz
```

### Mastermind Plugin

```bash
--plugin Mastermind,$VEP_PLUGINS_DIR/mastermind/mastermind_cited_variants_reference-2021.08.03-grch38.vcf.gz,0,1
```

### Phenotypes Plugin

```bash
--plugin Phenotypes,dir=/plugins/Phenotypes.pm_homo_sapiens_113_GRCh38.gvf.gz,phenotype_feature=1
```

### AlphaMissense Plugin

```bash
--plugin AlphaMissense,file=$VEP_PLUGINS_DIR/AlphaMissense/AlphaMissense_hg38.tsv.gz

```


## Slurm Batch Script: vep_job.slurm
Save this file and submit it using sbatch `vep_job.slurm`.

```bash title="vep_job.sh"
#!/bin/bash
#SBATCH --job-name=vep                   # Job name
#SBATCH --output=vep_analysis_%j.out     # Output file
#SBATCH --error=vep_analysis_j%.err      # Error file
#SBATCH --time=1:00:00                   # Time limit (hh:mm:ss)
#SBATCH --cpus-per-task=8                # Number of CPU cores
#SBATCH --mem=8G                         # Use all allocated memory
#SBATCH --partition=compute              # Specify partition (change if needed)

# Load necessary modules
module load apptainer

# Define environment variables
export VEP_CACHE_DIR="/common/db/human_ref/vep_cache"
export VEP_PLUGINS_DIR="/common/db/human_ref/vep_plugin/src"
export VEP_PLUGINS_SRC="/common/db/human_ref/vep_plugin/src"

# Run VEP using Apptainer
apptainer exec \
  -B $VEP_PLUGINS_SRC:/plugins -B /common -B /home/$USER \
  /common/sif/vcf2maf.sif vep \
  --cache --offline --format vcf --vcf --force_overwrite \
  --fork $(nproc) \
  --dir $VEP_CACHE_DIR \
  --input_file input/input.vcf \
  --output_file output/output.vcf \
  --plugin CADD,snv=$VEP_PLUGINS_DIR/cadd/v1.7/GRCh38/whole_genome_SNVs.tsv.gz,indels=$VEP_PLUGINS_DIR/cadd/v1.7/GRCh38/gnomad.genomes.r4.0.indel.tsv.gz \
  --plugin REVEL,file=$VEP_PLUGINS_DIR/revel/new_tabbed_revel_grch38.tsv.gz --assembly GRCh38 \
  --plugin dbNSFP,$VEP_PLUGINS_DIR/dbNSFP5.0a/dbNSFP5.0.1a_grch38.gz,MetaSVM_pred,MetaLR_pred,MetaRNN_pred,M-CAP_pred,BayesDel_addAF_pred \
  --plugin ClinPred,file=$VEP_PLUGINS_DIR/ClinPred/ClinPred_hg38_sorted_tabbed.tsv.gz \
  --plugin GO,file=$VEP_PLUGINS_DIR/go/GO.pm_homo_sapiens_113_GRCh38.gff.gz \
  --plugin Mastermind,$VEP_PLUGINS_DIR/mastermind/mastermind_cited_variants_reference-2021.08.03-grch38.vcf.gz,0,1 \
  --plugin Phenotypes,dir=/plugins/Phenotypes.pm_homo_sapiens_113_GRCh38.gvf.gz,phenotype_feature=1
```

## Notes
- Ensure that all reference files and plugins are correctly installed and accessible.
- Adjust the `srun -c` parameter based on available CPU resources.
- Use appropriate paths to reference files if they differ from the defaults listed above.

For further details, refer to the [official VEP documentation](https://www.ensembl.org/info/docs/tools/vep/index.html).

