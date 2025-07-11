// Add Keyword Field
function addKeyword() {
    const keywordContainer = document.getElementById('keywordContainer');
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" name="keyword[]" placeholder="Enter keyword">
        <button type="button" onclick="removeField(this)" class="button3">Remove Field</button><br><br>
    `;
    keywordContainer.appendChild(div);
}

// Add File Group
function addFileGroup() {
    const fileContainer = document.getElementById('fileContainer');
    const div = document.createElement('div');
    div.classList.add('file-group');
    div.innerHTML = `
        <label for="filename">Name of file:</label><br>
            <input type="text" id="filename" name="filename"><br><br>
            
            <label for="filedescription">Description of file:</label><br>
            <input type="text" id="filedescription" name="filedescription"><br><br>

            <label for="ianamediatype">Add Distribution Files:</label><br>
            <input type="text" list="ianamediatype">
            <datalist name="ianamediatype" id="ianamediatype">
                <option value="application/geo+json">application/geo+json</option>
                <option value="application/javascript">application/javascript</option>
                <option value="application/json">application/json</option>
                <option value="application/pdf">application/pdf</option>
                <option value="application/vnd.ms-excel">application/vnd.ms-excel</option>
                <option value="application/vnd.ms-powerpoint">application/vnd.ms-powerpoint</option>
                <option value="application/vnd.ms-word.document.macroEnabled.12">application/vnd.ms-word.document.macroEnabled.12</option>
                <option value="application/zip">application/zip</option>
                <option value="audio/mpeg">audio/mpeg</option>
                <option value="image/jpeg">image/jpeg</option>
                <option value="image/png">image/png</option>
                <option value="text/csv">text/csv</option>
                <option value="text/markdown">text/markdown</option>
                <option value="text/plain">text/plain</option>
                <option value="text/xml">text/xml</option>
                <option value="text/x-python">text/x-python</option>
                <option value="video/mp4">video/mp4</option>
            </datalist><br>

        <button type="button" onclick="removeField(this)" class="button3">Remove Field</button><br><br>
    `;
    fileContainer.appendChild(div);
}

// Add Sub-Organization
function addSubOrganization() {
    const subOrgContainer = document.getElementById('subOrganizationContainer');
    const div = document.createElement('div');
    div.innerHTML = `
        <label for="suborg">Sub-Organization: </label>
        <input type="text" name="suborg[]">
        <button type="button" onclick="removeField(this)" class="button3">Remove Field</button><br><br>
    `;
    subOrgContainer.appendChild(div);
}

// Sub-Organizations Hierarchy
function createSubOrgHierarchy(subOrgs, start) {
    if (start >= subOrgs.length - 1) {
        return {
            "@type": "org:Organization",
            "name": subOrgs[start],
        }
    } else {
        return {
            "@type": "org:Organization",
            "name": subOrgs[start],
            "subOrganizationOf": createSubOrgHierarchy(subOrgs, start + 1)
        };
    }
}

// Remove Field
function removeField(element) {
    element.parentElement.remove();
}


function validateForm() {
    var x = document.forms["libraryItemForm"]["fedorapid"].value;
    if (x) {
        document.forms["libraryItemForm"]["fedorapid"].value = "null";
    }
    else {
        document.forms["libraryItemForm"]["fedorapid"].value = "https://rosap.ntl.bts.gov/fedora/oai?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:dot.stacks:" + x;
    }
    generateJSON()

    // Scroll to the download link after generating JSON
    const link = document.getElementById("downloadLink");
    link.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Generate JSON
function generateJSON() {
    const form = document.getElementById("libraryItemForm");
    const formData = new FormData(form);
    const jsonObject = {};

    // Basic fields
    formData.forEach((value, key) => {
        if (value.trim() !== "") {
            jsonObject[key] = value;
        }
    });

    // Keywords
    const keywords = Array.from(document.querySelectorAll('input[name="keyword[]"]'))
        .map(input => input.value.trim())
        .filter(value => value !== "");

    // Files
    const files = Array.from(document.querySelectorAll('.file-group')).map(group => ({
        filename: group.querySelector('input[name="filename"]').value.trim(),
        filedescription: group.querySelector('input[name="filedescription"]').value.trim(),
        ianamediatype: group.querySelector('input[list="ianamediatype"]').value.trim()
    })).filter(file => file.filename || file.filedescription || file.ianamediatype);
    

    // Sub-Organizations
    const subOrgs = Array.from(document.querySelectorAll('input[name="suborg[]"]'))
        .map(input => input.value.trim())
        .filter(value => value !== "");

    let subOrgHierarchy = null
    // Create nested subOrganizationOf structure
    if (subOrgs.length != 0) {
        subOrgHierarchy = createSubOrgHierarchy(subOrgs, 0);
    }

    // Construct Bureau Code
    const bureauCode = document.querySelector('#bureaucode')?.value || null;

    // Construct Program Code
    const programCode = document.querySelector('#programcode')?.value || null;

    // Construct Language
    const language = document.querySelector('#language')?.value || null;

    // Construct References
    const references = document.querySelector('#references')?.value || null;

    // Create JSON object following DCAT-US schema
    const jsonData = {
        "$schema": "https://resources.data.gov/schemas/dcat-us/v1.1/schema/catalog.json",
        "conformsTo": "https://project-open-data.cio.gov/v1.1/schema",
        "@type": "dcat:Catalog",
        "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
        "dataset": [
            {
                "@type": "dcat:Dataset",
                "accessLevel": jsonObject.publicaccesslevel,
                "bureauCode": bureauCode ? [bureauCode] : null,  // Ensure it's an array
                "contactPoint": {
                    "fn": jsonObject.contactpointfn,
                    "hasEmail": "mailto:" + jsonObject.contactpointemail,
                    "@type": "vcard:Contact"
                },
                "dataQuality": true,
                "description": jsonObject.description,
                "distribution": files.map(file => ({
                    "@type": "dcat:Distribution",
                    "accessURL": jsonObject.doi,
                    "title": file.filename,
                    "description": file.filedescription,
                    "mediaType": file.ianamediatype
                })),
                "format": jsonObject.format,
                "identifier": jsonObject.doi,
                "isPartOf": jsonObject.collection,
                "issued": jsonObject.issued,
                "keyword": keywords,
                "landingPage": jsonObject.doi,
                "language": language ? [language] : null, // Ensure it's an array
                "license": jsonObject.license,
                "modified": jsonObject.modified,
                "policyStatement": jsonObject.policystatement,
                "policyURL": jsonObject.policyurl,
                "programCode": programCode ? [programCode] : null,  // Ensure it's an array
                "publisher": {
                    "@type": "org:Organization",
                    "name": jsonObject.publisher,
                    ...(subOrgHierarchy && {"subOrganizationOf": subOrgHierarchy})
                },
                "references": references ? [references] : null,  // Ensure it's an array
                "rights": jsonObject.rights,
                "spatial": jsonObject.spatial,
                "title": jsonObject.title,
                "webService": jsonObject.fedorapid
            }
        ]
    };

    // Convert JSON object to a string and create Blob for download
const jsonString = JSON.stringify(jsonData, null, 2);
const blob = new Blob([jsonString], { type: "application/json" });
const link = document.getElementById("downloadLink");
link.href = URL.createObjectURL(blob);
link.download = `${jsonObject.title}.json`;
link.style.display = 'block';
link.textContent = "Download your JSON file";
}
