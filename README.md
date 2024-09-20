# README for DCAT-US Version 1.1 Generator     
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" height="28"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" height="28"> <img src="https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON" height="28"> <a href="https://creativecommons.org/licenses/by/4.0"><img src="https://licensebuttons.net/l/by/3.0/88x31.png" alt="Creative Commons 4.0 BY License" height="28"></a>

National Transportation Library (NTL). Bureau of Transportation Statistics (BTS), U.S. Department of Transportation (USDOT). [ROR ID: https://ror.org/00snbrd52](https://ror.org/00snbrd52)  
2024-09-20  

## Table of Contents
A. [General Information](#a-general-information)  
B. [Sharing/Access & Policies Information](#b-sharingaccess-and-policies-information)  
C. [Data and Related Files Overview](#c-data-and-related-files-overview)  
D. [LibGuide Implementation Information](#d-libguide-implementation-information)  
E. [Update Log](#e-update-log)  

**Title of Dataset:**  DCAT-US Version 1.1 Generator  

**Description of the Project:** This project aims to ease barriers in creating DCAT-US version 1.1 JSON files on researchers, data managers, data curators, and all professionals who manage and create data packages for the U.S. Government. DCAT-US is the required metadata schema for all federally funded data. This tool is to ease the burden of creating these files by creating a simple HTML form that researchers and data managers themselves can use. The form can be embedded easily in any standard webpage. The form can also be embedded in SpringShare LibGuides, which is especially useful for librarians who handle federally-funded research data.

**Dataset Archive Link:** <https://github.com/ptvrdy/dcat_us_v1.1_generator>  

**DCAT-US Version 1.1 Link:** <https://resources.data.gov/resources/dcat-us/>

**Authorship Information:**  

>  *Principal Author*  
>  Name: Peyton Tvrdy <a href="https://orcid.org/0000-0002-9720-4725"><img src="https://th.bing.com/th/id/OIP.8aLkQghWV6uvFMxGtFAgmwHaHa?rs=1&pid=ImgDetMain" height="19"> ([0000-0002-9720-4725](https://orcid.org/0000-0002-9720-4725))   
>  Institution: National Transportation Library [(ROR ID: https://ror.org/00snbrd52)](https://ror.org/00snbrd52)   
>  Email: peyton.tvrdy.ctr@dot.gov  

>  *Contributor, Reviewer, and JavaScript Creator*  
>  Name: Joesph Lambeth     
>  Email: josephwlambeth@gmail.com  

*Disclaimer*
Significant portions of this code were generated using ChatGPT 4.5. 

*CSS Citation*
CSS for this project was modified from "Pretty Form" by Evan DiGiambattista ([GitHub](https://github.com/edigi135)) ([CodePen](https://codepen.io/edigiam)).
Link to CSS: <https://codepen.io/edigiam/pen/WwPPOv>  

## B. Sharing/Access and Policies Information  

**Recommended citation for the project:**  

>  Tvrdy, Peyton, and Joseph Lambeth (2024). *DCAT-US Version 1.1 Generator*. <https://github.com/ptvrdy/dcat_us_v1.1_generator>  

**Licenses/restrictions:** Licenses/restrictions placed on the data: <https://creativecommons.org/licenses/by/4.0>  
 
## C. Data and Related Files Overview  

File List:    

>  1. Filename: form.html  
>  Short Description:  HTML form   

>  2. Filename: styles.css    
>  Short Description:  CSS file containing styling and display.  

>  3. Filename: app.js  
>  Short Description:  Javascript file that takes HTML form input and translates it to the DCAT-US file.    

>  4. Filename: LICENSE  
>  Short Description:  Creative Commons 4.0 International Deed (CC BY 4.0).  

>  5. Filename: README.md  
>  Short Description:  README file for the project containing project and file information.   

## D. LibGuide Implementation Information   

1. Copy the CSS raw file link:
`https://raw.githubusercontent.com/ptvrdy/dcat_us_v1.1_generator/main/styles.css`

2. In the LibGuide Custom JS/CSS box, add the following `<link>` tag:
`<link rel="stylesheet" href="https://raw.githubusercontent.com/ptvrdy/dcat_us_v1.1_generator/main/styles.css">`  

3. Copy the Javascript raw file link:
`https://raw.githubusercontent.com/ptvrdy/dcat_us_v1.1_generator/main/app.js`

4. In the LibGuide Custom JS/CSS box, add the following `<script>` tag:
`<script src="https://raw.githubusercontent.com/ptvrdy/dcat_us_v1.1_generator/main/app.js"></script>`  

5. Copy the GitPages HTML raw file link:
`https://ptvrdy.github.io/dcat_us_v1.1_generator/form.html`  

6. In the LibGuide, create new box and add a "Widget"

7. In the Widget HTML box, add the following `<iframe>` tag:
`<iframe src="https://ptvrdy.github.io/dcat_us_v1.1_generator/form.html" width="100%" height="600px"></iframe>`  

8. Save the Widget and test functionality. Adjust width and height as needed.  

## E. Update Log  

This README.md file was originally created on 2024-09-20 by Peyton Tvrdy ([0000-0002-9720-4725](https://orcid.org/0000-0002-9720-4725)), Data Management and Data Curation Fellow, National Transportation Library <peyton.tvrdy.ctr@dot.gov>  
 
2024-09-20: Original file created  
