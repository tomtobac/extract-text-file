export function getTextFromFile(file) {
    if (file.type === "text/plain") {
        return file.text();
    }
    // .pdf
    if (file.type === "application/pdf") {
        throw new Error("Not implemented");
    }
    // .docx
    if (file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        throw new Error("Not implemented");
    }
    throw new Error("Format not supported");
}
